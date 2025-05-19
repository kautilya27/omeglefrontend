// src/pages/TermsOfService.js

import React from 'react';

function TermsOfService() {
  return (
    <section style={{
      maxWidth: 800,
      margin: '40px auto',
      padding: '0 20px',
      backgroundColor: '#fff',
      borderRadius: 12,
      boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
    }}>
      <h1 style={{
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 700,
        marginBottom: 24,
        color: '#000'
      }}>
        Terms of Service
      </h1>

      <p style={{ fontSize: 15, color: '#464b5a', marginBottom: 20 }}>
        Welcome to Omegle Online. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions.
      </p>

      <h2 style={{ fontSize: 20, fontWeight: 600, marginTop: 24, marginBottom: 12, color: '#000' }}>
        1. Use of the Platform
      </h2>
      <p style={{ fontSize: 15, color: '#464b5a', marginBottom: 16 }}>
        Our service allows users to engage in video and text chats with strangers around the world. Users must be at least 18 years old or the age of majority in their jurisdiction to use our services.
      </p>

      <h2 style={{ fontSize: 20, fontWeight: 600, marginTop: 24, marginBottom: 12, color: '#000' }}>
        2. User Conduct
      </h2>
      <p style={{ fontSize: 15, color: '#464b5a', marginBottom: 16 }}>
        Users are responsible for their behavior while using the platform. Harassment, inappropriate content, or any illegal activities are strictly prohibited and may result in permanent bans.
      </p>

      <h2 style={{ fontSize: 20, fontWeight: 600, marginTop: 24, marginBottom: 12, color: '#000' }}>
        3. Privacy and Data
      </h2>
      <p style={{ fontSize: 15, color: '#464b5a', marginBottom: 16 }}>
        We respect your privacy. Please refer to our Privacy Policy for detailed information about how we collect, use, and protect your data.
      </p>

      <h2 style={{ fontSize: 20, fontWeight: 600, marginTop: 24, marginBottom: 12, color: '#000' }}>
        4. Termination
      </h2>
      <p style={{ fontSize: 15, color: '#464b5a', marginBottom: 16 }}>
        We reserve the right to suspend or terminate access to the platform at our discretion, without notice, for violations of these Terms of Service or other policies.
      </p>

      <h2 style={{ fontSize: 20, fontWeight: 600, marginTop: 24, marginBottom: 12, color: '#000' }}>
        5. Changes to Terms
      </h2>
      <p style={{ fontSize: 15, color: '#464b5a', marginBottom: 30 }}>
        We may update these Terms of Service from time to time. Continued use of the platform constitutes acceptance of the revised terms.
      </p>

      <p style={{ fontSize: 15, color: '#464b5a', marginBottom: 30, textAlign: 'center' }}>
        If you have any questions about these Terms, please contact us.
      </p>
    </section>
  );
}

export default TermsOfService;
