import React, { useState, useEffect } from 'react';

const AnnouncementBanner = ({ message }) => {
  const [closed, setClosed] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleClose = () => {
    setClosed(true);
  };

  useEffect(() => {
    let animationFrameId;
    const containerWidth = document.getElementById('container').offsetWidth;
    const messageWidth = document.getElementById('message').offsetWidth;

    const scroll = () => {
      setScrollPosition(prevPosition => {
        if (prevPosition < -messageWidth) {
          // Reset to starting position if scrolled past the message width
          return containerWidth;
        } else {
          return prevPosition - 1;
        }
      });
    };

    const animate = () => {
      scroll();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (closed) {
    return null; // Don't render the banner if closed
  }

  return (
    <div style={styles.container} id="container">
      <p style={{ ...styles.message, left: `${scrollPosition}px` }} id="message">{message}</p>
      <button style={styles.closeButton} onClick={handleClose}>Close</button>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#2596be',
    color: '#fff',
    textAlign: 'center',
    padding: '20px',
    marginBottom: '20px',
    overflow: 'hidden',
    position: 'relative',
  },
  message: {
    margin: 0,
    fontSize: '16px',
    whiteSpace: 'nowrap',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)', // Center vertically
    animation: 'none', // Remove animation property
  },
  closeButton: {
    position: 'absolute',
    top: '5px',
    right: '10px',
    backgroundColor: 'transparent',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
};

export default AnnouncementBanner;
