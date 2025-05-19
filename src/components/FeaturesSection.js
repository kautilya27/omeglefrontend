import React from "react";

function FeaturesSection() {
  return (
    <section style={{
      display: "flex",
      justifyContent: "center",
      gap: "24px",
      padding: "40px 20px",
      backgroundColor: "#faf7f4" // light background like your screenshot
    }}>
      {[
        {
          title: "Secured Environment",
          description: "Your safety is paramount. At Omegle Online, we provide a secure platform with advanced screening processes. Chat with peace of mind, knowing we've taken measures to ensure a smooth and worry-free experience."
        },
        {
          title: "Fast Connections",
          description: "Dive straight into exciting conversations! Our ultra-efficient matching system minimizes wait times and maximizes your chat experience. Discover why our speed and ease of use set us apart as the leading Omegle alternative."
        },
        {
          title: "Global Reach",
          description: "Connect with a diverse international community. Expand your horizons as you interact with users from around the world, enriching your social experience on Omegle Online. Enjoy engaging in online chat random and stranger video call online."
        }
      ].map((feature, index) => (
        <div key={index} style={{
          flex: "1",
          backgroundColor: "#fff",
          borderRadius: 16,
          padding: "24px 20px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
          textAlign: "center",
          maxWidth: 320,
        }}>
          <h2 style={{
            fontSize: 20,
            fontWeight: "bold",
            margin: "0 0 12px 0",
            color: "#222",
          }}>{feature.title}</h2>
          <p style={{
            fontSize: 15,
            lineHeight: "1.6",
            color: "#555",
            margin: 0,
          }}>{feature.description}</p>
        </div>
      ))}
    </section>
  );
}

export default FeaturesSection;
