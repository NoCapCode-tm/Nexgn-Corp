import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Clock, Award } from 'lucide-react';
import PrivacyNavbar from '../component/PrivacyNavbar';
import Footer from '../component/Footer';
import styles from './css/TrustSecurity.module.css';

// IMPORT YOUR HERO IMAGE HERE (The Eagle image)
import heroBackgroundImage from '../assets/trust-hero-bg.png'; 

const TrustSecurity = () => {
  return (
    <>
      <Helmet>
        <title>Trust & Security Centre | Nexgn</title>
        <meta
          name="description"
          content="At Nexgn, trust is our foundational infrastructure. Discover our security architecture, compliance standards, and vulnerability disclosure policy."
        />
        <link rel="canonical" href="https://nexgn.cloud/trust" />
      </Helmet>

      <div className={styles.trustPage}>
        
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
                Nexgn Trust &<br />Security Centre
              </h1>
              <p className={styles.heroSubtext}>
                At Nexgn, trust is our foundational infrastructure. We
                architect security into every layer of our platform to
                protect your data, infrastructure and operations.
              </p>
            </div>
          </section>
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <main className={styles.contentContainer}>
          
          {/* SECTION 1: Infrastructure and Network Security */}
          <div className={styles.policyRow}>
            <div className={styles.leftCol}>
              <h2 className={styles.sectionHeading}>Infrastructure and Network Security</h2>
              <p className={styles.sectionSubtext}>
                Internet-scale trust architecture with multi-layered
                defenses and zero-trust verification.
              </p>
            </div>
            <div className={styles.rightCol}>
              <ul className={styles.bulletList}>
                <li>
                  <span className={styles.bulletDot}></span>
                  <div>
                    <strong>Edge Defence & DDoS Mitigation:</strong> Automated multi-layered protection
                    neutralizes malicious traffic at our global edge.
                  </div>
                </li>
                <li>
                  <span className={styles.bulletDot}></span>
                  <div>
                    <strong>Zero-Trust Architecture:</strong> Least-privilege access with mTLS and client
                    certificates to prevent unauthorized movement.
                  </div>
                </li>
                <li>
                  <span className={styles.bulletDot}></span>
                  <div>
                    <strong>Automated Threat & Bot Intelligence:</strong> Advanced bot detection and
                    behaviour analysis keep your infrastructure secure.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* SECTION 2: Data Protection and Encryption */}
          <div className={styles.policyRow}>
            <div className={styles.leftCol}>
              <h2 className={styles.sectionHeading}>Data Protection and Encryption</h2>
              <p className={styles.sectionSubtext}>
                Strict enforcement across your data from in-transit routing
                and at a rest data storage.
              </p>
            </div>
            <div className={styles.rightCol}>
              <ul className={styles.bulletList}>
                <li>
                  <span className={styles.bulletDot}></span>
                  <div>
                    <strong>Encryption in Transit:</strong> All communications use HTTPS with TLS 1.3 and
                    strong cipher suites.
                  </div>
                </li>
                <li>
                  <span className={styles.bulletDot}></span>
                  <div>
                    <strong>DNS Integrity (DNSSEC):</strong> Cryptographically signed DNS records
                    prevent spoofing and ensure authentic resolutions.
                  </div>
                </li>
                <li>
                  <span className={styles.bulletDot}></span>
                  <div>
                    <strong>Credential Integrity:</strong> Built-in protections against credential stuffing
                    using leaked credential intelligence.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* SECTION 3: Application and Product Security */}
          <div className={styles.policyRow}>
            <div className={styles.leftCol}>
              <h2 className={styles.sectionHeading}>Application and Product Security</h2>
              <p className={styles.sectionSubtext}>
                Continuous security lifecycle that identifies and
                mitigates risks before they reach production.
              </p>
            </div>
            <div className={styles.rightCol}>
              <ul className={styles.bulletList}>
                <li>
                  <span className={styles.bulletDot}></span>
                  <div>
                    <strong>Continuous Script Monitoring:</strong> Scans for unauthorized or unexpected
                    client-side changes.
                  </div>
                </li>
                <li>
                  <span className={styles.bulletDot}></span>
                  <div>
                    <strong>Secure Dependencies:</strong> Automated checks against global exploit
                    databases using patched, vetted libraries.
                  </div>
                </li>
                <li>
                  <span className={styles.bulletDot}></span>
                  <div>
                    <strong>Credential Integrity:</strong> Built-in protections against credential stuffing
                    using leaked credential intelligence.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* SECTION 4: Vulnerability Disclosure Policy */}
          <div className={styles.policyRow}>
            <div className={styles.leftCol}>
              <h2 className={styles.sectionHeading}>Vulnerability Disclosure Policy (VDP)</h2>
              <p className={styles.sectionSubtext}>
                A continuous security lifecycle that identifies and
                mitigates risks before they reach production.
              </p>
            </div>
            <div className={styles.rightCol}>
              <div className={styles.vdpBox}>
                <p className={styles.vdpLabel}>Primary Security Inbox:</p>
                <a href="mailto:security@nexgn.cloud" className={styles.vdpEmail}>
                  security@nexgn.cloud
                </a>
                <p className={styles.vdpDesc}>
                  Include clear steps, proof-of-concept, and potential impact across surfaces and account scopes.
                </p>
              </div>
            </div>
          </div>

          {/* SECTION 5: VDP Rights / Safe Harbor */}
          <div className={styles.policyRow}>
            <div className={styles.leftCol}>
              <h2 className={styles.sectionHeading}>Your Privacy Rights</h2>
              <p className={styles.sectionSubtext}>
                Regardless of your global location, Nexgn grants you the following rights concerning your data:
              </p>
            </div>
            <div className={styles.rightCol}>
              <div className={styles.rightsCardsContainer}>
                <div className={styles.rightCard}>
                  <div className={styles.rightCardIcon}>
                    <ShieldCheck size={18} color="#e8261c" />
                  </div>
                  <h3 className={styles.rightCardTitle}>Safe Harbor</h3>
                  <p className={styles.rightCardDesc}>
                    We will not initiate legal action or law enforcement investigations against you.
                  </p>
                </div>
                <div className={styles.rightCard}>
                  <div className={styles.rightCardIcon}>
                    <Clock size={18} color="#e8261c" />
                  </div>
                  <h3 className={styles.rightCardTitle}>Timely Response</h3>
                  <p className={styles.rightCardDesc}>
                    We acknowledge submissions within 48 business hours and keep you updated.
                  </p>
                </div>
                <div className={styles.rightCard}>
                  <div className={styles.rightCardIcon}>
                    <Award size={18} color="#e8261c" />
                  </div>
                  <h3 className={styles.rightCardTitle}>Recognition</h3>
                  <p className={styles.rightCardDesc}>
                    We recognize your contributions to our security research acknowledgement archive (if requested).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 6: Contacts Table */}
          <div className={styles.fullWidthSection}>
            <h2 className={styles.sectionHeading}>Privacy, Compliance, and Technical Contacts</h2>
            <p className={styles.sectionSubtext} style={{ marginBottom: '24px' }}>
              Nexgn operates under strict data minimization standards, ensuring structural transparency across all borders.
            </p>
            
            <div className={styles.tableResponsive}>
              <table className={styles.contactsTable}>
                <thead>
                  <tr>
                    <th>Target Resource</th>
                    <th>Designated System / Contact Alias</th>
                    <th>Compliance Focus</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Data Privacy & GDPR</strong></td>
                    <td><a href="mailto:privacy@nexgn.cloud">privacy@nexgn.cloud</a></td>
                    <td>Data subject access requests, encryption audits, compliance inquiries</td>
                  </tr>
                  <tr>
                    <td><strong>System Security Operations</strong></td>
                    <td><a href="mailto:security@nexgn.cloud">security@nexgn.cloud</a></td>
                    <td>Active threat intelligence, breach reports, vulnerability disclosures</td>
                  </tr>
                  <tr>
                    <td><strong>System Infrastructure</strong></td>
                    <td><a href="mailto:postmaster@nexgn.cloud">postmaster@nexgn.cloud</a></td>
                    <td>Core SMTP relay configuration, delivery issues, network handshakes</td>
                  </tr>
                  <tr>
                    <td><strong>Abuse & Spam Mitigation</strong></td>
                    <td><a href="mailto:abuse@nexgn.cloud">abuse@nexgn.cloud</a></td>
                    <td>Domain reputation management, spoof reporting, network compliance</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </main>


        {/* ================= FOOTER ================= */}
        <Footer />
      </div>
    </>
  );
};

export default TrustSecurity;