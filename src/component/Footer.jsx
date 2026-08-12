import React from 'react';
import styles from '../component/css/Footer.module.css';
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

// 1. IMPORT THE IMAGE HERE
import footerBrand from '../assets/footer-brand.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerCol}>
          <h3 className={styles.footerHeading}>The Next Generation of Document Signature</h3>
          <p className={styles.footerEmail}>gateway@nexgn.cloud</p>

          <div className={styles.socialRow}>
            <a href="https://www.linkedin.com/company/nexgncloud" target='_blank' rel="noreferrer" className={styles.socialIcon}><FaLinkedin  size={28}/></a>
            <a href="#!" className={styles.socialIcon}><FaInstagram size={28} /></a>
          </div>

          <div className={styles.legalText}>
            <p>© 2026 Nexgn, Inc. All rights reserved.</p>
            <p>Global Backing: New Mexico, USA</p>
            <p>Engineering HQ: Bharat (India)</p>
            <p>Globally Compliant (ESIGN, UETA, eIDAS, IT Act)</p>
            <p>Data Sovereignty across North America & APAC</p>
          </div>
        </div>

        <div className={styles.footerCol}>
          <p className={styles.proudlyText}>Proudly</p>
          <p className={styles.madeInBharat}>
            <span className={styles.orangeText}>Made</span>{" "}
            <span className={styles.blueText}>in</span>{" "}
            <span className={styles.greenText}>Bharat</span>
          </p>
        </div>
        
        <div className={styles.linkCol}>
          <h4>COMPANY</h4>
          <a href="#!">About Us</a>
          <a href="/contact">Contact Us</a>
          <a href="#!">Blog</a>
        </div>

        <div className={styles.linkCol}>
          <h4>RESOURCES</h4>
          <a href="/help">Help center</a>
          <a href="https://status.nexgn.cloud">System Status</a>
          <a href="#!">Security</a>
        </div>
        

        <div className={styles.linkCol}>
          <h4>LEGAL & TRUST</h4>
          <a href="/trust">Trust & Compliance</a>
          <Link to="/privacy">Privacy Policy</Link>
          <a href="/terms">Terms & Services</a>
        </div>
      </div>

      <div className={styles.footerBrand}>
        <img src={footerBrand} alt="Nexgn Logo" width="100%" height="100%" />
      </div>
    </footer>
  );
};

export default Footer;