
import React, { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import styles from './css/Footer.module.css';
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import footerBrand from '../assets/footer-brand.png';
import ctaBgImage from '../assets/cta-bg.png';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
useGSAP(() => {

  const footer = footerRef.current;

  if (!footer) return;

  const ctaBox = footer.querySelector(
    `.${styles.ctaCard}`
  );

  const ctaHeading = footer.querySelector(
    `.${styles.ctaHeading}`
  );

  const ctaSubheading = footer.querySelector(
    `.${styles.ctaSubheading}`
  );

  const ctaButton = footer.querySelector(
    `.${styles.ctaButtonWrapper}`
  );

  const brandContent = footer.querySelector(
    `.${styles.brandTitleCol}`
  );

  const proudly = footer.querySelector(
    `.${styles.proudlyCol}`
  );

  const company = footer.querySelector(
    `.${styles.linkColCompany}`
  );

  const resources = footer.querySelector(
    `.${styles.linkColResources}`
  );

  const legal = footer.querySelector(
    `.${styles.linkColLegal}`
  );

  const bigLogo = footer.querySelector(
    `.${styles.footerBrand}`
  );



  const companyItems =
    company?.querySelectorAll("h4, a") || [];

  const resourceItems =
    resources?.querySelectorAll("h4, a") || [];

  const legalItems =
    legal?.querySelectorAll("h4, a") || [];


  const tl = gsap.timeline({
    scrollTrigger: {
  trigger: footer,
  start: "top 0%",
  end: "bottom 80%",
  scrub: 2,
  invalidateOnRefresh: true,
  markers: true,
}
  });


  tl.from(
    ctaBox,
    {
      opacity: 0,
      y: 60,
      scale: 0.98,
      duration: 2,
      ease: "power3.out",
    }
  );


  tl.from(
    ctaHeading,
    {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out",
    },
    "+=0.08"
  );


  tl.from(
    ctaSubheading,
    {
      opacity: 0,
      y: 30,
      duration: 2,
      ease: "power3.out",
    },
    "+=0.08"
  );




  tl.from(
    ctaButton,
    {
      opacity: 0,
      y: 25,
      scale: 0.96,
      duration: 0.5,
      ease: "power3.out",
    },
    "+=0.08"
  );

  tl.from(
    brandContent,
    {
      opacity: 0,
      y: 35,
      duration: 0.65,
      ease: "power3.out",
    },
    "+=0.15"
  );


  tl.from(
    proudly,
    {
      opacity: 0,
      y: 30,
      duration: 0.55,
      ease: "power3.out",
    },
    "+=0.08"
  );


  tl.from(
    companyItems,
    {
      opacity: 0,
      y: 24,
      duration: 0.4,
      stagger: 0.12,
      ease: "power3.out",
    },
    "+=0.08"
  );


  tl.from(
    resourceItems,
    {
      opacity: 0,
      y: 24,
      duration: 0.4,
      stagger: 0.12,
      ease: "power3.out",
    },
    "+=0.08"
  );

  tl.from(
    legalItems,
    {
      opacity: 0,
      y: 24,
      duration: 0.4,
      stagger: 0.12,
      ease: "power3.out",
    },
    "+=0.08"
  );


  tl.from(
    bigLogo,
    {
      opacity: 0,
      y: 120,
      duration: 1,
      ease: "power3.out",
    },
    "+=0.2"
  );


}, {
  scope: footerRef,
});

  return (
    <footer
      ref={footerRef}
      className={styles.footerWrapper}
    >

      <div className={styles.ctaContainer}>

        <div className={styles.ctaCard}>

          <img
            src={ctaBgImage}
            alt=""
            className={styles.ctaBgImage}
          />

          <div className={styles.ctaContent}>

            <h2 className={`${styles.ctaHeading} ${styles.footerReveal}`}>
              Start signing documents the simpler way
            </h2>

            <p className={`${styles.ctaSubheading} ${styles.footerReveal}`}>
              Join modern businesses sending and signing documents securely with Nexgn.
            </p>

            <div className={`${styles.ctaButtonWrapper} ${styles.footerReveal}`}>
              <Link
                to="/Sign-up"
                className={styles.ctaButton}
              >
                Create your free account
              </Link>
            </div>

          </div>
        </div>
      </div>


    
      <div className={styles.footerInner}>

        <div className={styles.footerGrid}>

          {/* Brand */}
          <div className={`${styles.brandTitleCol} ${styles.footerReveal}`}>

            <h3 className={styles.footerHeading}>
              The Next Generation of Document Signature
            </h3>

            <p className={styles.footerEmail}>
              gateway@nexgn.cloud
            </p>

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

            {/* Desktop Legal */}
            <div className={`${styles.legalBox} ${styles.desktopOnly}`}>

              <p>© 2026 Nexgn, Inc. All rights reserved.</p>
              <p>Global Backing: New Mexico, USA</p>
              <p>Engineering HQ: Bharat (India)</p>
              <p>Globally Compliant (ESIGN, UETA, eIDAS, IT Act)</p>
              <p>Data Sovereignty across North America & APAC</p>

            </div>

          </div>


          {/* Proudly Made in Bharat */}
          <div className={`${styles.proudlyCol} ${styles.footerReveal}`}>

            <p className={styles.proudlyText}>
              Proudly
            </p>

            <p className={styles.madeInBharat}>
              <span className={styles.orangeText}>
                Made
              </span>{" "}

              <span className={styles.blueText}>
                in
              </span>{" "}

              <span className={styles.greenText}>
                Bharat
              </span>
            </p>

          </div>


          {/* Mobile Legal */}
          <div className={`${styles.legalBox} ${styles.mobileOnly} ${styles.footerReveal}`}>

            <p>© 2026 Nexgn, Inc. All rights reserved.</p>
            <p>Global Backing: New Mexico, USA</p>
            <p>Engineering HQ: Bharat (India)</p>
            <p>Globally Compliant (ESIGN, UETA, eIDAS, IT Act)</p>
            <p>Data Sovereignty across North America & APAC</p>

          </div>


          {/* Company */}
          <div className={`${styles.linkColCompany} ${styles.footerReveal}`}>

            <h4>COMPANY</h4>

            <Link
              to="/about"
              onClick={() => window.scrollTo(0, 0)}
            >
              About Us
            </Link>

            <Link
              to="/contact"
              onClick={() => window.scrollTo(0, 0)}
            >
              Contact Us
            </Link>

            <Link
              to="/blog"
              onClick={() => window.scrollTo(0, 0)}
            >
              Blog
            </Link>

          </div>


          {/* Resources */}
          <div className={`${styles.linkColResources} ${styles.footerReveal}`}>

            <h4>RESOURCES</h4>

            <Link
              to="/help"
              onClick={() => window.scrollTo(0, 0)}
            >
              Help center
            </Link>

            <a
              href="https://status.nexgn.cloud"
              target="_blank"
              rel="noreferrer"
            >
              System Status
            </a>

            <Link
              to="/security"
              onClick={() => window.scrollTo(0, 0)}
            >
              Security
            </Link>

          </div>


          {/* Legal & Trust */}
          <div className={`${styles.linkColLegal} ${styles.footerReveal}`}>

            <h4>LEGAL & TRUST</h4>

            <Link
              to="/trust"
              onClick={() => window.scrollTo(0, 0)}
            >
              Trust & Compliance
            </Link>

            <Link
              to="/privacy"
              onClick={() => window.scrollTo(0, 0)}
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              onClick={() => window.scrollTo(0, 0)}
            >
              Terms & Services
            </Link>

          </div>

        </div>

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

