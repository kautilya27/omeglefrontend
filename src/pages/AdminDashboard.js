"use client"

import { useState, useEffect } from "react"
import { useTheme } from "../contexts/ThemeContext"
import axios from "axios"

const AdminDashboard = () => {
  const { darkMode } = useTheme()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [stats, setStats] = useState({
    totalSessions: 0,
    activeSessions: 0,
    totalReports: 0,
    averageSessionDuration: 0,
  })
  const [reports, setReports] = useState([])
  const [error, setError] = useState("")

  const login = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL || "http://localhost:5000"}/api/admin/login`, {
        username,
        password,
      })

      localStorage.setItem("adminToken", response.data.token)
      setIsAuthenticated(true)
      fetchData()
    } catch (error) {
      setError("Invalid credentials")
    }
  }

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("adminToken")

      const statsResponse = await axios.get(
        `${process.env.REACT_APP_API_URL || "http://localhost:5000"}/api/admin/stats`,
        { headers: { Authorization: `Bearer ${token}` } },
      )

      const reportsResponse = await axios.get(
        `${process.env.REACT_APP_API_URL || "http://localhost:5000"}/api/admin/reports`,
        { headers: { Authorization: `Bearer ${token}` } },
      )

      setStats(statsResponse.data)
      setReports(reportsResponse.data)
    } catch (error) {
      setError("Failed to fetch data")
      if (error.response && error.response.status === 401) {
        setIsAuthenticated(false)
        localStorage.removeItem("adminToken")
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("adminToken")
    if (token) {
      setIsAuthenticated(true)
      fetchData()
    }
  }, [])

  const logout = () => {
    localStorage.removeItem("adminToken")
    setIsAuthenticated(false)
  }

  if (!isAuthenticated) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}
      >
        <div className={`p-8 rounded-lg shadow-lg max-w-md w-full ${darkMode ? "bg-gray-800" : "bg-white"}`}>
          <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>

          {error && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">{error}</div>}

          <form onSubmit={login}>
            <div className="mb-4">
              <label className="block mb-2">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={`w-full p-3 rounded border ${
                  darkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-300"
                }`}
                required
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full p-3 rounded border ${
                  darkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-300"
                }`}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <button onClick={logout} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className={`p-6 rounded-lg shadow ${darkMode ? "bg-gray-800" : "bg-white"}`}>
            <h2 className="text-lg font-semibold mb-2">Total Sessions</h2>
            <p className="text-3xl font-bold">{stats.totalSessions}</p>
          </div>

          <div className={`p-6 rounded-lg shadow ${darkMode ? "bg-gray-800" : "bg-white"}`}>
            <h2 className="text-lg font-semibold mb-2">Active Sessions</h2>
            <p className="text-3xl font-bold">{stats.activeSessions}</p>
          </div>

          <div className={`p-6 rounded-lg shadow ${darkMode ? "bg-gray-800" : "bg-white"}`}>
            <h2 className="text-lg font-semibold mb-2">Total Reports</h2>
            <p className="text-3xl font-bold">{stats.totalReports}</p>
          </div>

          <div className={`p-6 rounded-lg shadow ${darkMode ? "bg-gray-800" : "bg-white"}`}>
            <h2 className="text-lg font-semibold mb-2">Avg. Session Duration</h2>
            <p className="text-3xl font-bold">{stats.averageSessionDuration}s</p>
          </div>
        </div>

        <div className={`p-6 rounded-lg shadow mb-8 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
          <h2 className="text-xl font-bold mb-4">Recent Reports</h2>

          {reports.length === 0 ? (
            <p className="text-gray-500">No reports found</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className={`${darkMode ? "border-gray-700" : "border-gray-200"} border-b`}>
                    <th className="text-left py-3 px-4">Date</th>
                    <th className="text-left py-3 px-4">IP Address</th>
                    <th className="text-left py-3 px-4">Reason</th>
                    <th className="text-left py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {reports.map((report) => (
                    <tr key={report._id} className={`${darkMode ? "border-gray-700" : "border-gray-200"} border-b`}>
                      <td className="py-3 px-4">{new Date(report.createdAt).toLocaleString()}</td>
                      <td className="py-3 px-4">{report.reportedIp}</td>
                      <td className="py-3 px-4">{report.reason}</td>
                      <td className="py-3 px-4">
                        <button className="text-red-500 hover:text-red-700">Ban IP</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
