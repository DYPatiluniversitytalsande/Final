import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  return (

    
    <footer style={{ backgroundColor: "#181717", color: '#fff', padding: '40px 20px', fontFamily: 'Georgia, serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>

      
        {/* Logo & About */}
        <div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ fontSize: '30px', marginRight: '10px' }}>🧗‍♂️</div>
            <h2 style={{ color: '#fff' }}>ADVENTURE AURA</h2>
          </div>
          <p style={{ maxWidth: '250px', color: '#ccc' }}>
            Your trusted partner for extraordinary travel experiences since 2015.
          </p>
        </div>

        <div>
          <h3 style={{ marginBottom: '15px', color: '#fff' }}>Quick Links</h3>
          <ul style={{ listStyle: 'none', padding: 0, color: '#ccc' }}>
            <li>Home</li>
            <li>About</li>
            <li>Packages</li>
            <li>Contact</li>
          </ul>
        </div>

       
        <div>
          <h3 style={{ marginBottom: '15px', color: '#fff' }}>Contact</h3>
          <p style={{ color: '#ccc' }}>
            455 West Orchard Street Kings<br />
            Mountain, NC 280867
          </p>
          <p style={{ color: '#ccc' }}>
            <FaPhoneAlt /> +088 (246) 642-27-10
          </p>
          <p style={{ color: '#ccc' }}>
            <FaEnvelope /> example@gmail.com
          </p>
        </div>

        <div>
          <h3 style={{ marginBottom: '15px', color: '#fff' }}>Follow Us</h3>
          <ul style={{ listStyle: 'none', padding: 0, color: '#ccc' }}>
            <li><a href="https://www.instagram.com">Instagram</a></li>
            <li><a href="https://www.twitter.com">Twitter</a></li>
            <li><a href="https://www.linkedin.com">LinkedIn</a></li>
            <li><a href="https://www.facebook.com">Facebook</a></li>
          </ul>
        </div>
      </div>

      <hr style={{ margin: '30px 0', borderColor: '#2b3d44' }} />

      
      <div style={{ textAlign: 'center', color: '#aaa', position: 'relative' }}>
        <p>Copyright © 2025 Travel Agency</p>
        <button style={{
          position: 'absolute', right: 20, bottom: 0,
          background: 'orange', border: 'none', padding: '10px',
          borderRadius: '4px', cursor: 'pointer'
        }}>
         <button
     onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
     style={{
    position: 'absolute',
    right: 0,
    bottom: 0,
    background: 'orange',
    border: 'none',
    padding: '10px',
    borderRadius: '4px',
    cursor: 'pointer'
  }}
>
  <FaArrowUp style={{ color: '#fff' }} />
  
  </button>
        </button>
      </div>
      
    </footer>
  );
};

export default Footer;
