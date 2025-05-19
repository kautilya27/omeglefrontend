"use client"

import { useState } from "react"
import { useTheme } from "../contexts/ThemeContext"

const ReportModal = ({ onClose, onSubmit }) => {
  const { darkMode } = useTheme()
  const [reason, setReason] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(reason)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className={`rounded-lg p-6 max-w-md w-full ${darkMode ? "bg-gray-800" : "bg-white"}`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Report User</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">Reason for report:</label>
            <select
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
              className={`w-full p-2 rounded border ${
                darkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-300"
              }`}
            >
              <option value="">Select a reason</option>
              <option value="inappropriate_content">Inappropriate Content</option>
              <option value="harassment">Harassment</option>
              <option value="spam">Spam</option>
              <option value="underage_user">Underage User</option>
              <option value="other">Other</option>
            </select>
          </div>

          {reason === "other" && (
            <div className="mb-4">
              <label className="block mb-2">Please specify:</label>
              <textarea
                className={`w-full p-2 rounded border ${
                  darkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-300"
                }`}
                rows="3"
              ></textarea>
            </div>
          )}

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className={`px-4 py-2 rounded ${
                darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!reason}
              className={`px-4 py-2 rounded ${
                reason ? "bg-red-500 hover:bg-red-600 text-white" : "bg-gray-400 text-gray-200"
              }`}
            >
              Submit Report
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ReportModal
