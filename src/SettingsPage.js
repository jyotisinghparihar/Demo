import React, { useState } from 'react';

const SettingsPage = () => {
  // State variables for settings
  const [theme, setTheme] = useState('light');
  const [color, setColor] = useState('#ffffff');
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState('English');

  // Function to toggle notifications
  const toggleNotifications = () => {
    setNotifications(!notifications);
  };

  // Function to handle color change
  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  // Function to handle theme change
  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  // Function to handle language change
  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  // Function to handle sharing with friends
  const shareWithFriends = () => {
    const shareUrl = 'https://example.com'; // Replace with your share URL

    // WhatsApp
    const whatsappUrl = `whatsapp://send?text=${encodeURIComponent(shareUrl)}`;

    // Facebook
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;

    // Instagram
    const instagramUrl = 'https://www.instagram.com/';

    // Open the share URLs in new tabs
    window.open(whatsappUrl);
    window.open(facebookUrl);
    window.open(instagramUrl);
  };

  // Function to handle profile editing
  const editProfile = () => {
    // Implement profile editing functionality here
    alert('Profile editing functionality is not implemented yet.');
  };

  return (
    <div style={styles.container}>
      <h1>Settings</h1>
      <div style={styles.settingOption}>
        <h2>Theme</h2>
        <button onClick={() => handleThemeChange(theme === 'light' ? 'dark' : 'light')} style={styles.button}>
          {theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
        </button>
      </div>
      <div style={styles.settingOption}>
        <h2>Color</h2>
        <input type="color" value={color} onChange={handleColorChange} style={styles.colorInput} />
      </div>
      <div style={styles.settingOption}>
        <h2>Notifications</h2>
        <label className="switch" style={styles.switch}>
          <input type="checkbox" checked={notifications} onChange={toggleNotifications} />
          <span className="slider round" style={styles.slider}></span>
        </label>
      </div>
      <div style={styles.settingOption}>
        <h2>Language</h2>
        <select value={language} onChange={(e) => handleLanguageChange(e.target.value)} style={styles.select}>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
          {/* Add more language options as needed */}
        </select>
      </div>
      <div style={styles.settingOption}>
        <button onClick={shareWithFriends} style={styles.button}>Share with Friends</button>
      </div>
      <div style={styles.settingOption}>
        <button onClick={editProfile} style={styles.button}>Edit Profile</button>
      </div>
    </div>
  );
};

export default SettingsPage;

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
  },
  settingOption: {
    marginBottom: '20px',
  },
  select: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  colorInput: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  switch: {
    position: 'relative',
    display: 'inline-block',
    width: '60px',
    height: '34px',
  },
  slider: {
    position: 'absolute',
    cursor: 'pointer',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: '#ccc',
    transition: '.4s',
    borderRadius: '34px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};
