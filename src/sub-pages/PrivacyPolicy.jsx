import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Trash2, Edit3 } from 'lucide-react';
import PrivacyNavbar from '../component/PrivacyNavbar';
import Footer from '../component/Footer';
import styles from './css/PrivacyPolicy.module.css';

import heroBackgroundImage from '../assets/privacy-hero-bg.png'; 

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Nexgn</title>
        <meta
          name="description"
          content="Learn how Nexgn collects, uses, and safeguards your corporate and personal data with enterprise-grade encryption."
        />
        <link rel="canonical" href="https://nexgn.cloud/privacy" />
      </Helmet>

      <div className={styles.privacyPage}>
        
        {/* ================= HERO WRAPPER ================= */}
        <div className={styles.heroWrapper}>
          <section 
            className={styles.heroSection}
            style={{ backgroundImage: `url(${heroBackgroundImage})` }}
          >
            <div className={styles.heroOverlay}></div>
            
            <div className={styles.navContainer}>
              <PrivacyNavbar />
            </div>

            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Your Privacy<br />Our Priority
              </h1>
              <p className={styles.heroSubtext}>
                This Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you visit nexgn.cloud, use our
                services, or interact with our platform and third-party integrations (including Google Workspace).
              </p>
            </div>
          </section>
        </div>

        {/* ================= MAIN POLICY CONTENT ================= */}
        <main className={styles.contentContainer}>
          
          {/* SECTION 1: WHAT DATA IS ACCESSED */}
          <div className={styles.policyRow}>
            <div className={styles.leftCol}>
              <h2 className={styles.sectionHeading}>Information We Collect</h2>
              <p className={styles.sectionSubtext}>
                We only collect information that is strictly necessary to
                provide, secure and improve our services.
              </p>
            </div>
            <div className={styles.rightCol}>
              <ul className={styles.bulletList}>
                <li>
                  <span className={styles.bulletDot}></span>
                  <div>
                    <strong>Information You Provide Directly:</strong> When you
                    register for an account, we collect your email address, name, and
                    communication history.
                  </div>
                </li>
                <li>
                  <span className={styles.bulletDot}></span>
                  <div>
                    <strong>Google User Data Accessed:</strong> If you connect your Google Drive integration, our application will access the data you have provided to us, including your Google profile information (name, email) and Google Drive files, strictly to enable document importing and syncing features.
                  </div>
                </li>
                <li>
                  <span className={styles.bulletDot}></span>
                  <div>
                    <strong>Information Collected Automatically:</strong> We
                    automatically collect telemetry data such as IP addresses,
                    browser types, request timestamps, and routing headers.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* SECTION 2: HOW DATA IS USED & AI PROHIBITION */}
          <div className={styles.policyRow}>
            <div className={styles.leftCol}>
              <h2 className={styles.sectionHeading}>
                How We Use Your Information
              </h2>
              <p className={styles.sectionSubtext}>
                We use your data exclusively for operational functionality and security
                purposes.
              </p>
            </div>
            <div className={styles.rightCol}>
              <ul className={styles.bulletList}>
                <li>
                  <span className={styles.bulletDot}></span>
                  <div>
                    <strong>Providing Services:</strong> We will use your data (including Google user data) strictly to provide you with the services you requested, such as fetching documents for electronic signature workflows, email notifications, and secure storage.
                  </div>
                </li>
                <li>
                  <span className={styles.bulletDot}></span>
                  <div>
                    <strong>Prohibited Uses & AI/ML Limitation:</strong> We explicitly affirm that Google Workspace APIs and Google user data are not used to develop, improve, or train generalized or non-personalized AI and/or ML models.
                  </div>
                </li>
                <li>
                  <span className={styles.bulletDot}></span>
                  <div>
                    To authenticate your identity and protect against malicious
                    activity (e.g., DDoS attacks, credential stuffing).
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* SECTION 3: DATA SHARING */}
          <div className={styles.policyRow}>
            <div className={styles.leftCol}>
              <h2 className={styles.sectionHeading}>
                Data Sharing and Disclosure
              </h2>
              <p className={styles.sectionSubtext}>
                We maintain strict limitations on how data is shared.
              </p>
            </div>
            <div className={styles.rightCol}>
              <ul className={styles.bulletList}>
                <li>
                  <span className={styles.bulletDot}></span>
                  <div>
                    <strong>Strictly Limited Disclosure:</strong> We do not transfer or disclose your information (including Google user data) to third parties for purposes other than the ones provided to operate the core functionality of the application. 
                  </div>
                </li>
                <li>
                  <span className={styles.bulletDot}></span>
                  <div>
                    <strong>Prohibited Data Transfers:</strong> We will not sell your data to third parties, data brokers, or information resellers. We do not use or share your data for targeted advertising, personalized advertisements, retargeted advertisements, interest-based advertisements, or determining credit-worthiness and lending purposes.
                  </div>
                </li>
                <li>
                  <span className={styles.bulletDot}></span>
                  <div>
                    <strong>Sub-processors & Legal Compliance:</strong> We may share data with trusted infrastructure partners (e.g., CDN/DNS providers) bound by confidentiality agreements, or if compelled by a legally binding court order.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* SECTION 4: SECURITY & RETENTION */}
          <div className={styles.policyRow}>
            <div className={styles.leftCol}>
              <h2 className={styles.sectionHeading}>
                Data Retention & Security
              </h2>
              <p className={styles.sectionSubtext}>
                We employ enterprise-grade mechanisms to safeguard your sensitive data.
              </p>
            </div>
            <div className={styles.rightCol}>
              <ul className={styles.bulletList}>
                <li>
                  <span className={styles.bulletDot}></span>
                  <div>
                    <strong>Data Protection Mechanisms:</strong> Strict security procedures are in place to protect the confidentiality of your data. We use enterprise-grade encryption (TLS 1.3 in transit, AES-256 at rest) to protect your sensitive information, including any accessed Google user data.
                  </div>
                </li>
                <li>
                  <span className={styles.bulletDot}></span>
                  <div>
                    <strong>Data Retention:</strong> We will retain your personal information for the length of time needed to fulfill the purposes outlined in this privacy policy, consistent with our business purposes, unless a longer retention period is required by law.
                  </div>
                </li>
                <li>
                  <span className={styles.bulletDot}></span>
                  <div>
                    <strong>Data Deletion:</strong> When the data retention period expires for a given type of data, we will delete or destroy it. You may request for your data to be permanently deleted at any time by contacting our support team or using the in-app account management tools.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* SECTION 5: RIGHTS */}
          <div className={styles.policyRow}>
            <div className={styles.leftCol}>
              <h2 className={styles.sectionHeading}>Your Privacy Rights</h2>
              <p className={styles.sectionSubtext}>
                Regardless of your global location, Nexgn grants you the
                following rights concerning your data:
              </p>
            </div>
            <div className={styles.rightCol}>
              <div className={styles.rightsCardsContainer}>
                <div className={styles.rightCard}>
                  <div className={styles.rightCardIcon}>
                    <FileText size={18} color="#e8261c" />
                  </div>
                  <h3 className={styles.rightCardTitle}>
                    Right to Access &amp; Portability
                  </h3>
                  <p className={styles.rightCardDesc}>
                    Request a copy of the data we hold about you.
                  </p>
                </div>
                <div className={styles.rightCard}>
                  <div className={styles.rightCardIcon}>
                    <Trash2 size={18} color="#e8261c" />
                  </div>
                  <h3 className={styles.rightCardTitle}>
                    Right to Erasure<br />(Right to be Forgotten)
                  </h3>
                  <p className={styles.rightCardDesc}>
                    Request the deletion of your personal data.
                  </p>
                </div>
                <div className={styles.rightCard}>
                  <div className={styles.rightCardIcon}>
                    <Edit3 size={18} color="#e8261c" />
                  </div>
                  <h3 className={styles.rightCardTitle}>
                    Right to Rectification
                  </h3>
                  <p className={styles.rightCardDesc}>
                    Correct inaccurate or incomplete data.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CONTACT STATEMENT */}
          <div className={styles.contactBlock}>
            <p className={styles.contactPrompt}>
              To exercise these rights or request data deletion, please contact our privacy team at:
            </p>
            <a
              href="mailto:privacy@nexgn.cloud"
              className={styles.contactEmail}
            >
              privacy@nexgn.cloud
            </a>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;