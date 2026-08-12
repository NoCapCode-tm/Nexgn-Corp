
import React from 'react';
import { Helmet } from 'react-helmet-async';
import PrivacyNavbar from '../component/PrivacyNavbar';
import Footer from '../component/Footer';
import styles from './css/TermsServices.module.css';

// 1. IMPORT YOUR BACKGROUND IMAGES HERE
import heroBackgroundImage from '../assets/terms-hero-bg.png'; 

const TermsServices = () => {
  return (
    <>
      <Helmet>
        <title>Terms and Services | Nexgn</title>
        <meta
          name="description"
          content="Review the Nexgn Terms of Service governing your use of our digital signature and document management platform."
        />
        <link rel="canonical" href="https://nexgn.cloud/terms" />
      </Helmet>

      <div className={styles.termsPage}>
        
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
                Terms that keep<br />things clear
              </h1>
              <p className={styles.heroSubtext}>
                These Terms of Service govern your access to and use of Nexgn 
                products, services, and digital platforms.
              </p>
            </div>
          </section>
        </div>

        {/* ================= MAIN POLICY CONTENT ================= */}
        <main className={styles.contentContainer}>
          
          {/* SECTION 1 */}
          <div className={styles.policyRow}>
            <div className={styles.leftCol}>
              <h2 className={styles.sectionHeading}>Acceptance of the Terms</h2>
            </div>
            <div className={styles.rightCol}>
              <ul className={styles.bulletList}>
                <li>
                  <span className={styles.bulletDot}></span>
                  <div>
                    Welcome to Nexgn. These Terms of Service ("Terms") constitute a 
                    legally binding agreement between you ("Customer," "User," or "You") 
                    and Nexgn ("Company," "We," "Our," or "Us") governing your access to 
                    and use of the Nexgn website, products, and APIs.
                  </div>
                </li>
                <li>
                  <span className={styles.bulletDot}></span>
                  <div>
                    By registering for an account, clicking "I Agree," or continuing to use the 
                    Services, you acknowledge that you have read, understood, and agree 
                    to be bound by these Terms.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <hr className={styles.divider} />

          {/* SECTION 2 */}
          <div className={styles.policyRow}>
            <div className={styles.leftCol}>
              <h2 className={styles.sectionHeading}>Account Registration and security</h2>
            </div>
            <div className={styles.rightCol}>
              <ul className={styles.bulletList}>
                <li>
                  <span className={styles.bulletDot}></span>
                  <div>Provide accurate, current and complete information.</div>
                </li>
                <li>
                  <span className={styles.bulletDot}></span>
                  <div>Maintain the confidentiality of your passwords, API keys, and authentication tokens.</div>
                </li>
                <li>
                  <span className={styles.bulletDot}></span>
                  <div>Be entirely responsible for all activities that occur under your account, regardless of whether you authorized them or not.</div>
                </li>
                <li>
                  <span className={styles.bulletDot}></span>
                  <div>Notify Nexgn immediately of any unauthorized use of your account or any other breach of security.</div>
                </li>
              </ul>
            </div>
          </div>

          <hr className={styles.divider} />

          {/* SECTION 3 */}
          <div className={styles.policyRow}>
            <div className={styles.leftCol}>
              <h2 className={styles.sectionHeading}>Acceptable Use Policy (AUP)</h2>
              <div className={styles.aupBadge}>
                Customers must strictly adhere to our Acceptable Use Policy. We have a zero-tolerance policy for malicious activities.
              </div>
            </div>
            <div className={styles.rightCol}>
              <ul className={styles.bulletList}>
                <li>
                  <span className={styles.bulletDot}></span>
                  <div>Transmit malicious code, viruses, trojans, worms, or any other software designed to damage or disrupt.</div>
                </li>
                <li>
                  <span className={styles.bulletDot}></span>
                  <div>Launch attacks (DDoS) or attempt to probe, scan, or test the vulnerability of our systems without authorization.</div>
                </li>
                <li>
                  <span className={styles.bulletDot}></span>
                  <div>Restrict or inhibit any other user from using and enjoying the services, or degrade the performance of the infrastructure.</div>
                </li>
                <li>
                  <span className={styles.bulletDot}></span>
                  <div>Violate intellectual property rights, privacy rights, or fundamental rights of others.</div>
                </li>
                <li>
                  <span className={styles.bulletDot}></span>
                  <div>Bypass, circumvent, or attempt to bypass any rate limits, security mechanisms, or billing controls put in place by Nexgn.</div>
                </li>
              </ul>
            </div>
          </div>

          <hr className={styles.divider} />

          {/* SECTION 4 */}
          <div className={styles.policyRow}>
            <div className={styles.leftCol}>
              <h2 className={styles.sectionHeading}>Intellectual Property</h2>
            </div>
            <div className={styles.rightCol}>
              <ul className={styles.bulletList}>
                <li>
                  <span className={styles.bulletDot}></span>
                  <div>
                    <strong>Nexgn Property:</strong> Nexgn retains all ownership and intellectual property rights 
                    in and to the Services, underlying technology, and APIs. We grant you a limited, non-exclusive, 
                    non-transferable license to use the Services.
                  </div>
                </li>
                <li>
                  <span className={styles.bulletDot}></span>
                  <div>
                    <strong>Customer Property:</strong> You retain all right, title, and interest in the data and 
                    documents you submit to the Services.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <hr className={styles.divider} />

          {/* SECTION 5 */}
          <div className={styles.policyRow}>
            <div className={styles.leftCol}>
              <h2 className={styles.sectionHeading}>Service Availability and SLA</h2>
            </div>
            <div className={styles.rightCol}>
              <ul className={styles.bulletList}>
                <li>
                  <span className={styles.bulletDot}></span>
                  <div>
                    We strive to provide highly available, globally redundant cloud services. 
                    However, the Services are provided on a commercially reasonable effort basis 
                    unless outlined within a specific Service Level Agreement (SLA).
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <hr className={styles.divider} />

          {/* SECTION 6 */}
          <div className={styles.policyRow}>
            <div className={styles.leftCol}>
              <h2 className={styles.sectionHeading}>Disclaimer of Warranties</h2>
            </div>
            <div className={styles.rightCol}>
              <ul className={styles.bulletList}>
                <li>
                  <span className={styles.bulletDot}></span>
                  <div>
                    The services are provided "as is" and "as available" without warranty of 
                    any kind. Nexgn explicitly disclaims all warranties, whether express or 
                    implied, including but not limited to the implied warranties of merchantability, 
                    fitness for a particular purpose, and non-infringement.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <hr className={styles.divider} />

          {/* SECTION 7 */}
          <div className={styles.policyRow}>
            <div className={styles.leftCol}>
              <h2 className={styles.sectionHeading}>Limitation of Liability</h2>
            </div>
            <div className={styles.rightCol}>
              <ul className={styles.bulletList}>
                <li>
                  <span className={styles.bulletDot}></span>
                  <div>
                    In no event shall Nexgn, its affiliates, directors, or employees be liable 
                    for any indirect, punitive, incidental, special, or consequential damages, 
                    including lost profits, data loss, or business interruption arising out of 
                    the use of the services.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <hr className={styles.divider} />

          {/* SECTION 8 */}
          <div className={styles.policyRow}>
            <div className={styles.leftCol}>
              <h2 className={styles.sectionHeading}>Suspension and Termination</h2>
            </div>
            <div className={styles.rightCol}>
              <ul className={styles.bulletList}>
                <li>
                  <span className={styles.bulletDot}></span>
                  <div>
                    We reserve the right to suspend or terminate your account and access to the 
                    services immediately, without prior notice.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <hr className={styles.divider} />

          {/* SECTION 9 */}
          <div className={styles.policyRow}>
            <div className={styles.leftCol}>
              <h2 className={styles.sectionHeading}>Modifications to the Terms</h2>
            </div>
            <div className={styles.rightCol}>
              <ul className={styles.bulletList}>
                <li>
                  <span className={styles.bulletDot}></span>
                  <div>
                    Nexgn reserves the right to modify these Terms at any time. We will provide 
                    notice of material changes by updating the date at the top of this page.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <hr className={styles.divider} />

          {/* SECTION 10: CONTACT */}
          <div className={styles.policyRow}>
            <div className={styles.leftCol}>
              <h2 className={styles.sectionHeading}>Contact Information</h2>
            </div>
            <div className={styles.rightCol}>
              <ul className={styles.bulletList}>
                <li>
                  <span className={styles.bulletDot}></span>
                  <div>
                    If you have any questions or concerns regarding these terms, please contact us at:
                  </div>
                </li>
              </ul>
              <div className={styles.contactBlock}>
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>General Inquiries:</span>
                  <a href="mailto:support@nexgn.cloud" className={styles.contactEmail}>support@nexgn.cloud</a>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>Legal & Privacy:</span>
                  <a href="mailto:legal@nexgn.cloud" className={styles.contactEmail}>legal@nexgn.cloud</a>
                </div>
              </div>
            </div>
          </div>

        </main>


        {/* ================= FOOTER ================= */}
        <Footer />
      </div>
    </>
  );
};

export default TermsServices;