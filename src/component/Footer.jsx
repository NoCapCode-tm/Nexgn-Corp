import React, { useLayoutEffect, useRef } from 'react';
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

 useLayoutEffect(() => {
  const footer = footerRef.current;

  if (!footer) return;

  const ctaCard = footer.querySelector(`.${styles.ctaCard}`);
  const ctaHeading = footer.querySelector(`.${styles.ctaHeading}`);
  const ctaSubheading = footer.querySelector(`.${styles.ctaSubheading}`);
  const ctaButton = footer.querySelector(`.${styles.ctaButtonWrapper}`);

  const brandContent = footer.querySelector(`.${styles.brandTitleCol}`);
  const proudly = footer.querySelector(`.${styles.proudlyCol}`);
  const company = footer.querySelector(`.${styles.linkColCompany}`);
  const resources = footer.querySelector(`.${styles.linkColResources}`);
  const legal = footer.querySelector(`.${styles.linkColLegal}`);

  const bigLogo = footer.querySelector(`.${styles.footerBrand}`);

  gsap.set(ctaCard, {
    opacity: 0,
    scale: 0.75,
  });

  gsap.set(ctaHeading, {
    opacity: 0,
    y: 30,
  });

  gsap.set(ctaSubheading, {
    opacity: 0,
    y: 25,
  });

  gsap.set(ctaButton, {
    opacity: 0,
    y: 25,
  });

  gsap.set(
    [
      brandContent,
      proudly,
      company,
      resources,
      legal,
    ],
    {
      opacity: 0,
      y: 25,
    }
  );

  gsap.set(bigLogo, {
    opacity: 0,
    y: 180,
  });


  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: footer,
      start: "top 90%",
      end: "bottom 85%",
      scrub: 1,
      markers: false,
      invalidateOnRefresh: true,
    },
  });

  // 1. CTA CARD
  tl.to(ctaCard, {
    opacity: 1,
    scale: 1,
    duration: 1,
    ease: "back.out(1.5)",
  })

  // 2. CTA HEADING
  .to(ctaHeading, {
    opacity: 1,
    y: 0,
    duration: 0.7,
    ease: "power3.out",
  })

  // 3. CTA SUBHEADING
  .to(ctaSubheading, {
    opacity: 1,
    y: 0,
    duration: 0.7,
    ease: "power3.out",
  })

  // 4. CTA BUTTON
  .to(ctaButton, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: "power3.out",
  })

  // 5. BRAND
  .to(brandContent, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: "power3.out",
  })

  // 6. PROUDLY MADE IN BHARAT
  .to(proudly, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: "power3.out",
  })

  // 7. COMPANY
  .to(company, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: "power3.out",
  })

  // 8. RESOURCES
  .to(resources, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: "power3.out",
  })

  // 9. LEGAL
  .to(legal, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: "power3.out",
  })

  // 10. HUGE NEXGN
  .to(bigLogo, {
    opacity: 1,
    y: 0,
    duration: 1.8,
    ease: "power2.out",
  });

  ScrollTrigger.refresh();

  return () => {
    tl.kill();
  };
}, []);

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
                to="https://sign.nexgn.cloud/signup"
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
                href="https://www.instagram.com/nexgn.cloud"
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

            {/* NEW: LAUNCHBUFF BADGE PLACEMENT */}
            <div className={styles.badgeRow}>
              <a href="https://launchbuff.com/products/nexgn-wv9opp" target="_blank" rel="noopener noreferrer" title="Featured on LaunchBuff">
                <img src="https://launchbuff.com/badge-featured-light.svg" alt="Featured on LaunchBuff" width="140" height="62" />
              </a>
            </div>

            <div className={styles.badgeRow}>
              <a href="https://smollaunch.com" target="_blank" rel="noopener noreferrer" title="Featured on Smol Launch">
                <img src="https://smollaunch.com/badges/featured.svg" alt="Nexgn — Featured on Smol Launch" loading="lazy" width="160" height="60" />
              </a>
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