import React from "react";
import  {Link}  from "react-router-dom";

function Footer() {
  return (
    <footer style={{
      width: '100%',
      background: '#f3f0ec',
      color: '#888',
      textAlign: 'center',
      fontSize: 15,
      padding: '18px 0 16px 0',
      marginTop: 28,
      borderTop: '1px solid #e8e1da',
    }}>
      © 2025 omegleonline.com &nbsp;
      <Link to="/terms-of-service" style={{ color: '#92634d', margin: '0 4px' }}>Terms of Service</Link>·
      <Link to="/privacy-policy" style={{ color: '#92634d', margin: '0 4px' }}>Privacy Policy</Link>·
      <Link to="/community-guidelines" style={{ color: '#92634d', margin: '0 4px' }}>Community Guidelines</Link>
    </footer>
  );
}

export default Footer;
