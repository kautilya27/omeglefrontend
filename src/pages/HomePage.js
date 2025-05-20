"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"

const HomePage = () => {
  const navigate = useNavigate()
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
    <div className="min-h-screen bg-[#f9f9f7] flex items-center justify-center px-4">
      <main className="bg-white rounded-lg p-6 shadow-md w-full max-w-4xl">
        
        {/* Heading */}
        <h2 className="text-sm font-semibold text-center mb-4 whitespace-nowrap overflow-hidden text-ellipsis">
          You don't need an app to use Omegle Online on your phone or tablet! The website works great on mobile.
        </h2>

        {/* Image */}
        <div className="flex justify-center mb-4">
          <img
            src="/people%20video%20calling.webp"
            alt="Video chat example"
            className="rounded-lg shadow-md h-36 object-cover"
          />
        </div>

        {/* Description */}
        <p className="text-sm text-gray-700 mb-4 text-center sm:text-left">
          Omegle (oh-meg-ull) Online is a great way to meet new friends. When you use Omegle Online, we pick someone
          else at random and let you talk one-on-one. To help you stay safe, chats are anonymous unless you tell
          someone who you are (not suggested!), and you can stop a chat at any time.
        </p>

        {/* Terms */}
        <label className="flex items-center text-sm mb-4">
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={() => setTermsAccepted(!termsAccepted)}
            className="mr-2"
          />
          I accept the terms. You must be 18+ to use this website.
        </label>

        {/* Notice */}
        <div className="p-2 mb-4 text-center rounded bg-blue-100 text-sm font-semibold shadow-sm">
          Video is monitored. Keep it clean ❗
        </div>

        {/* Flex Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Interests */}
          <div className="flex-1 w-full">
            <h3 className="text-sm font-bold mb-2 text-center sm:text-left">What do you wanna talk about?</h3>
            <input
              type="text"
              placeholder="Add your interests (optional)"
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
              className="p-2 rounded border border-gray-300 w-full text-sm"
            />
          </div>

          {/* Buttons */}
          <div className="flex-1 w-full text-center">
            <h3 className="text-sm font-bold mb-3">Start chatting:</h3>
            <div className="flex justify-center items-center gap-3">
              <button
                onClick={() => startChat("text")}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-5 rounded text-sm"
              >
                Text
              </button>
              <span className="text-sm">or</span>
              <button
                onClick={() => startChat("video")}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-5 rounded text-sm"
              >
                Video
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default HomePage
