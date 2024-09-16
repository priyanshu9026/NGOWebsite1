import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
// import './NGOSection.css'; // Add any custom CSS you may need

function NGOSection() {
  return (
    <section style={styles.container}>
      {/* NGO Logo */}
      <div style={styles.logoContainer}>
        <img
          src="https://via.placeholder.com/150x50?text=NGO+Logo"
          alt="NGO Logo"
          style={styles.logo}
        />
      </div>

      {/* Social Media Links */}
      <div style={styles.socialContainer}>
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer" style={styles.icon}>
          <FaFacebook size={24} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer" style={styles.icon}>
          <FaInstagram size={24} />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noreferrer" style={styles.icon}>
          <FaTwitter size={24} />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" style={styles.icon}>
          <FaLinkedin size={24} />
        </a>
      </div>

      {/* Donate Button */}
      <div style={styles.buttonContainer}>
        <button style={styles.donateButton}>Donate</button>
      </div>
    </section>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
  },
  logoContainer: {
    marginBottom: '20px',
  },
  logo: {
    maxWidth: '150px',
    height: 'auto',
  },
  socialContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '45px',
    marginBottom: '20px',
  },
  icon: {
    color: '#333',
    textDecoration: 'none',
  },
  buttonContainer: {
    marginTop: '10px',
  },
  donateButton: {
    padding: '10px 20px',
    backgroundColor: '#e91e63',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default NGOSection;
