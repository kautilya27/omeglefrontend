import React from "react";

const PrivacyPolicy = () => {
  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "900px",
        margin: "0 auto",
        marginTop: "2em",
        background: "#fffdfa",
        borderRadius: "12px",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
        color: "#3d2c1e",
        fontFamily: "Segoe UI, Arial, sans-serif",
        fontSize: "1.08rem",
        lineHeight: 1.7,
      }}
    >
      <h1 style={{ color: "#343434", fontSize: "1.8rem", marginBottom: "0.5em" , marginTop: "0.5em" ,marginLeft: "30%",fontWeight: 700}}>
        Privacy Policy
      </h1>
      <p style={{ color: "#b08d57", fontSize: "1rem", marginBottom: "1.5em" }}>
        Last updated: May 13, 2025
      </p>

      <p>
        This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our
        Omegle-style web application. By using our service, you agree to the terms of this policy.
      </p>

      <h2 style={{ color: "#92634d", marginTop: "1.5em" }}>1. Information We Collect</h2>
      <ul style={{ marginLeft: "1.5em", marginBottom: "1em" }}>
        <li>
          <strong>IP Address:</strong> We may log your IP address for security, moderation, and analytics purposes.
        </li>
        <li>
          <strong>Session Data:</strong> We store session start and end times for each chat session.
        </li>
        <li>
          <strong>Chat Metadata:</strong> We do not store chat messages, but may log reports related to user behavior.
        </li>
      </ul>

      <h2 style={{ color: "#92634d", marginTop: "1.5em" }}>2. Use of Your Information</h2>
      <p>We use collected data to:</p>
      <ul style={{ marginLeft: "1.5em", marginBottom: "1em" }}>
        <li>Ensure safety and moderation.</li>
        <li>Prevent abuse and spam.</li>
        <li>Improve the user experience and analyze usage trends.</li>
      </ul>

      <h2 style={{ color: "#92634d", marginTop: "1.5em" }}>3. Sharing Your Information</h2>
      <p>We do not sell or share your personal information with third parties, except:</p>
      <ul style={{ marginLeft: "1.5em", marginBottom: "1em" }}>
        <li>To comply with legal obligations.</li>
        <li>To investigate or prevent fraudulent or harmful activity.</li>
      </ul>

      <h2 style={{ color: "#92634d", marginTop: "1.5em" }}>4. Cookies and Tracking</h2>
      <p>We may use cookies or local storage to manage session data or preferences.</p>

      <h2 style={{ color: "#92634d", marginTop: "1.5em" }}>5. User Reports</h2>
      <p>
        If a user is reported for inappropriate behavior, we may log the reporter and reported IDs, IPs, and reasons.
      </p>

      <h2 style={{ color: "#92634d", marginTop: "1.5em" }}>6. Data Security</h2>
      <p>We take reasonable measures to protect your data but cannot guarantee complete security.</p>

      <h2 style={{ color: "#92634d", marginTop: "1.5em" }}>7. Children's Privacy</h2>
      <p>
        This service is not intended for users under the age of 13. If you are a parent or guardian and believe your
        child has used our service, please contact us.
      </p>

      <h2 style={{ color: "#92634d", marginTop: "1.5em" }}>8. Changes to This Policy</h2>
      <p>We may update this policy from time to time. We encourage you to review this page regularly.</p>

      <h2 style={{ color: "#92634d", marginTop: "1.5em" }}>9. Contact Us</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy, you can contact us at:{" "}
        <strong style={{ color: "#92634d" }}>support@yourdomain.com</strong>
      </p>
    </div>
  );
};

export default PrivacyPolicy;