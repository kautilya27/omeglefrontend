"use client"

import { useTheme } from "../contexts/ThemeContext"

const VideoDisplay = ({ localVideoRef, remoteVideoRef, connected }) => {
  const { darkMode } = useTheme()

  return (
    <div className="mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className={`relative rounded-lg overflow-hidden ${darkMode ? "bg-gray-700" : "bg-gray-200"}`}>
          <video ref={localVideoRef} autoPlay muted playsInline className="w-full h-64 object-cover" />
          <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded">You</div>
        </div>

        <div className={`relative rounded-lg overflow-hidden ${darkMode ? "bg-gray-700" : "bg-gray-200"}`}>
          {connected ? (
            <video ref={remoteVideoRef} autoPlay playsInline className="w-full h-64 object-cover" />
          ) : (
            <div className="w-full h-64 flex items-center justify-center">Waiting for partner...</div>
          )}
          {connected && (
            <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded">Stranger</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default VideoDisplay
