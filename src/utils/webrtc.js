// WebRTC utility functions for handling peer connections

export const initializePeerConnection = async (localStream, onRemoteStream, onIceCandidate) => {
  console.log("Initializing peer connection")

  const configuration = {
    iceServers: [
      { urls: "stun:stun.l.google.com:19302" },
      { urls: "stun:stun1.l.google.com:19302" },
      { urls: "stun:stun2.l.google.com:19302" },
      { urls: "stun:stun3.l.google.com:19302" },
      { urls: "stun:stun4.l.google.com:19302" },
      {
        urls: "turn:numb.viagenie.ca",
        username: "webrtc@live.com",
        credential: "muazkh",
      },
      {
        urls: "turn:openrelay.metered.ca:80",
        username: "openrelayproject",
        credential: "openrelayproject",
      },
      {
        urls: "turn:openrelay.metered.ca:443",
        username: "openrelayproject",
        credential: "openrelayproject",
      },
    ],
    iceCandidatePoolSize: 10,
  }

  const peerConnection = new RTCPeerConnection(configuration)

  // Add local tracks to the peer connection
  if (localStream) {
    console.log("Adding local tracks to peer connection")
    localStream.getTracks().forEach((track) => {
      peerConnection.addTrack(track, localStream)
    })
  } else {
    console.warn("No local stream available to add to peer connection")
  }

  // Set up event handlers
  peerConnection.ontrack = (event) => {
    console.log("Remote track received", event)
    if (event.streams && event.streams[0]) {
      console.log("Setting remote stream")
      onRemoteStream(event.streams[0])
    }
  }

  peerConnection.onicecandidate = (event) => {
    if (event.candidate) {
      console.log("ICE candidate generated", event.candidate.candidate.substring(0, 50) + "...")
      onIceCandidate(event.candidate)
    }
  }

  peerConnection.onicecandidateerror = (event) => {
    console.error("ICE candidate error:", event)
  }

  peerConnection.onconnectionstatechange = (event) => {
    console.log("Connection state change:", peerConnection.connectionState)

    // Handle connection failures
    if (peerConnection.connectionState === "failed" || peerConnection.connectionState === "disconnected") {
      console.log("Connection failed or disconnected, attempting to restart ICE")
      try {
        peerConnection.restartIce()
      } catch (err) {
        console.error("Error restarting ICE:", err)
      }
    }
  }

  peerConnection.oniceconnectionstatechange = (event) => {
    console.log("ICE connection state change:", peerConnection.iceConnectionState)

    // Handle ICE connection failures
    if (peerConnection.iceConnectionState === "failed" || peerConnection.iceConnectionState === "disconnected") {
      console.log("ICE connection failed or disconnected, attempting to restart ICE")
      try {
        peerConnection.restartIce()
      } catch (err) {
        console.error("Error restarting ICE:", err)
      }
    }
  }

  return peerConnection
}

// Update the createOffer function to handle errors better
export const createOffer = async (peerConnection) => {
  if (!peerConnection) {
    throw new Error("Peer connection is null or undefined")
  }

  try {
    console.log("Creating offer")
    const offer = await peerConnection.createOffer({
      offerToReceiveAudio: true,
      offerToReceiveVideo: true,
      iceRestart: true,
    })

    console.log("Setting local description")
    await peerConnection.setLocalDescription(offer)
    return offer
  } catch (error) {
    console.error("Error creating offer:", error)
    throw error
  }
}

// Update the handleAnswer function to handle errors better
export const handleAnswer = async (peerConnection, answer) => {
  if (!peerConnection) {
    console.error("Cannot handle answer: peer connection is null")
    return
  }

  try {
    console.log("Setting remote description from answer")
    await peerConnection.setRemoteDescription(new RTCSessionDescription(answer))
    console.log("Remote description set successfully")
  } catch (error) {
    console.error("Error setting remote description:", error)
  }
}

// Update the handleIceCandidate function to handle errors better
export const handleIceCandidate = async (peerConnection, candidate) => {
  if (!peerConnection || !candidate) {
    console.error("Cannot add ICE candidate: peer connection or candidate is null")
    return
  }

  try {
    console.log(
      "Adding ICE candidate",
      candidate.candidate ? candidate.candidate.substring(0, 50) + "..." : "null candidate",
    )
    await peerConnection.addIceCandidate(new RTCIceCandidate(candidate))
    console.log("ICE candidate added successfully")
  } catch (error) {
    console.error("Error adding ICE candidate:", error)
  }
}
