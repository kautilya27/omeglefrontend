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
      <header className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center">
          {/* Add logo or navigation here if needed */}
        </div>
      </header>

      <main className="container mx-auto p-4 max-w-3xl">
        <div className="bg-white rounded-lg p-8 shadow-md">

          {/* Heading */}
          <h2 className="text-xs font-semibold text-center mb-6 whitespace-nowrap overflow-hidden text-ellipsis mx-auto">
            You don't need an app to use Omegle Online on your phone or tablet! The website works great on mobile.
          </h2>

          {/* Image */}
          <div className="mb-8 flex justify-center">
            <img
              src="/people%20video%20calling.webp"
              alt="Video chat example"
              className="rounded-lg shadow-md max-h-52 object-cover"
            />
          </div>

          {/* Description */}
          <div className="mb-8">
            <p className="mb-4">
              Omegle (oh-meg-ull) Online is a great way to meet new friends. When you use Omegle Online, we pick someone
              else at random and let you talk one-on-one. To help you stay safe, chats are anonymous unless you tell
              someone who you are (not suggested!), and you can stop a chat at any time. Predators have been known to
              use Omegle Online, so please be careful.
            </p>
          </div>

          {/* Terms */}
          <div className="mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={() => setTermsAccepted(!termsAccepted)}
                className="mr-2"
              />
              <span>
                By using Omegle Online, you accept the terms at the bottom. You must be 18+ to use this website.
              </span>
            </label>
          </div>

          {/* Blue Notice */}
          <div className="p-4 mb-8 text-center rounded bg-blue-100 shadow-sm">
            <p className="font-bold">Video is monitored. Keep it clean ❗</p>
          </div>

          {/* Dual Alignment Heading */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">What do you wanna talk about?</h2>
            <h2 className="text-xl font-bold">Start chatting:</h2>
          </div>

          {/* Input and Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <input
              type="text"
              placeholder="Add your interests (optional)"
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
              className="p-3 rounded border border-gray-300 w-full sm:w-96"
            />
          </div>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => startChat("text")}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded"
            >
              Text
            </button>
            <span className="self-center">or</span>
            <button
              onClick={() => startChat("video")}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded"
            >
              Video
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default HomePage
