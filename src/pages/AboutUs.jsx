import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Zap, Globe } from 'lucide-react';
import PrivacyNavbar from '../component/PrivacyNavbar'; // Adjust path if needed
import Footer from '../component/Footer'; // Adjust path if needed
import styles from './css/AboutUs.module.css'; // Adjust path if needed

// Make sure to add your actual background images to your assets folder
import heroBackgroundImage from '../assets/about-hero-bg.png'; 

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Nexgn</title>
        <meta
          name="description"
          content="Learn about Nexgn's mission to build a more secure, efficient, and trustworthy digital world through enterprise-grade digital signatures."
        />
        <link rel="canonical" href="https://nexgn.cloud/about" />
      </Helmet>

      <div className={styles.aboutPage}>
        
        {/* ================= HERO SECTION ================= */}
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
              <h1 className={styles.heroTitle}>About Us</h1>
            </div>
          </section>
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <main className={styles.contentContainer}>
          
          {/* SECTION 1: The Story */}
          <section className={styles.storySection}>
            <div className={styles.leftCol}>
              <h2 className={styles.sectionHeading}>
                Designed for Trust<br />Engineered for the World
              </h2>
            </div>
            <div className={styles.rightCol}>
              <p className={styles.paragraph}>
                The modern business moves at the speed of the internet, yet the
                tools we use to sign, secure, and manage our most critical agreements
                have been left in the past. They are slow, bloated, and needlessly
                complex.
              </p>
              <p className={styles.paragraph}>
                We built Nexgn to change that.
              </p>
              <p className={styles.paragraph}>
                What began as a vision for better security in New Mexico has rapidly
                evolved into a global infrastructure for digital trust. We believe that
                securing your documents shouldn't be complicated, and compliance
                shouldn't slow you down. By combining enterprise-grade encryption with
                an aggressively optimized, user-first interface, we are building the
                intelligent backbone for a faster, smarter, and more connected future.
              </p>
              <p className={styles.paragraph}>
                Whether you are a fast-growing startup or an established multinational,
                Nexgn provides the uncompromised security and lightning-fast
                workflows you need to close deals, manage agreements, and scale
                seamlessly across borders.
              </p>
            </div>
          </section>

          {/* SECTION 2: Core Values */}
          <section className={styles.valuesSection}>
            <div className={styles.leftCol}>
              <h2 className={styles.sectionHeading}>
                Built on Principles.<br />Driven by Purpose.
              </h2>
              <span className={styles.subLabel}>OUR CORE VALUES</span>
            </div>
            
            <div className={styles.rightCol}>
              <div className={styles.valuesGrid}>
                
                <div className={styles.valueCard}>
                  <ShieldCheck className={styles.valueIcon} size={24} />
                  <h3 className={styles.valueTitle}>Security by<br />Design</h3>
                  <p className={styles.valueDesc}>
                    We don't bolt security on at the end. It is the
                    invisible foundation of every line of code we
                    write, protecting your data before you even click send.
                  </p>
                </div>

                <div className={styles.valueCard}>
                  <Zap className={styles.valueIcon} size={24} />
                  <h3 className={styles.valueTitle}>Frictionless<br />Velocity</h3>
                  <p className={styles.valueDesc}>
                    Time is your most valuable asset. We engineer our
                    workflows to remove barriers, saving you critical
                    seconds on every signature.
                  </p>
                </div>

                <div className={styles.valueCard}>
                  <Globe className={styles.valueIcon} size={24} />
                  <h3 className={styles.valueTitle}>Global<br />Sovereignty</h3>
                  <p className={styles.valueDesc}>
                    We respect the privacy of your data with strict
                    international compliance, ensuring you remain in
                    absolute control, no matter where your business takes you.
                  </p>
                </div>

              </div>
            </div>
          </section>

          {/* SECTION 3: Our Promise */}
          <section className={styles.promiseSection}>
            <h2 className={styles.promiseTitle}>
              <span className={styles.highlightRed}>Our</span> Promise
            </h2>
            <p className={styles.promiseText}>
              We are more than just a digital signature platform.<br />
              We are your partner in building a more secure,<br />
              efficient, and trustworthy digital world.
            </p>
          </section>


        </main>

        <Footer />
      </div>
    </>
  );
};

export default AboutUs;