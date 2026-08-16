import React from 'react';
import styles from './css/Footer.module.css';
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

// IMPORT YOUR ASSETS HERE
import footerBrand from '../assets/footer-brand.png';
import ctaBgImage from '../assets/cta-bg.png'; // Rope background image for CTA

const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      
      {/* ================= 1. INTEGRATED CTA CARD ================= */}
    <div className={styles.ctaContainer}>
  <div className={styles.ctaCard}>
    <img
      src={ctaBgImage}
      alt=""
      className={styles.ctaBgImage}
    />
    <div className={styles.ctaOverlay}></div>

    <div className={styles.ctaContent}>
      <h2 className={styles.ctaHeading}>
        Start signing documents the simpler way
      </h2>
      <p className={styles.ctaSubheading}>
        Join modern businesses sending and signing documents securely with Nexgn.
      </p>
      <div className={styles.ctaButtonWrapper}>
        <Link to="/register" className={styles.ctaButton}>
          Create your free account
        </Link>
      </div>
    </div>
  </div>
</div>

      {/* ================= 2. FOOTER CONTENT GRID ================= */}
      <div className={styles.footerInner}>
        <div className={styles.footerGrid}>
          
          {/* Row 1/Col 1: Main Brand Headline & Email */}
          <div className={styles.brandTitleCol}>
            <h3 className={styles.footerHeading}>
              The Next Generation of Document Signature
            </h3>
            <p className={styles.footerEmail}>gateway@nexgn.cloud</p>

            <div className={styles.socialRow}>
              <a 
                href="https://www.linkedin.com/company/nexgncloud" 
                target="_blank" 
                rel="noreferrer" 
                className={styles.socialIcon} 
                aria-label="LinkedIn"
              >
                <FaLinkedin size={22} />
              </a>
              <a 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className={styles.socialIcon} 
                aria-label="Instagram"
              >
                <FaInstagram size={22} />
              </a>
            </div>

            {/* Desktop Legal Text */}
            <div className={`${styles.legalBox} ${styles.desktopOnly}`}>
              <p>© 2026 Nexgn, Inc. All rights reserved.</p>
              <p>Global Backing: New Mexico, USA</p>
              <p>Engineering HQ: Bharat (India)</p>
              <p>Globally Compliant (ESIGN, UETA, eIDAS, IT Act)</p>
              <p>Data Sovereignty across North America & APAC</p>
            </div>
          </div>

          {/* Row 1/Col 2: Proudly Made in Bharat */}
          <div className={styles.proudlyCol}>
            <p className={styles.proudlyText}>Proudly</p>
            <p className={styles.madeInBharat}>
              <span className={styles.orangeText}>Made</span>{" "}
              <span className={styles.blueText}>in</span>{" "}
              <span className={styles.greenText}>Bharat</span>
            </p>
          </div>

          {/* Mobile Legal Text (Placed between header and link columns on mobile) */}
          <div className={`${styles.legalBox} ${styles.mobileOnly}`}>
            <p>© 2026 Nexgn, Inc. All rights reserved.</p>
            <p>Global Backing: New Mexico, USA</p>
            <p>Engineering HQ: Bharat (India)</p>
            <p>Globally Compliant (ESIGN, UETA, eIDAS, IT Act)</p>
            <p>Data Sovereignty across North America & APAC</p>
          </div>

          {/* Links 1: Company */}
          <div className={styles.linkColCompany}>
            <h4>COMPANY</h4>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/blog">Blog</Link>
          </div>

          {/* Links 2: Resources */}
          <div className={styles.linkColResources}>
            <h4>RESOURCES</h4>
            <Link to="/help" onClick={() => window.scrollTo(0, 0)}>Help center</Link>
            <a href="https://status.nexgn.cloud" target="_blank" rel="noreferrer">
              System Status
            </a>
            <Link to="/security" onClick={() => window.scrollTo(0, 0)}>Security</Link>
          </div>

          {/* Links 3: Legal & Trust */}
          <div className={styles.linkColLegal}>
            <h4>LEGAL & TRUST</h4>
              <Link to="/trust" onClick={() => window.scrollTo(0, 0)}>
                Trust & Compliance
              </Link>
              <Link to="/privacy" onClick={() => window.scrollTo(0, 0)}>
                Privacy Policy
              </Link>
              <Link to="/terms" onClick={() => window.scrollTo(0, 0)}>
                Terms & Services
              </Link>
          </div>

        </div>

        {/* ================= 3. FULL NEXGN BRAND LOGO (FULL DISPLAY) ================= */}
        <div className={styles.footerBrand}>
          <img 
            src={footerBrand} 
            alt="NEXGN" 
            className={styles.brandImage}
          />
        </div>
      </div>

    </footer>
  );
};

export default Footer;