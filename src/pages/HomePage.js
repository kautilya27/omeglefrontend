"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"

const HomePage = () => {
  const navigate = useNavigate()
  const [onlineUsers] = useState(Math.floor(Math.random() * 5000) + 8000)
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [interests, setInterests] = useState("")

  const startChat = (type) => {
    if (!termsAccepted) {
      alert("You must accept the terms to continue")
      return
    }
    navigate("/chat", { state: { chatType: type, interests } })
  }

  return (
    <div className="min-h-screen bg-[#f9f9f7]">
      <header className="container mx-auto px-2 py-1 flex justify-between items-center">
        <div className="flex items-center">{/* logo or nav */}</div>
      </header>

      <main className="container mx-auto px-2 pt-1 max-w-3xl">
        <div className="bg-white rounded-lg p-5 shadow-md">

          {/* Notice with corrected styles */}
          <h2
            className="text-base font-bold text-black text-center mb-4 leading-snug tracking-tight"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            You don't need an app to use Omegle on your phone or tablet! The website works great on mobile.
          </h2>

          {/* Image */}
          <div className="mb-6 flex justify-center">
            <img
              src="/people%20video%20calling.webp"
              alt="Video chat example"
              className="rounded-lg shadow-md max-h-52 object-cover"
            />
          </div>

          {/* Description */}
          <div className="mb-5">
            <p className="text-sm leading-snug">
              Omegle (oh-meg-ull) Online is a great way to meet new friends. When you use Omegle Online, we pick someone
              else at random and let you talk one-on-one. To help you stay safe, chats are anonymous unless you tell
              someone who you are (not suggested!), and you can stop a chat at any time. Predators have been known to
              use Omegle Online, so please be careful.
            </p>
          </div>

          {/* Terms */}
          <div className="mb-4">
            <label className="flex items-start text-sm">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={() => setTermsAccepted(!termsAccepted)}
                className="mr-2 mt-1"
              />
              <span>
                By using Omegle Online, you accept the terms at the bottom. You must be 18+ to use this website.
              </span>
            </label>
          </div>

          {/* Blue Notice */}
          <div className="p-3 mb-6 text-center rounded bg-blue-100 shadow-sm text-sm font-medium">
            Video is monitored. Keep it clean ❗
          </div>

          {/* Flex Row: Input + Chat Buttons */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            {/* Left: Interests */}
            <div className="flex-1 w-full">
              <h2 className="text-sm font-semibold mb-1">What do you wanna talk about?</h2>
              <input
                type="text"
                placeholder="Add your interests (optional)"
                value={interests}
                onChange={(e) => setInterests(e.target.value)}
                className="p-2 text-sm rounded border border-gray-300 w-full"
              />
            </div>

            {/* Right: Chat Buttons */}
            <div className="flex-1 w-full text-center">
              <h2 className="text-sm font-semibold mb-2">Start chatting:</h2>
              <div className="flex justify-center gap-3 items-center">
                <button
                  onClick={() => startChat("text")}
                  className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold py-2 px-5 rounded"
                >
                  Text
                </button>
                <span className="text-sm font-medium">or</span>
                <button
                  onClick={() => startChat("video")}
                  className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold py-2 px-5 rounded"
                >
                  Video
                </button>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}

export default HomePage
