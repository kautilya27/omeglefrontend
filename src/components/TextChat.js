"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "../contexts/ThemeContext"

const TextChat = ({ messages, currentMessage, setCurrentMessage, sendMessage, connected }) => {
  const { darkMode } = useTheme()
  const messagesEndRef = useRef(null)

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage()
    }
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <div className="mb-6">
      <div className={`h-64 overflow-y-auto p-4 mb-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-200"}`}>
        {messages.length === 0 && !connected && (
          <div className="h-full flex items-center justify-center text-gray-500">Waiting for someone to connect...</div>
        )}

        {messages.length === 0 && connected && (
          <div className="h-full flex items-center justify-center text-gray-500">
            Connected! Say hello to your new friend.
          </div>
        )}

        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 ${msg.sender === "me" ? "text-right" : "text-left"}`}>
            <span
              className={`inline-block px-3 py-2 rounded-lg ${
                msg.sender === "me"
                  ? darkMode
                    ? "bg-blue-600"
                    : "bg-blue-500 text-white"
                  : darkMode
                    ? "bg-gray-600"
                    : "bg-gray-300"
              }`}
            >
              {msg.text}
            </span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="flex">
        <input
          type="text"
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={connected ? "Type a message..." : "Waiting for connection..."}
          disabled={!connected}
          className={`flex-grow p-3 rounded-l ${
            darkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-300"
          } border`}
        />
        <button
          onClick={sendMessage}
          disabled={!connected || !currentMessage.trim()}
          className={`p-3 rounded-r ${
            connected && currentMessage.trim()
              ? "bg-blue-500 hover:bg-blue-600 text-white"
              : "bg-gray-400 text-gray-200"
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default TextChat
