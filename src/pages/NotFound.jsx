import React from 'react';
import styles from './css/NotFound.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      {/* Header with Logo */}
      <header className={styles.header}>
        {/* Replace the SVG below with your actual logo image or component */}
        <div className={styles.logo}>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 12L12 22L22 12L12 2Z" fill="#ff0000" />
            <path d="M7 7L17 17M17 7L7 17" stroke="#ffffff" strokeWidth="2" />
          </svg>
        </div>
      </header>

      {/* Main Content Area */}
      <main className={styles.contentWrapper}>
        <div className={styles.imageContainer}>
          {/* Replace src with the path to your person/visor image asset */}
          <img 
            src="/path-to-your-person-image.png" 
            alt="Futuristic character profile" 
            className={styles.personImage} 
          />
        </div>

        <div className={styles.textContainer}>
          <p className={styles.subtitle}>You know what it means</p>
          <h1 className={styles.title}>4{'{0}'}4</h1>
          <p className={styles.actionText}>Time to go back</p>
          <button 
            className={styles.homeButton}
            onClick={() => window.location.href = '/'}
          >
            Home
          </button>
        </div>
      </main>

      {/* Footer Text */}
      <div className={styles.footer}>
        Page not found
      </div>
    </div>
  );
}