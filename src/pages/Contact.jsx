import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Headphones, ShieldCheck, Building2, Mail, ExternalLink, MapPin, User } from 'lucide-react';
import PrivacyNavbar from '../component/Navbar';
import Footer from '../component/Footer';
import styles from './css/Contact.module.css';

// IMPORT YOUR IMAGES HERE
import contactHeroImage from '../assets/contact-hero.png'; 

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Nexgn</title>
        <meta
          name="description"
          content="Get in touch with Nexgn's global support and engineering teams for assistance, enterprise compliance, or general inquiries."
        />
        <link rel="canonical" href="https://nexgn.cloud/contact" />
      </Helmet>

      <div className={styles.contactPage}>
        
        {/* ================= NAVBAR WRAPPER ================= */}
        <div className={styles.navContainer}>
          <PrivacyNavbar />
        </div>

        {/* ================= MAIN SPLIT SECTION ================= */}
        <main className={styles.mainContainer}>
          
          {/* LEFT COLUMN: Text & Cards */}
          <div className={styles.leftColumn}>
            <div className={styles.headerBlock}>
              <span className={styles.topLabel}>CONTACT US</span>
              <h1 className={styles.mainTitle}>
                Let’s <span className={styles.highlightText}>talk</span>
              </h1>
              <p className={styles.subtitle}>
                Our global support and engineering teams<br />are ready to assist you.
              </p>
            </div>

            <div className={styles.cardsGrid}>
              
              {/* CARD 1: Customer Success */}
              <div className={styles.infoCard}>
                <Headphones className={styles.cardIcon} size={28} />
                <h3 className={styles.cardTitle}>Customer Success & Support</h3>
                <p className={styles.cardDesc}>
                  Need help with your account, billing, or a technical issue? 
                  Our team is available to keep your workflows moving.
                </p>
                <div className={styles.cardLinks}>
                  <a href="mailto:gateway@nexgn.cloud">
                    <Mail size={16} /> gateway@nexgn.cloud
                  </a>
                  <a href="https://help.nexgn.cloud" target="_blank" rel="noreferrer">
                    <ExternalLink size={16} /> help.nexgn.cloud
                  </a>
                </div>
              </div>

              {/* CARD 2: Enterprise & Security */}
              <div className={styles.infoCard}>
                <ShieldCheck className={styles.cardIcon} size={28} />
                <h3 className={styles.cardTitle}>Enterprise & Security</h3>
                <p className={styles.cardDesc}>
                  For vulnerability disclosures, data privacy requests, or enterprise SLA compliance.
                </p>
                <div className={styles.cardLinks}>
                  <a href="mailto:security@nexgn.cloud">
                    <ShieldCheck size={16} /> security@nexgn.cloud
                  </a>
                  <a href="mailto:privacy@nexgn.cloud">
                    <User size={16} /> privacy@nexgn.cloud
                  </a>
                </div>
              </div>

              {/* CARD 3: Headquarters */}
              <div className={styles.infoCard}>
                <Building2 className={styles.cardIcon} size={28} />
                <h3 className={styles.cardTitle}>Corporate Headquarters</h3>
                <p className={styles.cardDesc}>
                  Need help with your account, billing, or a technical issue? 
                  Our team is available to keep your workflows moving.
                </p>
                <div className={styles.cardLinks}>
                  <div className={styles.addressBlock}>
                    <MapPin size={18} className={styles.addressIcon} />
                    <span>
                      Nexgn Inc.<br />
                      Santa Fe, New Mexico<br />
                      United States
                    </span>
                  </div>
                </div>
              </div>

              {/* CARD 4: Contact Form */}
              <div className={styles.formCard}>
                <h3 className={styles.formTitle}>
                  Get in <span className={styles.highlightText}>Touch</span>
                </h3>
                <form className={styles.contactForm}>
                  <input type="text" placeholder="Full Name" required aria-label="Full Name" />
                  <input type="email" placeholder="Email Address" required aria-label="Email Address" />
                  <textarea placeholder="Message" rows="3" required aria-label="Message"></textarea>
                  <div className={styles.formButtonWrapper}>
                    <button type="submit" className={styles.submitBtn}>
                      Send Message
                    </button>
                  </div>
                </form>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Hero Image (Full Bleed) */}
          <div className={styles.rightColumn}>
            <img 
              src={contactHeroImage} 
              alt="Nexgn Support Agent" 
              className={styles.heroImage} 
              loading="eager"
            />
          </div>

        </main>


        {/* ================= FOOTER ================= */}
        <Footer />
      </div>
    </>
  );
};

export default Contact;