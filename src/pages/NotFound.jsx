import React from 'react';
import styles from './css/NotFound.module.css';
import { Link } from 'react-router-dom'

import NotFoundHeroImage from '../assets/Not-Found.png'; 

export default function NotFound() {
  return (
    <div className={styles.container}>
      {/* Header with Logo */}
      <header className={styles.header}>
        {/* Replace the SVG below with your actual logo image or component */}
        <div className={styles.logo}>
        <Link to="/">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M33.0527 0C36.8895 0.000111173 40 3.11048 40 6.94727V33.0527C40 33.3985 39.9736 33.7381 39.9248 34.0703L30.2822 24.6377C28.9109 23.2966 26.6992 23.3079 25.3428 24.6641L23.6768 26.3311C22.3206 27.6874 22.3324 29.8743 23.7031 31.2158L32.6826 40H6.94727C6.82938 40 6.71215 39.997 6.5957 39.9912L31.8369 15.2998C33.208 13.9583 33.2197 11.7715 31.8633 10.415L30.1973 8.74902C28.8407 7.39288 26.6291 7.38029 25.2578 8.72168L0.00878906 33.4199C0.00245501 33.2983 3.52731e-06 33.1759 0 33.0527V7.27637L9.67285 16.7393C11.0442 18.0806 13.2558 18.0682 14.6123 16.7119L16.2783 15.0459C17.6348 13.6894 17.6233 11.5017 16.252 10.1602L5.94043 0.0732422C6.26918 0.0255114 6.60529 0 6.94727 0H33.0527Z" fill="#FF0000"/>
          </svg>
        </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className={styles.contentWrapper}>
        <div className={styles.imageContainer}>
          {/* Replace src with the path to your person/visor image asset */}
          <img 
            src={NotFoundHeroImage} 
            alt="Futuristic character profile" 
            className={styles.personImage} 
          />
        </div>

        <div className={styles.textContainer}>
          <p className={styles.subtitle}>You know what it means</p>
          <h1 className={styles.title}>4{'{}'}4</h1>
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