import React from "react";

function CommunityGuidelines() {
  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "900px",
        margin: "0 auto",
        background: "#fffdfa",
        borderRadius: "12px",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
        color: "#3d2c1e",
        fontFamily: "Segoe UI, Arial, sans-serif",
        fontSize: "1.08rem",
        lineHeight: 1.7,
      }}
    >
      <h1 style={{ color: "#92634d", fontSize: "2.2rem", marginBottom: "0.5em" ,fontWeight: 700, marginTop: "0.5em" ,marginLeft: "30%"}}>
        Community Guidelines
      </h1>
      <p style={{ color: "#b08d57", fontSize: "1rem", marginBottom: "1.5em" }}>
        Last Updated: May 3, 2025
      </p>

      <p>
        omegleonline.com is a platform designed for spontaneous and respectful interactions. These guidelines exist to protect users and promote a safe environment.
      </p>

      <h2 style={{ color: "#92634d", marginTop: "1.5em" }}>1. Respect Others</h2>
      <ul style={{ marginLeft: "1.5em", marginBottom: "1em" }}>
        <li>No hate speech, racism, or discriminatory remarks.</li>
        <li>No harassment, threats, or bullying of any kind.</li>
        <li>Use appropriate language during conversations.</li>
      </ul>

      <h2 style={{ color: "#92634d", marginTop: "1.5em" }}>2. No Nudity or Sexual Content</h2>
      <ul style={{ marginLeft: "1.5em", marginBottom: "1em" }}>
        <li>Sexually explicit behavior is strictly prohibited.</li>
        <li>Inappropriate gestures or exposure will result in a ban.</li>
        <li>We use moderation tools and user reports to monitor misuse.</li>
      </ul>

      <h2 style={{ color: "#92634d", marginTop: "1.5em" }}>3. No Illegal Behavior</h2>
      <ul style={{ marginLeft: "1.5em", marginBottom: "1em" }}>
        <li>Do not promote or engage in illegal activities.</li>
        <li>Impersonation of others is not allowed.</li>
        <li>Users violating laws may be reported to legal authorities.</li>
      </ul>

      <h2 style={{ color: "#92634d", marginTop: "1.5em" }}>4. Age Requirements</h2>
      <p>
        Users must be at least 18 years old to use this platform. We do not knowingly allow minors on the site.
      </p>

      <h2 style={{ color: "#92634d", marginTop: "1.5em" }}>5. Reporting Violations</h2>
      <p>
        If you encounter a user violating our guidelines, please use the "Report" button or contact{" "}
        <a
          href="mailto:knewspaper.in@gmail.com"
          style={{ color: "#92634d", textDecoration: "underline" }}
        >
          abuse@omegleonline.com
        </a>
        .
      </p>

      <h2 style={{ color: "#92634d", marginTop: "1.5em" }}>6. Consequences</h2>
      <ul style={{ marginLeft: "1.5em", marginBottom: "1em" }}>
        <li>Immediate ban or suspension for violating guidelines.</li>
        <li>Repeat offenses may lead to permanent IP block.</li>
      </ul>

      <h2 style={{ color: "#92634d", marginTop: "1.5em" }}>7. Keep It Fun & Safe</h2>
      <p>
        Our goal is to create an enjoyable environment for spontaneous conversations. Please follow the rules and help us maintain a healthy space.
      </p>
    </div>
  );
}

export default CommunityGuidelines;
