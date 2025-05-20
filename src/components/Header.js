import React, { useState, useEffect } from "react";

function Header() {
  const [onlineCount, setOnlineCount] = useState(getInitialCount());

  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineCount((prev) => {
        const change = getRandomChange();
        let next = prev + change;

        // Clamp the value between 6000 and 12000
        if (next < 6000) next = 6000;
        if (next > 12000) next = 12000;

        return next;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Initial random count
  function getInitialCount() {
    return Math.floor(Math.random() * (12000 - 8000)) + 8000;
  }

  // Small fluctuation between -50 and +50
  function getRandomChange() {
    return Math.floor(Math.random() * 101) - 50; // from -50 to +50
  }

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#fff",
        padding: "10px 0",
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
        borderBottom: "1px solid #f0f0f0",
        flexWrap: "wrap",
        position: "relative",
        zIndex: 10,
      }}
    >
      {/* Logo and Online Text */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginLeft: 20,
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <img
            src="https://ext.same-assets.com/2180202029/3907936530.png"
            alt="Omegle Online Logo"
            style={{ height: 42 }}
          />
          <span
            style={{
              fontWeight: 600,
              fontSize: 10,
              color: "#d2874f",
              letterSpacing: 1,
              position: "relative",
              top: 13,
            }}
          >
            Online
          </span>
        </div>

        {/* Talk to strangers! */}
        <span
          style={{
            fontSize: 20,
            color: "#464b5a",
            fontWeight: 700,
            transform: "rotate(-5deg)",
            display: "inline-block",
            lineHeight: 1.2,
            whiteSpace: "nowrap",
            marginLeft: 30,
            marginTop: 6,
          }}
        >
          Talk to strangers!
        </span>
      </div>

      {/* Online Now */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          marginRight: 20,
        }}
      >
        <span
          style={{
            fontWeight: 700,
            fontSize: 26,
            color: "#68a8f5",
            marginRight: 5,
          }}
        >
          {onlineCount.toLocaleString()}+
        </span>
        <span
          style={{
            color: "#a5cdfd",
            fontWeight: 500,
            fontSize: 16,
            marginBottom: 2,
          }}
        >
          online now
        </span>
      </div>
    </header>
  );
}

export default Header;
