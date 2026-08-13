import React from 'react';
import styles from './css/ComingSoon.module.css';

// TODO: Replace these with your actual asset imports
import heroImage from '../assets/coming-soon-hero.png';

const ComingSoon = () => {
  // Using the current date as a placeholder based on your design
  const currentDate = "August 13, 2026";

  return (
    <div className={styles.pageContainer}>
      
      {/* Top Logo */}
        <header className={styles.header}>
            <svg width="145" height="36" viewBox="0 0 145 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M38.6523 0C42.489 0.000225655 45.5996 3.11055 45.5996 6.94727V38.6523C45.5996 38.7397 45.595 38.8265 45.5918 38.9131L34.1758 27.7461C32.8045 26.4047 30.5929 26.4164 29.2363 27.7725L26.6494 30.3604C25.2931 31.7169 25.3054 33.9037 26.6768 35.2451L37.2617 45.5996H7.50293L36.6445 17.0938C38.0155 15.7522 38.0272 13.5644 36.6709 12.208L34.084 9.62109C32.7276 8.2648 30.5159 8.25267 29.1445 9.59375L0 38.1035V8.29199L11.3721 19.416C12.7434 20.7574 14.955 20.7461 16.3115 19.3896L18.8984 16.8018C20.2543 15.4452 20.2422 13.2583 18.8711 11.917L6.69531 0.00585938C6.77894 0.00287788 6.86291 0 6.94727 0H38.6523Z" fill="#E22A2A"/>
            </svg>
        </header>

      {/* Info Section (Tagline, Button, Date) */}
      <section className={styles.infoSection}>
        
        <div className={styles.taglineBox}>
          <h2 className={styles.tagline}>
            Replace manual paperwork with borderless, lightning-fast workflows.
          </h2>
        </div>

        <div className={styles.actionBox}>
          <button className={styles.notifyBtn}>
            Get notified
          </button>
          <span className={styles.dateText}>{currentDate}</span>
        </div>

      </section>

      {/* Main Visual Centerpiece */}
      <main className={styles.mainVisual}>
        
        {/* Background Huge Text */}
        <div className={styles.hugeTextContainer}>
          <h1 className={styles.hugeText}>
            COMING<br className={styles.mobileBreak} /> SOON
          </h1>
        </div>

        {/* Foreground Hero Image */}
        <div className={styles.heroWrapper}>
          <img 
            src={heroImage} 
            alt="Nexgn Coming Soon" 
            className={styles.heroImage} 
          />
          
          {/* Footer Text - Positioned over the chest on desktop, below on mobile */}
          <div className={styles.footerText}>
            <p>Designed with Trust</p>
            <p>Engineered for the World.</p>
          </div>
        </div>

      </main>

    </div>
  );
};

export default ComingSoon;  