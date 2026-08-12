import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Trash2, Edit3 } from 'lucide-react';
import PrivacyNavbar from '../component/PrivacyNavbar';
import Footer from '../component/Footer';
import styles from './css/PrivacyPolicy.module.css';

// 1. IMPORT YOUR NEW HERO IMAGE HERE
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
        <link rel="canonical" href="https://nexgn.cloud/privacy-policy" />
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
                services, or interact with our platform.
              </p>
            </div>
          </section>
        </div>

        {/* ================= MAIN POLICY CONTENT ================= */}
        <main className={styles.contentContainer}>
          
          {/* SECTION 1 */}
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
                    join our wait list, register for an account, or contact
                    support, we collect your email address, name and
                    communication history.
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
                <li>
                  <span className={styles.bulletDot}></span>
                  <div>
                    <strong>Cookies and Tracking:</strong> We use strictly
                    necessary cookies to maintain session states and security
                    tokens, we do not use third-party advertising trackers.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* SECTION 2 */}
          <div className={styles.policyRow}>
            <div className={styles.leftCol}>
              <h2 className={styles.sectionHeading}>
                How We Use Your Information
              </h2>
              <p className={styles.sectionSubtext}>
                We use your data exclusively for operational and security
                purposes.
              </p>
            </div>
            <div className={styles.rightCol}>
              <ul className={styles.bulletList}>
                <li>
                  <span className={styles.bulletDot}></span>
                  <div>To provision, maintain and deliver our cloud services.</div>
                </li>
                <li>
                  <span className={styles.bulletDot}></span>
                  <div>
                    To authenticate your identity and protect against malicious
                    activity (e.g DDoS attacks, credential stuffing).
                  </div>
                </li>
                <li>
                  <span className={styles.bulletDot}></span>
                  <div>
                    To communicate transactional updates, security alerts and
                    support responses.
                  </div>
                </li>
                <li>
                  <span className={styles.bulletDot}></span>
                  <div>
                    To analyze aggregated infrastructure load and improve edge
                    routing performance.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* SECTION 3 */}
          <div className={styles.policyRow}>
            <div className={styles.leftCol}>
              <h2 className={styles.sectionHeading}>
                Data Sharing and Disclosure
              </h2>
              <p className={styles.sectionSubtext}>
                We do not sell, rent or trade your personal data. We only share
                information under the following strict conditions:
              </p>
            </div>
            <div className={styles.rightCol}>
              <ul className={styles.bulletList}>
                <li>
                  <span className={styles.bulletDot}></span>
                  <div>
                    <strong>Sub-processors:</strong> With trusted infrastructure
                    partners (such as our global CDN and DNS providers) strictly
                    for the purpose of delivering the services. These partners
                    are bound by confidentiality agreements.
                  </div>
                </li>
                <li>
                  <span className={styles.bulletDot}></span>
                  <div>
                    <strong>Legal Compliance:</strong> If compelled by a
                    legally binding subpoena, court order or regulatory
                    mandate, we will disclose necessary data. We commit to
                    notifying you of any such request unless legally prohibited
                    from doing so.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* SECTION 4 */}
          <div className={styles.policyRow}>
            <div className={styles.leftCol}>
              <h2 className={styles.sectionHeading}>
                Data Retention and Security
              </h2>
              <p className={styles.sectionSubtext}>
                Your data is encrypted in transit using TLS 1.3 and at rest with
                AES-256.
              </p>
            </div>
            <div className={styles.rightCol}>
              <ul className={styles.bulletList}>
                <li>
                  <span className={styles.bulletDot}></span>
                  <div>
                    We retain personal data only for as long as your account is
                    active or as needed to fulfill our legal obligations,
                    resolve disputes and enforce our agreements.
                  </div>
                </li>
                <li>
                  <span className={styles.bulletDot}></span>
                  <div>
                    Network logs and IP addresses used for security mitigation
                    are purged on a rolling 30-day basis.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* SECTION 5 */}
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
                    Request a copy the data we hold about you.
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
              To exercise these rights, please contact our privacy team at:
            </p>
            <a
              href="mailto:privacy@nexgn.cloud"
              className={styles.contactEmail}
            >
              privacy@nexgn.cloud
            </a>
          </div>
        </main>


        {/* ================= FOOTER ================= */}
        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;