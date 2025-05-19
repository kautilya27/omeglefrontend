"use client"

import { useTheme } from "../contexts/ThemeContext"

const AdBanner = ({ position }) => {
  const { darkMode } = useTheme()

  return (
    <div
      className={`w-full h-24 mb-4 flex items-center justify-center rounded ${
        darkMode ? "bg-gray-800 text-gray-400" : "bg-gray-200 text-gray-600"
      }`}
    >
      <div className="text-center">
        <p>Advertisement</p>
        <p className="text-xs">Google Ad will appear here</p>
      </div>
    </div>
  )
}

export default AdBanner
