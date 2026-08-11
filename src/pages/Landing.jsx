import React, { useState } from 'react'
import styles from '../pages/css/Landing.module.css'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'


// 1. IMPORT THE IMAGE HERE
import benefitsDashboard from '../assets/benefits-dashboard.png'


const Landing = () => {

const [activeIndex, setActiveIndex] = useState(null)

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

const faqData = [
  {
    question: "How do I use Nexgn to execute a document?",
    answer:
      "Using Nexgn is frictionless and requires zero technical expertise from your signers. Simply upload your PDF or contract into our encrypted zero-trust vault, assign signers, define the workflow, and place signature fields using our drag-and-drop editor. Once dispatched, recipients receive a secure email link to sign instantly on any device without creating an account. After completion, all parties automatically receive the finalized document along with a cryptographically sealed, legally binding audit certificate."
  },
  {
    question: "Are Nexgn digital signatures legally binding internationally?",
    answer:
      "Yes. Nexgn complies with major global electronic signature frameworks. Our cryptographic signatures are legally binding under the U.S. ESIGN Act and UETA. In India, Section 5 of the Information Technology Act, 2000 recognizes electronic signatures as legally equivalent to handwritten signatures, while Section 10A validates electronically formed contracts. Nexgn also aligns with the European Union's eIDAS regulation, ensuring executed agreements are recognized across major international jurisdictions."
  },
  {
    question: "How does Nexgn protect my sensitive corporate data?",
    answer:
      "Nexgn operates on a zero-trust security architecture. Every document is protected using military-grade AES-256 encryption both at rest and in transit. Each completed agreement is secured with an immutable cryptographic audit trail containing timestamps, IP addresses, and signer activity, ensuring complete document integrity, traceability, and compliance."
  },
  {
    question: "Can I control where my enterprise data is stored?",
    answer:
      "Absolutely. Enterprise customers can choose where their encrypted documents are stored using either India-based or US-based secure server regions. This flexible data residency model helps organizations comply with international privacy regulations, the Digital Personal Data Protection (DPDP) Act, and corporate data sovereignty requirements."
  },
  {
    question: "Can I orchestrate workflows with multiple signers and approvals?",
    answer:
      "Yes. Nexgn supports advanced enterprise workflow automation with sequential signing, parallel approvals, and multi-level approval routing. Documents can be securely routed between legal teams, managers, partners, and clients within a single encrypted workflow, providing complete control over complex business processes."
  },
  {
    question: "How does the pricing structure work? Do I need a credit card to start?",
    answer:
      "No credit card is required to get started. Nexgn offers a free Starter plan with up to 9 signatures per month secured by AES-256 encryption. Professional plans support up to 99 signatures monthly with multi-signer workflows, while Business and Enterprise plans provide unlimited signatures, API access, advanced workflow automation, dedicated support, and configurable data residency options."
  }
];

  return (
    <>
    <Helmet>
        <title>Nexgn | The Next Generation of Document Signatures</title>
        <meta name="description" content="Replace manual paperwork with borderless, lightning-fast workflows. Nexgn delivers military-grade AES-256 encryption and multi-signer capabilities." />
        <meta name="keywords" content="digital signature, e-signature, document workflow, AES-256, secure signing, India" />
        <link rel="canonical" href="https://nexgn.cloud" />
      </Helmet>

    <div className={styles.landing}>
  <video
    className={styles.bgVideo}
    autoPlay
    loop
    muted
    playsInline
    src="/hero-bg-ascii.mp4" 
  />

  <div className={styles.overlay}></div>
      {/* <nav className={styles.navbar}>
        <div className={styles.logo}>
          <svg width="145" height="36" viewBox="0 0 145 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M38.6523 0C42.489 0.000225655 45.5996 3.11055 45.5996 6.94727V38.6523C45.5996 38.7397 45.595 38.8265 45.5918 38.9131L34.1758 27.7461C32.8045 26.4047 30.5929 26.4164 29.2363 27.7725L26.6494 30.3604C25.2931 31.7169 25.3054 33.9037 26.6768 35.2451L37.2617 45.5996H7.50293L36.6445 17.0938C38.0155 15.7522 38.0272 13.5644 36.6709 12.208L34.084 9.62109C32.7276 8.2648 30.5159 8.25267 29.1445 9.59375L0 38.1035V8.29199L11.3721 19.416C12.7434 20.7574 14.955 20.7461 16.3115 19.3896L18.8984 16.8018C20.2543 15.4452 20.2422 13.2583 18.8711 11.917L6.69531 0.00585938C6.77894 0.00287788 6.86291 0 6.94727 0H38.6523Z" fill="#E22A2A"/>
<path d="M68.26 31.336C67.2147 31.336 66.2907 31.1027 65.488 30.636C64.704 30.1507 64.088 29.4973 63.64 28.676C63.192 27.8547 62.968 26.9307 62.968 25.904V16.132C62.968 15.628 62.8467 15.1707 62.604 14.76C62.3613 14.3493 62.0347 14.0227 61.624 13.78C61.2133 13.5373 60.7653 13.416 60.28 13.416C59.7947 13.416 59.3467 13.5373 58.936 13.78C58.544 14.0227 58.2267 14.3493 57.984 14.76C57.76 15.1707 57.648 15.628 57.648 16.132V31H54.96V16.496C54.96 15.4693 55.184 14.5453 55.632 13.724C56.08 12.9027 56.7053 12.2587 57.508 11.792C58.3107 11.3067 59.2347 11.064 60.28 11.064C61.344 11.064 62.2773 11.3067 63.08 11.792C63.8827 12.2587 64.508 12.9027 64.956 13.724C65.404 14.5453 65.628 15.4693 65.628 16.496V26.268C65.628 26.772 65.7493 27.2293 65.992 27.64C66.2347 28.0507 66.552 28.3773 66.944 28.62C67.3547 28.8627 67.7933 28.984 68.26 28.984C68.7267 28.984 69.156 28.8627 69.548 28.62C69.94 28.3773 70.248 28.0507 70.472 27.64C70.7147 27.2293 70.836 26.772 70.836 26.268V11.4H73.524V25.904C73.524 26.9307 73.3 27.8547 72.852 28.676C72.404 29.4973 71.788 30.1507 71.004 30.636C70.22 31.1027 69.3053 31.336 68.26 31.336ZM84.7726 31C83.2046 31 81.8139 30.7107 80.6006 30.132C79.3872 29.5347 78.4352 28.704 77.7446 27.64C77.0726 26.5573 76.7366 25.2973 76.7366 23.86C76.7366 22.4413 77.0259 21.172 77.6046 20.052C78.1832 18.9133 78.9859 18.0173 80.0126 17.364C81.0392 16.7107 82.2339 16.384 83.5966 16.384C85.0712 16.384 86.2939 16.7013 87.2646 17.336C88.2539 17.9707 88.9912 18.8293 89.4766 19.912C89.9619 20.976 90.2046 22.1707 90.2046 23.496C90.2046 23.7013 90.1952 23.916 90.1766 24.14C90.1766 24.364 90.1579 24.56 90.1206 24.728H79.4806C79.5739 25.6053 79.8632 26.352 80.3486 26.968C80.8339 27.5653 81.4499 28.0227 82.1966 28.34C82.9619 28.6387 83.8019 28.788 84.7166 28.788H88.4406V31H84.7726ZM79.4526 22.908H87.6006C87.6006 22.5533 87.5632 22.18 87.4886 21.788C87.4139 21.3773 87.2832 20.9853 87.0966 20.612C86.9099 20.22 86.6579 19.8747 86.3406 19.576C86.0419 19.2587 85.6592 19.0067 85.1926 18.82C84.7446 18.6333 84.2126 18.54 83.5966 18.54C82.9432 18.54 82.3646 18.6707 81.8606 18.932C81.3752 19.1747 80.9552 19.5107 80.6006 19.94C80.2459 20.3507 79.9752 20.8173 79.7886 21.34C79.6019 21.8627 79.4899 22.3853 79.4526 22.908ZM92.6493 31L97.5493 24.42C96.672 24.1213 95.8973 23.692 95.2253 23.132C94.572 22.5533 94.0493 21.8813 93.6573 21.116C93.284 20.332 93.0973 19.5013 93.0973 18.624V16.72H95.7013V18.624C95.7013 19.3147 95.8786 19.9493 96.2333 20.528C96.588 21.1067 97.064 21.5733 97.6613 21.928C98.2586 22.2827 98.9026 22.5067 99.5933 22.6L103.905 16.72H106.761L102.113 23.02C103.084 23.3 103.915 23.7387 104.605 24.336C105.315 24.9147 105.865 25.6147 106.257 26.436C106.649 27.2387 106.845 28.116 106.845 29.068V31H104.269V29.068C104.269 28.3213 104.083 27.6493 103.709 27.052C103.336 26.436 102.832 25.9413 102.197 25.568C101.563 25.176 100.835 24.9427 100.013 24.868L95.5333 31H92.6493ZM112.434 36.684V34.472H119.434C120.125 34.472 120.657 34.2667 121.03 33.856C121.422 33.4453 121.618 32.904 121.618 32.232V28.312H121.562C121.208 28.8533 120.778 29.3387 120.274 29.768C119.77 30.1973 119.192 30.5427 118.538 30.804C117.885 31.0467 117.148 31.168 116.326 31.168C114.982 31.168 113.797 30.86 112.77 30.244C111.744 29.6093 110.941 28.7413 110.362 27.64C109.784 26.52 109.494 25.2413 109.494 23.804C109.494 22.404 109.784 21.144 110.362 20.024C110.941 18.904 111.772 18.0173 112.854 17.364C113.956 16.7107 115.281 16.384 116.83 16.384C118.324 16.384 119.621 16.7013 120.722 17.336C121.824 17.9707 122.673 18.8573 123.27 19.996C123.886 21.116 124.194 22.432 124.194 23.944V32.4C124.194 33.7067 123.812 34.7427 123.046 35.508C122.281 36.292 121.236 36.684 119.91 36.684H112.434ZM116.802 28.956C117.754 28.956 118.585 28.732 119.294 28.284C120.022 27.836 120.582 27.2293 120.974 26.464C121.385 25.68 121.59 24.8027 121.59 23.832C121.59 22.8427 121.394 21.956 121.002 21.172C120.61 20.388 120.06 19.772 119.35 19.324C118.641 18.8573 117.792 18.624 116.802 18.624C115.832 18.624 114.992 18.8573 114.282 19.324C113.592 19.772 113.05 20.3973 112.658 21.2C112.285 21.984 112.098 22.8707 112.098 23.86C112.098 24.7933 112.285 25.652 112.658 26.436C113.05 27.2013 113.592 27.8173 114.282 28.284C114.992 28.732 115.832 28.956 116.802 28.956ZM128.189 31V22.74C128.189 21.4707 128.469 20.36 129.029 19.408C129.607 18.456 130.401 17.7187 131.409 17.196C132.417 16.6547 133.565 16.384 134.853 16.384C136.159 16.384 137.307 16.6547 138.297 17.196C139.305 17.7187 140.089 18.456 140.649 19.408C141.227 20.36 141.517 21.4707 141.517 22.74V31H138.941V22.768C138.941 21.9093 138.745 21.172 138.353 20.556C137.979 19.9213 137.475 19.436 136.841 19.1C136.225 18.764 135.562 18.596 134.853 18.596C134.143 18.596 133.471 18.764 132.837 19.1C132.221 19.436 131.717 19.9213 131.325 20.556C130.951 21.172 130.765 21.9093 130.765 22.768V31H128.189Z" fill="black"/>
</svg>
          
        </div>

        <ul className={styles.navLinks}>
          <li><a href="#home">Home</a></li>
          <li><a href="#product">Product</a></li>
          <li><a href="#pricing">Pricing</a></li>
        </ul>

        <div className={styles.navActions}>
          <a href="#login" className={styles.loginLink}>Log in</a>
          <button className={styles.getStartedBtn}>Get Started</button>
        </div>
      </nav> */}
      <Navbar/>

      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          Designed for Trust.<br />
          Engineered for the World.
        </h1>

        <div className={styles.badge}>
          <span>THE NEXT GENERATION OF DOCUMENT SIGNATURES</span>
          <span className={styles.badgeIcon}>
            <ArrowRight size={14} />
          </span>
        </div>

        <p className={styles.heroSubtext}>
          Replace manual paperwork with borderless, lightning-fast workflows. Nexgn delivers
          military-grade AES-256 encryption and multi-signer capabilities on a highly scalable
          freemium infrastructure.
        </p>

        <button className={styles.ctaBtn}>Start Signing for Free</button>
      </section>
    </div>

    <section className={styles.about}>
        <span>Nexgn is a secure, India-first digital signature platform built to simplify and scale modern document workflows.</span>
      </section>

     <section className={styles.working}>
  <div className={styles.workingLeft}>
    <div className={styles.heading}>
      <span className={styles.headingLine}></span>
      <h2>HOW IT WORKS</h2>
    </div>

    <p className={styles.mainText}>
      Nexgn delivers professional-grade digital signature solutions with
      strong security, compliance, and trust at its core.
    </p>

    <p className={styles.subText}>
      It empowers businesses with scalable, India-first workflows designed
      for efficiency and modern team collaboration.
    </p>
  </div>

  <div className={styles.workingRight}>
    <div className={styles.card}>
      <span className={styles.cardNumber}>01</span>
      <span className={styles.cardLabel}>Upload document</span>
    </div>
    <div className={styles.card}>
      <span className={styles.cardNumber}>02</span>
      <span className={styles.cardLabel}>Add signers</span>
    </div>
    <div className={styles.card}>
      <span className={styles.cardNumber}>03</span>
      <span className={styles.cardLabel}>Sign &amp; Complete</span>
    </div>
  </div>
</section>

<section className={styles.benefits}>
  <div className={styles.benefitsHeader}>
    <h2 className={styles.benefitsTitle}>KEY BENEFITS</h2>
    <p className={styles.benefitsSubtitle}>Unlock speed, security, and simplicity</p>
  </div>
  {/* <div className={styles.benefitRow}>
        <span className={styles.bigNumber}>1</span>
        <div className={styles.benefitText}>
          <h3>
            <span className={styles.red}>Paperless</span> Workflow
          </h3>
          <p>
            enables seamless digital document handling, eliminating manual
            paperwork for faster, eco-friendly processes.
          </p>
        </div>
      </div> */}
  <div className={styles.benefitsContent}>
    <div className={styles.imageCard}>
      <img
        src={benefitsDashboard}
        alt="Secure document folders"
        className={styles.benefitImage}
      />
      <div className={styles.statTop}>
        <span className={styles.statPercent}>90%</span>
        <span className={styles.statLabel}>faster in contract approvals</span>
      </div>
      <div className={styles.statBottom}>
        <span className={styles.statLabel}>reduce signing time</span>
        <span className={styles.statLabel}>from 5 days to</span>
        <span className={styles.statBig}>5 minutes</span>
      </div>
    </div>

    <div className={styles.benefitsList}>
      <div className={styles.benefitRow}>
        <span className={styles.bigNumber}>1</span>
        <div className={styles.benefitText}>
          <h3>
            <span className={styles.red}>Paperless</span> Workflow
          </h3>
          <p>
            enables seamless digital document handling, eliminating manual
            paperwork for faster, eco-friendly processes.
          </p>
        </div>
      </div>

      <div className={styles.benefitRow}>
        <span className={styles.bigNumber}>2</span>
        <div className={styles.benefitText}>
          <h3>
            <span className={styles.red}>Simple</span> and <span className={styles.red}>Fast</span>
          </h3>
          <p>
            Nexgn is built to make digital signing effortless, documents move
            quickly through secure workflows without delays or complexity.
          </p>
        </div>
      </div>

      <div className={styles.benefitRow}>
        <span className={styles.bigNumber}>3</span>
        <div className={styles.benefitText}>
          <h3>
            Built for <span className={styles.red}>Teams</span>
          </h3>
          <p>
            Nexgn is designed to support collaboration, enabling multiple
            users to securely sign, manage, and streamline documents together
            with ease.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className={styles.features}>
  <div className={styles.featuresHeader}>
    <h2 className={styles.featuresTitle}>FEATURES</h2>
    <p className={styles.featuresSubtitle}>Everything you need to go paperless</p>
  </div>

  <div className={styles.featuresGrid}>
    <div className={styles.featuresText}>
      <p>
        Nexgn eliminates manual paperwork, speeds up approvals, ensures
        compliance, and empowers businesses to run faster, smarter, and
        more sustainably in a fully digital workflow.
      </p>
      <p className={styles.boldText}>
        Not just a tool, but a masterpiece of engineering innovation.
      </p>
    </div>
    <div className={styles.cardsGrid}>
    <div className={styles.featureCard}>
      <div className={styles.iconWrap}>
        <div className={styles.single}>
        <svg width="90" height="70" viewBox="0 0 110 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.36753 56.3713C3.6286 55.104 0.597656 52.0217 0.597656 49.4866V3.43929C0.597656 0.904255 3.6286 -0.122876 7.36753 1.1444L102.509 33.3957C106.247 34.6635 109.278 37.7459 109.278 40.2804V86.3278C109.278 88.8628 106.247 89.8904 102.509 88.6231L7.36753 56.3713Z" fill="white" fillOpacity="0.94902" stroke="#FF7178" strokeWidth="1.19626" strokeMiterlimit="10"/>
</svg>
</div>
<div className={styles.single2}>
        <svg width="130" height="80" viewBox="0 0 110 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.36753 56.3713C3.6286 55.104 0.597656 52.0217 0.597656 49.4866V3.43929C0.597656 0.904255 3.6286 -0.122876 7.36753 1.1444L102.509 33.3957C106.247 34.6635 109.278 37.7459 109.278 40.2804V86.3278C109.278 88.8628 106.247 89.8904 102.509 88.6231L7.36753 56.3713Z" fill="white" fillOpacity="0.94902" stroke="#FF7178" strokeWidth="1.19626" strokeMiterlimit="10"/>
</svg>
</div>
<div className={styles.single3}>
        <svg width="180" height="70" viewBox="0 0 110 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.36753 56.3713C3.6286 55.104 0.597656 52.0217 0.597656 49.4866V3.43929C0.597656 0.904255 3.6286 -0.122876 7.36753 1.1444L102.509 33.3957C106.247 34.6635 109.278 37.7459 109.278 40.2804V86.3278C109.278 88.8628 106.247 89.8904 102.509 88.6231L7.36753 56.3713Z" fill="white" fillOpacity="0.94902" stroke="#FF7178" strokeWidth="1.19626" strokeMiterlimit="10"/>
</svg>
</div>


      </div>
      <h3>Document Upload &amp; Management</h3>
      <p className={styles.cardDesc}>
        Users can seamlessly add, organize, and track all their files in
        one secure platform.
      </p>
    </div>

    <div className={styles.featureCard}>
      <div className={styles.iconWrap}>
     <div className={styles.double}>   
<svg width="129" height="99" viewBox="0 0 129 99" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="128" height="98" rx="5.5" fill="white"/>
<rect x="0.5" y="0.5" width="128" height="98" rx="5.5" stroke="#FF7178"/>
<path d="M16 10C18.7614 10 21 12.2386 21 15C21 16.0112 20.6987 16.9516 20.1826 17.7383L18.7773 16.3633C18.3184 15.9144 17.5782 15.9185 17.124 16.3721C16.6699 16.8262 16.6737 17.5587 17.1328 18.0078L18.4893 19.335C17.756 19.7569 16.9067 20 16 20C15.045 20 14.1525 19.7321 13.3936 19.2676L18.7471 14.0312C19.2059 13.5821 19.2108 12.8496 18.7568 12.3955C18.3028 11.9415 17.5617 11.9379 17.1025 12.3867L11.7451 17.627C11.2728 16.8636 11 15.9637 11 15C11 14.0816 11.2476 13.221 11.6797 12.4814L13.2061 13.9746C13.6651 14.4237 14.4052 14.4198 14.8594 13.9658C15.3132 13.5116 15.3096 12.7791 14.8506 12.3301L13.2861 10.7998C14.0677 10.2938 14.9996 10 16 10Z" fill="#FF0915"/>
<path d="M27.36 17.096C27.0613 17.096 26.7973 17.0293 26.568 16.896C26.344 16.7573 26.168 16.5707 26.04 16.336C25.912 16.1013 25.848 15.8373 25.848 15.544V12.752C25.848 12.608 25.8133 12.4773 25.744 12.36C25.6747 12.2427 25.5813 12.1493 25.464 12.08C25.3467 12.0107 25.2187 11.976 25.08 11.976C24.9413 11.976 24.8133 12.0107 24.696 12.08C24.584 12.1493 24.4933 12.2427 24.424 12.36C24.36 12.4773 24.328 12.608 24.328 12.752V17H23.56V12.856C23.56 12.5627 23.624 12.2987 23.752 12.064C23.88 11.8293 24.0587 11.6453 24.288 11.512C24.5173 11.3733 24.7813 11.304 25.08 11.304C25.384 11.304 25.6507 11.3733 25.88 11.512C26.1093 11.6453 26.288 11.8293 26.416 12.064C26.544 12.2987 26.608 12.5627 26.608 12.856V15.648C26.608 15.792 26.6427 15.9227 26.712 16.04C26.7813 16.1573 26.872 16.2507 26.984 16.32C27.1013 16.3893 27.2267 16.424 27.36 16.424C27.4933 16.424 27.616 16.3893 27.728 16.32C27.84 16.2507 27.928 16.1573 27.992 16.04C28.0613 15.9227 28.096 15.792 28.096 15.648V11.4H28.864V15.544C28.864 15.8373 28.8 16.1013 28.672 16.336C28.544 16.5707 28.368 16.7573 28.144 16.896C27.92 17.0293 27.6587 17.096 27.36 17.096ZM32.0779 17C31.6299 17 31.2325 16.9173 30.8859 16.752C30.5392 16.5813 30.2672 16.344 30.0699 16.04C29.8779 15.7307 29.7819 15.3707 29.7819 14.96C29.7819 14.5547 29.8645 14.192 30.0299 13.872C30.1952 13.5467 30.4245 13.2907 30.7179 13.104C31.0112 12.9173 31.3525 12.824 31.7419 12.824C32.1632 12.824 32.5125 12.9147 32.7899 13.096C33.0725 13.2773 33.2832 13.5227 33.4219 13.832C33.5605 14.136 33.6299 14.4773 33.6299 14.856C33.6299 14.9147 33.6272 14.976 33.6219 15.04C33.6219 15.104 33.6165 15.16 33.6059 15.208H30.5659C30.5925 15.4587 30.6752 15.672 30.8139 15.848C30.9525 16.0187 31.1285 16.1493 31.3419 16.24C31.5605 16.3253 31.8005 16.368 32.0619 16.368H33.1259V17H32.0779ZM30.5579 14.688H32.8859C32.8859 14.5867 32.8752 14.48 32.8539 14.368C32.8325 14.2507 32.7952 14.1387 32.7419 14.032C32.6885 13.92 32.6165 13.8213 32.5259 13.736C32.4405 13.6453 32.3312 13.5733 32.1979 13.52C32.0699 13.4667 31.9179 13.44 31.7419 13.44C31.5552 13.44 31.3899 13.4773 31.2459 13.552C31.1072 13.6213 30.9872 13.7173 30.8859 13.84C30.7845 13.9573 30.7072 14.0907 30.6539 14.24C30.6005 14.3893 30.5685 14.5387 30.5579 14.688ZM34.3284 17L35.7284 15.12C35.4777 15.0347 35.2564 14.912 35.0644 14.752C34.8777 14.5867 34.7284 14.3947 34.6164 14.176C34.5097 13.952 34.4564 13.7147 34.4564 13.464V12.92H35.2004V13.464C35.2004 13.6613 35.251 13.8427 35.3524 14.008C35.4537 14.1733 35.5897 14.3067 35.7604 14.408C35.931 14.5093 36.115 14.5733 36.3124 14.6L37.5444 12.92H38.3604L37.0324 14.72C37.3097 14.8 37.547 14.9253 37.7444 15.096C37.947 15.2613 38.1044 15.4613 38.2164 15.696C38.3284 15.9253 38.3844 16.176 38.3844 16.448V17H37.6484V16.448C37.6484 16.2347 37.595 16.0427 37.4884 15.872C37.3817 15.696 37.2377 15.5547 37.0564 15.448C36.875 15.336 36.667 15.2693 36.4324 15.248L35.1524 17H34.3284ZM39.9813 18.624V17.992H41.9813C42.1786 17.992 42.3306 17.9333 42.4373 17.816C42.5493 17.6987 42.6053 17.544 42.6053 17.352V16.232H42.5893C42.4879 16.3867 42.3653 16.5253 42.2213 16.648C42.0773 16.7707 41.9119 16.8693 41.7253 16.944C41.5386 17.0133 41.3279 17.048 41.0933 17.048C40.7093 17.048 40.3706 16.96 40.0773 16.784C39.7839 16.6027 39.5546 16.3547 39.3893 16.04C39.2239 15.72 39.1413 15.3547 39.1413 14.944C39.1413 14.544 39.2239 14.184 39.3893 13.864C39.5546 13.544 39.7919 13.2907 40.1013 13.104C40.4159 12.9173 40.7946 12.824 41.2373 12.824C41.6639 12.824 42.0346 12.9147 42.3493 13.096C42.6639 13.2773 42.9066 13.5307 43.0773 13.856C43.2533 14.176 43.3413 14.552 43.3413 14.984V17.4C43.3413 17.7733 43.2319 18.0693 43.0133 18.288C42.7946 18.512 42.4959 18.624 42.1173 18.624H39.9813ZM41.2293 16.416C41.5013 16.416 41.7386 16.352 41.9413 16.224C42.1493 16.096 42.3093 15.9227 42.4213 15.704C42.5386 15.48 42.5973 15.2293 42.5973 14.952C42.5973 14.6693 42.5413 14.416 42.4293 14.192C42.3173 13.968 42.1599 13.792 41.9573 13.664C41.7546 13.5307 41.5119 13.464 41.2293 13.464C40.9519 13.464 40.7119 13.5307 40.5093 13.664C40.3119 13.792 40.1573 13.9707 40.0453 14.2C39.9386 14.424 39.8853 14.6773 39.8853 14.96C39.8853 15.2267 39.9386 15.472 40.0453 15.696C40.1573 15.9147 40.3119 16.0907 40.5093 16.224C40.7119 16.352 40.9519 16.416 41.2293 16.416ZM44.4824 17V14.64C44.4824 14.2773 44.5624 13.96 44.7224 13.688C44.8878 13.416 45.1144 13.2053 45.4024 13.056C45.6904 12.9013 46.0184 12.824 46.3864 12.824C46.7598 12.824 47.0878 12.9013 47.3704 13.056C47.6584 13.2053 47.8824 13.416 48.0424 13.688C48.2078 13.96 48.2904 14.2773 48.2904 14.64V17H47.5544V14.648C47.5544 14.4027 47.4984 14.192 47.3864 14.016C47.2798 13.8347 47.1358 13.696 46.9544 13.6C46.7784 13.504 46.5891 13.456 46.3864 13.456C46.1838 13.456 45.9918 13.504 45.8104 13.6C45.6344 13.696 45.4904 13.8347 45.3784 14.016C45.2718 14.192 45.2184 14.4027 45.2184 14.648V17H44.4824Z" fill="#FF0915"/>
<rect x="10.5" y="29.5" width="30" height="60" rx="5.5" fill="white"/>
<rect x="10.5" y="29.5" width="30" height="60" rx="5.5" stroke="#FF7178"/>
<rect x="120.5" y="11.5" width="9" height="67" rx="4.5" transform="rotate(90 120.5 11.5)" fill="white"/>
<rect x="120.5" y="11.5" width="9" height="67" rx="4.5" transform="rotate(90 120.5 11.5)" stroke="#FF7178"/>
<rect x="48.5" y="29.5" width="72" height="60" rx="5.5" fill="white"/>
<rect x="48.5" y="29.5" width="72" height="60" rx="5.5" stroke="#FF7178"/>
</svg>
</div>

 <div className={styles.double1}>   
<svg width="129" height="99" viewBox="0 0 129 99" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="128" height="98" rx="5.5" fill="white"/>
<rect x="0.5" y="0.5" width="128" height="98" rx="5.5" stroke="#FF7178"/>
<path d="M16 10C18.7614 10 21 12.2386 21 15C21 16.0112 20.6987 16.9516 20.1826 17.7383L18.7773 16.3633C18.3184 15.9144 17.5782 15.9185 17.124 16.3721C16.6699 16.8262 16.6737 17.5587 17.1328 18.0078L18.4893 19.335C17.756 19.7569 16.9067 20 16 20C15.045 20 14.1525 19.7321 13.3936 19.2676L18.7471 14.0312C19.2059 13.5821 19.2108 12.8496 18.7568 12.3955C18.3028 11.9415 17.5617 11.9379 17.1025 12.3867L11.7451 17.627C11.2728 16.8636 11 15.9637 11 15C11 14.0816 11.2476 13.221 11.6797 12.4814L13.2061 13.9746C13.6651 14.4237 14.4052 14.4198 14.8594 13.9658C15.3132 13.5116 15.3096 12.7791 14.8506 12.3301L13.2861 10.7998C14.0677 10.2938 14.9996 10 16 10Z" fill="#FF0915"/>
<path d="M27.36 17.096C27.0613 17.096 26.7973 17.0293 26.568 16.896C26.344 16.7573 26.168 16.5707 26.04 16.336C25.912 16.1013 25.848 15.8373 25.848 15.544V12.752C25.848 12.608 25.8133 12.4773 25.744 12.36C25.6747 12.2427 25.5813 12.1493 25.464 12.08C25.3467 12.0107 25.2187 11.976 25.08 11.976C24.9413 11.976 24.8133 12.0107 24.696 12.08C24.584 12.1493 24.4933 12.2427 24.424 12.36C24.36 12.4773 24.328 12.608 24.328 12.752V17H23.56V12.856C23.56 12.5627 23.624 12.2987 23.752 12.064C23.88 11.8293 24.0587 11.6453 24.288 11.512C24.5173 11.3733 24.7813 11.304 25.08 11.304C25.384 11.304 25.6507 11.3733 25.88 11.512C26.1093 11.6453 26.288 11.8293 26.416 12.064C26.544 12.2987 26.608 12.5627 26.608 12.856V15.648C26.608 15.792 26.6427 15.9227 26.712 16.04C26.7813 16.1573 26.872 16.2507 26.984 16.32C27.1013 16.3893 27.2267 16.424 27.36 16.424C27.4933 16.424 27.616 16.3893 27.728 16.32C27.84 16.2507 27.928 16.1573 27.992 16.04C28.0613 15.9227 28.096 15.792 28.096 15.648V11.4H28.864V15.544C28.864 15.8373 28.8 16.1013 28.672 16.336C28.544 16.5707 28.368 16.7573 28.144 16.896C27.92 17.0293 27.6587 17.096 27.36 17.096ZM32.0779 17C31.6299 17 31.2325 16.9173 30.8859 16.752C30.5392 16.5813 30.2672 16.344 30.0699 16.04C29.8779 15.7307 29.7819 15.3707 29.7819 14.96C29.7819 14.5547 29.8645 14.192 30.0299 13.872C30.1952 13.5467 30.4245 13.2907 30.7179 13.104C31.0112 12.9173 31.3525 12.824 31.7419 12.824C32.1632 12.824 32.5125 12.9147 32.7899 13.096C33.0725 13.2773 33.2832 13.5227 33.4219 13.832C33.5605 14.136 33.6299 14.4773 33.6299 14.856C33.6299 14.9147 33.6272 14.976 33.6219 15.04C33.6219 15.104 33.6165 15.16 33.6059 15.208H30.5659C30.5925 15.4587 30.6752 15.672 30.8139 15.848C30.9525 16.0187 31.1285 16.1493 31.3419 16.24C31.5605 16.3253 31.8005 16.368 32.0619 16.368H33.1259V17H32.0779ZM30.5579 14.688H32.8859C32.8859 14.5867 32.8752 14.48 32.8539 14.368C32.8325 14.2507 32.7952 14.1387 32.7419 14.032C32.6885 13.92 32.6165 13.8213 32.5259 13.736C32.4405 13.6453 32.3312 13.5733 32.1979 13.52C32.0699 13.4667 31.9179 13.44 31.7419 13.44C31.5552 13.44 31.3899 13.4773 31.2459 13.552C31.1072 13.6213 30.9872 13.7173 30.8859 13.84C30.7845 13.9573 30.7072 14.0907 30.6539 14.24C30.6005 14.3893 30.5685 14.5387 30.5579 14.688ZM34.3284 17L35.7284 15.12C35.4777 15.0347 35.2564 14.912 35.0644 14.752C34.8777 14.5867 34.7284 14.3947 34.6164 14.176C34.5097 13.952 34.4564 13.7147 34.4564 13.464V12.92H35.2004V13.464C35.2004 13.6613 35.251 13.8427 35.3524 14.008C35.4537 14.1733 35.5897 14.3067 35.7604 14.408C35.931 14.5093 36.115 14.5733 36.3124 14.6L37.5444 12.92H38.3604L37.0324 14.72C37.3097 14.8 37.547 14.9253 37.7444 15.096C37.947 15.2613 38.1044 15.4613 38.2164 15.696C38.3284 15.9253 38.3844 16.176 38.3844 16.448V17H37.6484V16.448C37.6484 16.2347 37.595 16.0427 37.4884 15.872C37.3817 15.696 37.2377 15.5547 37.0564 15.448C36.875 15.336 36.667 15.2693 36.4324 15.248L35.1524 17H34.3284ZM39.9813 18.624V17.992H41.9813C42.1786 17.992 42.3306 17.9333 42.4373 17.816C42.5493 17.6987 42.6053 17.544 42.6053 17.352V16.232H42.5893C42.4879 16.3867 42.3653 16.5253 42.2213 16.648C42.0773 16.7707 41.9119 16.8693 41.7253 16.944C41.5386 17.0133 41.3279 17.048 41.0933 17.048C40.7093 17.048 40.3706 16.96 40.0773 16.784C39.7839 16.6027 39.5546 16.3547 39.3893 16.04C39.2239 15.72 39.1413 15.3547 39.1413 14.944C39.1413 14.544 39.2239 14.184 39.3893 13.864C39.5546 13.544 39.7919 13.2907 40.1013 13.104C40.4159 12.9173 40.7946 12.824 41.2373 12.824C41.6639 12.824 42.0346 12.9147 42.3493 13.096C42.6639 13.2773 42.9066 13.5307 43.0773 13.856C43.2533 14.176 43.3413 14.552 43.3413 14.984V17.4C43.3413 17.7733 43.2319 18.0693 43.0133 18.288C42.7946 18.512 42.4959 18.624 42.1173 18.624H39.9813ZM41.2293 16.416C41.5013 16.416 41.7386 16.352 41.9413 16.224C42.1493 16.096 42.3093 15.9227 42.4213 15.704C42.5386 15.48 42.5973 15.2293 42.5973 14.952C42.5973 14.6693 42.5413 14.416 42.4293 14.192C42.3173 13.968 42.1599 13.792 41.9573 13.664C41.7546 13.5307 41.5119 13.464 41.2293 13.464C40.9519 13.464 40.7119 13.5307 40.5093 13.664C40.3119 13.792 40.1573 13.9707 40.0453 14.2C39.9386 14.424 39.8853 14.6773 39.8853 14.96C39.8853 15.2267 39.9386 15.472 40.0453 15.696C40.1573 15.9147 40.3119 16.0907 40.5093 16.224C40.7119 16.352 40.9519 16.416 41.2293 16.416ZM44.4824 17V14.64C44.4824 14.2773 44.5624 13.96 44.7224 13.688C44.8878 13.416 45.1144 13.2053 45.4024 13.056C45.6904 12.9013 46.0184 12.824 46.3864 12.824C46.7598 12.824 47.0878 12.9013 47.3704 13.056C47.6584 13.2053 47.8824 13.416 48.0424 13.688C48.2078 13.96 48.2904 14.2773 48.2904 14.64V17H47.5544V14.648C47.5544 14.4027 47.4984 14.192 47.3864 14.016C47.2798 13.8347 47.1358 13.696 46.9544 13.6C46.7784 13.504 46.5891 13.456 46.3864 13.456C46.1838 13.456 45.9918 13.504 45.8104 13.6C45.6344 13.696 45.4904 13.8347 45.3784 14.016C45.2718 14.192 45.2184 14.4027 45.2184 14.648V17H44.4824Z" fill="#FF0915"/>
<rect x="10.5" y="29.5" width="30" height="60" rx="5.5" fill="white"/>
<rect x="10.5" y="29.5" width="30" height="60" rx="5.5" stroke="#FF7178"/>
<rect x="120.5" y="11.5" width="9" height="67" rx="4.5" transform="rotate(90 120.5 11.5)" fill="white"/>
<rect x="120.5" y="11.5" width="9" height="67" rx="4.5" transform="rotate(90 120.5 11.5)" stroke="#FF7178"/>
<rect x="48.5" y="29.5" width="72" height="60" rx="5.5" fill="white"/>
<rect x="48.5" y="29.5" width="72" height="60" rx="5.5" stroke="#FF7178"/>
</svg>
</div>

      </div>
      <h3>Multi-Signer Workflows</h3>
      <p className={styles.cardDesc}>
        Nexgn allow multiple stakeholders to review and sign documents in
        sequence or simultaneously.
      </p>
    </div>

    <div className={styles.featureCard}>
      <div className={styles.iconWrap}>
        <svg width="202" height="62" viewBox="0 0 202 62" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.5 36.8138C1.90808 35.99 12.6245 33.7683 30.8865 34.4465C38.039 34.7121 39.5499 40.4085 40.2647 42.622C41.7659 47.2705 40.2808 53.6974 38.1364 59.518C37.2857 61.8271 35.9921 62.5926 35.4439 59.1726C33.6756 48.1405 40.2163 34.1011 54.4852 22.2019C85.2878 -3.48522 105.646 -0.385587 108.675 2.13975C117.5 9.49788 92.7248 29.8082 95 42.622C98 59.518 118.757 51.4257 129.205 50.5312C139.652 49.6367 161.644 43.3209 175.811 39.6555C189.977 35.99 195.653 35.1662 201.5 34.3175" stroke="#FF7178" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

      </div>
      <h3>Digital Signatures</h3>
      <p className={styles.cardDesc}>
        Nexgn provide legally valid, tamper-proof authentication for
        documents, ensuring security, compliance, and trust.
      </p>
    </div>

    <div className={styles.featureCard}>
      <div className={styles.iconWrap}>
        <div className={styles.three}>
<svg width="58" height="103" viewBox="0 0 58 103" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M39.736 16.9851L11.3453 1.86588C5.35655 -1.32266 0.5 1.26119 0.5 7.6404V65.0061C0.5 71.3853 5.35655 79.1411 11.3453 82.3318L46.6524 101.133C52.6434 104.323 57.5 101.74 57.5 95.3583V45.2788M39.736 16.9851V32.7798C39.736 34.4567 41.0147 36.5002 42.5886 37.3386L57.5 45.2788M39.736 16.9851L57.5 45.2788L39.736 16.9851Z" fill="white"/>
<path d="M57.5 45.2788L39.736 16.9851L11.3453 1.86588C5.35655 -1.32266 0.5 1.26119 0.5 7.6404V65.0061C0.5 71.3853 5.35655 79.1411 11.3453 82.3318L46.6524 101.133C52.6434 104.323 57.5 101.74 57.5 95.3583V45.2788ZM39.736 16.9851V32.7798C39.736 34.4567 41.0147 36.5002 42.5886 37.3386L57.5 45.2788" stroke="#FF7178" strokeLinejoin="round"/>
</svg>
</div>

  <div className={styles.three1}>
<svg width="58" height="103" viewBox="0 0 58 103" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M39.736 16.9851L11.3453 1.86588C5.35655 -1.32266 0.5 1.26119 0.5 7.6404V65.0061C0.5 71.3853 5.35655 79.1411 11.3453 82.3318L46.6524 101.133C52.6434 104.323 57.5 101.74 57.5 95.3583V45.2788M39.736 16.9851V32.7798C39.736 34.4567 41.0147 36.5002 42.5886 37.3386L57.5 45.2788M39.736 16.9851L57.5 45.2788L39.736 16.9851Z" fill="white"/>
<path d="M57.5 45.2788L39.736 16.9851L11.3453 1.86588C5.35655 -1.32266 0.5 1.26119 0.5 7.6404V65.0061C0.5 71.3853 5.35655 79.1411 11.3453 82.3318L46.6524 101.133C52.6434 104.323 57.5 101.74 57.5 95.3583V45.2788ZM39.736 16.9851V32.7798C39.736 34.4567 41.0147 36.5002 42.5886 37.3386L57.5 45.2788" stroke="#FF7178" strokeLinejoin="round"/>
</svg>
</div>


  <div className={styles.three2}>
<svg width="58" height="103" viewBox="0 0 58 103" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M39.736 16.9851L11.3453 1.86588C5.35655 -1.32266 0.5 1.26119 0.5 7.6404V65.0061C0.5 71.3853 5.35655 79.1411 11.3453 82.3318L46.6524 101.133C52.6434 104.323 57.5 101.74 57.5 95.3583V45.2788M39.736 16.9851V32.7798C39.736 34.4567 41.0147 36.5002 42.5886 37.3386L57.5 45.2788M39.736 16.9851L57.5 45.2788L39.736 16.9851Z" fill="white"/>
<path d="M57.5 45.2788L39.736 16.9851L11.3453 1.86588C5.35655 -1.32266 0.5 1.26119 0.5 7.6404V65.0061C0.5 71.3853 5.35655 79.1411 11.3453 82.3318L46.6524 101.133C52.6434 104.323 57.5 101.74 57.5 95.3583V45.2788ZM39.736 16.9851V32.7798C39.736 34.4567 41.0147 36.5002 42.5886 37.3386L57.5 45.2788" stroke="#FF7178" strokeLinejoin="round"/>
</svg>
</div>


      </div>
      <h3>Audit Trail &amp; PDF Download</h3>
      <p className={styles.cardDesc}>
        Nexgn ensures complete transparency and accessibility.
      </p>
    </div>
    </div>
  </div>
</section>

<section className={styles.security}>
  <div className={styles.securityHeader}>
    <h2 className={styles.securityTitle}>TRUST &amp; SECURITY</h2>
    <p className={styles.securitySubtitle}>Your documents are in safe hands</p>
  </div>

  <div className={styles.securityGrid}>
    <div className={styles.leftCol}>
      <h3 className={styles.blockTitle}>Secure Signing</h3>
      <p className={styles.blockText}>
        End-to-end encryption ensures that every document and signature
        exchange on Nexgn is fully protected.
      </p>

      <div className={styles.outlineCard}>
        <p className={styles.outlineText}>
          Timestamped activity logs record every document and user action
          in real time, ensuring complete visibility and accountability.
        </p>
        <h3 className={styles.outlineTitle}>Audit Logs</h3>
      </div>
    </div>

    <div className={styles.redCard}>
      <ul className={styles.redList}>
        <li>End-to-End Encryption</li>
        <li>Tamper-Proof</li>
        <li>Secure Cloud Backups</li>
        <li>Data Integrity</li>
      </ul>

      <div className={styles.verticalLabel}>
        <span>Cyber-Resilience</span>
        <span>Multi-Layer Protection</span> 
      </div>

      <div className={styles.brandMark}>
        
<svg width="485" height="290" viewBox="0 0 345 290" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M131.6 289.597C114.8 289.597 99.7333 285.997 86.4 278.797C73.0667 271.33 62.5333 261.064 54.8 247.997C47.0667 234.93 43.2 220.13 43.2 203.597V81.1969C43.2 76.9302 42.1333 73.0635 40 69.5969C37.8667 66.1302 35.0667 63.3302 31.6 61.1969C28.1333 59.0635 24.2667 57.9969 20 57.9969C15.7333 57.9969 11.8667 59.0635 8.4 61.1969C4.93334 63.3302 2.13334 66.1302 3.57628e-06 69.5969C-1.86666 73.0635 -2.8 76.9302 -2.8 81.1969V284.797H-68.4V85.9969C-68.4 69.1969 -64.6667 54.3969 -57.2 41.5969C-49.4667 28.7969 -38.9333 18.6635 -25.6 11.1969C-12 3.7302 3.2 -0.00312996 20 -0.00312996C37.0667 -0.00312996 52.2667 3.7302 65.6 11.1969C78.9333 18.6635 89.4667 28.7969 97.2 41.5969C104.933 54.3969 108.8 69.1969 108.8 85.9969V208.397C108.8 212.664 109.867 216.664 112 220.397C114.133 223.864 116.8 226.664 120 228.797C123.467 230.664 127.2 231.597 131.2 231.597C135.467 231.597 139.333 230.664 142.8 228.797C146.533 226.664 149.467 223.864 151.6 220.397C153.733 216.664 154.8 212.664 154.8 208.397V4.79686H220V203.597C220 220.13 216.133 234.93 208.4 247.997C200.667 261.064 190.133 271.33 176.8 278.797C163.467 285.997 148.4 289.597 131.6 289.597ZM346.431 284.797C323.231 284.797 302.831 280.53 285.231 271.997C267.631 263.197 253.898 251.197 244.031 235.997C234.431 220.53 229.631 202.664 229.631 182.397C229.631 159.997 234.298 140.797 243.631 124.797C252.965 108.797 265.365 96.5302 280.831 87.9969C296.565 79.1969 313.898 74.7969 332.831 74.7969C354.431 74.7969 372.431 79.3302 386.831 88.3969C401.498 97.4635 412.565 109.864 420.031 125.597C427.498 141.064 431.231 158.797 431.231 178.797C431.231 182.264 430.965 186.397 430.431 191.197C430.165 195.73 429.765 199.33 429.231 201.997H294.831C296.431 208.93 299.498 214.797 304.031 219.597C308.565 224.397 314.298 227.997 321.231 230.397C328.165 232.53 335.898 233.597 344.431 233.597H407.231V284.797H346.431ZM293.231 163.197H371.231C370.698 158.93 369.898 154.797 368.831 150.797C367.765 146.797 366.031 143.33 363.631 140.397C361.498 137.197 358.965 134.53 356.031 132.397C353.098 129.997 349.631 128.13 345.631 126.797C341.898 125.464 337.631 124.797 332.831 124.797C326.698 124.797 321.231 125.864 316.431 127.997C311.631 130.13 307.631 133.064 304.431 136.797C301.231 140.264 298.698 144.397 296.831 149.197C295.231 153.73 294.031 158.397 293.231 163.197Z" fill="#FFAF9A"/>
<mask id="mask0_3344_37577" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="120" y="134" width="137" height="138">
<path d="M250.053 134.797C253.89 134.797 257 137.907 257 141.744V251.739L217.688 213.284C216.317 211.943 214.105 211.955 212.749 213.312L195.13 230.931C193.774 232.287 193.786 234.475 195.157 235.816L231.939 271.797H142.529L235.058 181.283C236.429 179.942 236.441 177.755 235.085 176.398L217.466 158.779C216.109 157.423 213.898 157.41 212.526 158.752L120 249.263V159.702L159.146 197.996C160.517 199.337 162.728 199.325 164.085 197.969L181.705 180.35C183.062 178.993 183.049 176.805 181.678 175.464L140.105 134.797H250.053Z" fill="black"/>
</mask>
<g mask="url(#mask0_3344_37577)">
<path d="M131.6 289.597C114.8 289.597 99.7333 285.997 86.4 278.797C73.0667 271.33 62.5333 261.064 54.8 247.997C47.0667 234.93 43.2 220.13 43.2 203.597V81.1969C43.2 76.9302 42.1333 73.0635 40 69.5969C37.8667 66.1302 35.0667 63.3302 31.6 61.1969C28.1333 59.0635 24.2667 57.9969 20 57.9969C15.7333 57.9969 11.8667 59.0635 8.4 61.1969C4.93334 63.3302 2.13334 66.1302 3.57628e-06 69.5969C-1.86666 73.0635 -2.8 76.9302 -2.8 81.1969V284.797H-68.4V85.9969C-68.4 69.1969 -64.6667 54.3969 -57.2 41.5969C-49.4667 28.7969 -38.9333 18.6635 -25.6 11.1969C-12 3.7302 3.2 -0.00312996 20 -0.00312996C37.0667 -0.00312996 52.2667 3.7302 65.6 11.1969C78.9333 18.6635 89.4667 28.7969 97.2 41.5969C104.933 54.3969 108.8 69.1969 108.8 85.9969V208.397C108.8 212.664 109.867 216.664 112 220.397C114.133 223.864 116.8 226.664 120 228.797C123.467 230.664 127.2 231.597 131.2 231.597C135.467 231.597 139.333 230.664 142.8 228.797C146.533 226.664 149.467 223.864 151.6 220.397C153.733 216.664 154.8 212.664 154.8 208.397V4.79686H220V203.597C220 220.13 216.133 234.93 208.4 247.997C200.667 261.064 190.133 271.33 176.8 278.797C163.467 285.997 148.4 289.597 131.6 289.597ZM346.431 284.797C323.231 284.797 302.831 280.53 285.231 271.997C267.631 263.197 253.898 251.197 244.031 235.997C234.431 220.53 229.631 202.664 229.631 182.397C229.631 159.997 234.298 140.797 243.631 124.797C252.965 108.797 265.365 96.5302 280.831 87.9969C296.565 79.1969 313.898 74.7969 332.831 74.7969C354.431 74.7969 372.431 79.3302 386.831 88.3969C401.498 97.4635 412.565 109.864 420.031 125.597C427.498 141.064 431.231 158.797 431.231 178.797C431.231 182.264 430.965 186.397 430.431 191.197C430.165 195.73 429.765 199.33 429.231 201.997H294.831C296.431 208.93 299.498 214.797 304.031 219.597C308.565 224.397 314.298 227.997 321.231 230.397C328.165 232.53 335.898 233.597 344.431 233.597H407.231V284.797H346.431ZM293.231 163.197H371.231C370.698 158.93 369.898 154.797 368.831 150.797C367.765 146.797 366.031 143.33 363.631 140.397C361.498 137.197 358.965 134.53 356.031 132.397C353.098 129.997 349.631 128.13 345.631 126.797C341.898 125.464 337.631 124.797 332.831 124.797C326.698 124.797 321.231 125.864 316.431 127.997C311.631 130.13 307.631 133.064 304.431 136.797C301.231 140.264 298.698 144.397 296.831 149.197C295.231 153.73 294.031 158.397 293.231 163.197Z" fill="black"/>
</g>
</svg>
      </div>

      <span className={styles.redFooter}>THE NEXT GENERATION OF DOCUMENT SIGNATURES</span>
    </div>

    <div className={styles.rightCol}>
      <div className={styles.infraCard}>
        <h3 className={styles.infraTitle}>Reliable Infrastructure</h3>
        <p className={styles.infraText}>
          Nexgn stays reliable and accessible, minimizing downtime for
          uninterrupted workflows. It safeguards all documents with
          redundant storage.
        </p>
      </div>

      <div className={styles.darkCard}>
        <div className={styles.darkCardTop}>
          <p><span className={styles.bold}>DPDP</span> CERTIFIED</p>
          <p><span className={styles.bold}>AES 256</span> ENCRYPTED</p>
        </div>

        <div className={styles.darkIconWrap}>
          
<svg width="104" height="104" viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M97.0518 0C100.889 0 103.999 3.11044 103.999 6.94727V88.7666L74.7588 60.1631C73.3875 58.8217 71.1759 58.8333 69.8193 60.1895L57.627 72.3818C56.2706 73.7384 56.283 75.9261 57.6543 77.2676L84.9824 104.001H17.1055L86.7451 35.8779C88.1164 34.5364 88.1289 32.3487 86.7725 30.9922L74.5801 18.7998C73.2235 17.4437 71.0119 17.4321 69.6406 18.7734L0 86.8975V18.9082L29.1152 47.3896C30.4866 48.7311 32.6982 48.7187 34.0547 47.3623L46.2471 35.1699C47.6032 33.8133 47.591 31.6265 46.2197 30.2852L15.2607 0H97.0518Z" fill="#D8D8D8" fillOpacity="0.3"/>
</svg>

        </div>

        <div className={styles.darkCardBottom}>
          <p><span className={styles.bold}>GDPR</span> COMPLIANT</p>
          <p><span className={styles.bold}>SOC 2</span> TYPE II</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className={styles.pricing}>
  <div className={styles.marqueeWrap}>
    <div className={styles.marqueeTrack}>
      {Array.from({ length: 8 }).map((_, i) => (
        <div className={styles.marqueeItem} key={i}>
          <span>Pricing</span>
          
<svg width="162" height="162" viewBox="0 0 162 162" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M81 0C125.735 0 162 36.2649 162 81C162 97.9279 156.805 113.641 147.926 126.638L122.16 101.434C118.212 97.5718 111.846 97.6066 107.94 101.512L94.1045 115.348C90.1995 119.253 90.2339 125.55 94.1816 129.412L118.241 152.947C107.091 158.73 94.4278 162 81 162C67.1906 162 54.189 158.543 42.8115 152.449L135.555 61.7275C139.502 57.8655 139.537 51.5692 135.632 47.6641L121.796 33.8281C117.891 29.9231 111.524 29.8881 107.576 33.75L13.4941 125.78C4.96811 112.953 0 97.5568 0 81C0 67.3762 3.36379 54.5381 9.30566 43.2705L41.3086 74.5752C45.2565 78.437 51.6231 78.4011 55.5283 74.4961L69.3652 60.6602C73.2702 56.7549 73.235 50.4586 69.2871 46.5967L35.7607 13.8018C48.679 5.08783 64.2452 0 81 0Z" fill="#FF0915" fillOpacity="0.4"/>
</svg>
        </div>
      ))}
    </div>
  </div>

  <div className={styles.pricingGrid}>
    {/* FREE */}
    <div className={styles.pricingCard}>
      <div className={styles.cardHeader} style={{ backgroundColor: "#FFCACA" }}>
        <h3 className={styles.price}>$0<span>/month</span></h3>
        <span className={styles.planTag}>Free</span>
      </div>
      <p className={styles.cardDesc1}>Perfect for individuals and early exploration.</p>
      <button className={styles.chooseBtn}>Choose Free</button>
      <ul className={styles.featureList}>
        <li><span className={styles.check}>✓</span>25 documents per month</li>
        <li><span className={styles.check}>✓</span>Basic signing workflow</li>
        <li><span className={styles.check}>✓</span>Limited templates</li>
        <li><span className={styles.check}>✓</span>No credit card required</li>
      </ul>
    </div>

    {/* STARTER - POPULAR */}
    <div className={`${styles.pricingCard} ${styles.popularCard}`}>
      <div className={styles.cardHeader} style={{ background: "linear-gradient(116.65deg, #FFFFFF 7.01%, #FF0915 32.03%, #100000 66.82%),linear-gradient(225.1deg, rgba(249, 0, 0, 0.2) 35.5%, rgba(0, 0, 0, 0.2) 98.07%)"
}}>
        <h3 className={styles.price} style={{ color: "#fff" }}>$9<span>/month</span></h3>
        <div className={styles.tagRow}>
          <span className={styles.planTag}>Starter</span>
          <span className={styles.popularBadge}>Popular</span>
        </div>
      </div>
      <p className={styles.cardDesc1}>Built for freelancers and small businesses.</p>
      <button className={styles.chooseBtn}>Choose Starter</button>
      <ul className={styles.featureList}>
        <li><span className={styles.check}>✓</span>100 documents per month</li>
        <li><span className={styles.check}>✓</span>Professional signing tools</li>
        <li><span className={styles.check}>✓</span>Templates and reminders</li>
        <li><span className={styles.check}>✓</span>SETU integration</li>
        <li><span className={styles.check}>✓</span>Basic automation support</li>
      </ul>
    </div>

    {/* BUSINESS */}
    <div className={styles.pricingCard}>
      <div className={styles.cardHeader} style={{ backgroundColor: "#FE7474" }}>
        <h3 className={styles.price} style={{ color: "#fff" }}>$19<span>/month</span></h3>
        <span className={styles.planTag}>Business</span>
      </div>
      <p className={styles.cardDesc1}>Designed for growing teams.</p>
      <button className={styles.chooseBtn}>Choose Business</button>
      <ul className={styles.featureList}>
        <li><span className={styles.check}>✓</span>Unlimited documents</li>
        <li><span className={styles.check}>✓</span>Bulk sending</li>
        <li><span className={styles.check}>✓</span>Team collaboration</li>
        <li><span className={styles.check}>✓</span>API access</li>
        <li><span className={styles.check}>✓</span>Aadhaar verification credits</li>
        <li><span className={styles.check}>✓</span>Custom branding</li>
        <li><span className={styles.check}>✓</span>Priority support</li>
      </ul>
    </div>

    {/* ENTERPRISE */}
    <div className={styles.pricingCard}>
      <div className={styles.cardHeader} style={{ backgroundColor: "#FF1F1F" }}>
        <h3 className={styles.price} style={{ color: "#fff" }}>Custom</h3>
        <span className={styles.planTag}>Enterprise</span>
      </div>
      <p className={styles.cardDesc1}>Tailored according to you.</p>
      <button className={styles.chooseBtn}>Choose Enterprise</button>
      <ul className={styles.featureList}>
        <li><span className={styles.check}>✓</span>Everything in Business</li>
        <li><span className={styles.check}>✓</span>Unlimited users</li>
        <li><span className={styles.check}>✓</span>Full API ecosystem</li>
        <li><span className={styles.check}>✓</span>Dedicated onboarding</li>
        <li><span className={styles.check}>✓</span>SLA and enterprise support</li>
        <li><span className={styles.check}>✓</span>Advanced security and compliance</li>
        <li><span className={styles.check}>✓</span>Custom infrastructure support</li>
      </ul>
    </div>
  </div>
</section>

 <section className={styles.faq}>
      <div className={styles.faqHeader}>
        <h2 className={styles.faqTitle}>FREQUENTLY ANNOYING QUESTIONS</h2>
        <p className={styles.faqSubtitle}>Because Clicking Here Is Faster Than Emailing Us</p>
      </div>

      <div className={styles.faqGrid}>
        <div className={styles.faqBanner}>
          {/* <h1 className={styles.bannerBrand}>
            
<svg width="722" height="111" viewBox="0 0 641 141" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M104.35 166.518C95.7633 166.518 88.1733 164.601 81.58 160.768C75.14 156.781 70.08 151.414 66.4 144.668C62.72 137.921 60.88 130.331 60.88 121.898V41.6278C60.88 37.4878 59.8833 33.7311 57.89 30.3578C55.8967 26.9845 53.2133 24.3011 49.84 22.3078C46.4667 20.3145 42.7867 19.3178 38.8 19.3178C34.8133 19.3178 31.1333 20.3145 27.76 22.3078C24.54 24.3011 21.9333 26.9845 19.94 30.3578C18.1 33.7311 17.18 37.4878 17.18 41.6278V163.758H-4.9V44.6178C-4.9 36.1845 -3.06 28.5945 0.620001 21.8478C4.3 15.1011 9.43667 9.81114 16.03 5.9778C22.6233 1.99114 30.2133 -0.00219035 38.8 -0.00219035C47.54 -0.00219035 55.2067 1.99114 61.8 5.9778C68.3933 9.81114 73.53 15.1011 77.21 21.8478C80.89 28.5945 82.73 36.1845 82.73 44.6178V124.888C82.73 129.028 83.7267 132.784 85.72 136.158C87.7133 139.531 90.32 142.214 93.54 144.208C96.9133 146.201 100.517 147.198 104.35 147.198C108.183 147.198 111.71 146.201 114.93 144.208C118.15 142.214 120.68 139.531 122.52 136.158C124.513 132.784 125.51 129.028 125.51 124.888V2.7578H147.59V121.898C147.59 130.331 145.75 137.921 142.07 144.668C138.39 151.414 133.33 156.781 126.89 160.768C120.45 164.601 112.937 166.518 104.35 166.518ZM224.989 163.758C212.109 163.758 200.686 161.381 190.719 156.628C180.752 151.721 172.932 144.898 167.259 136.158C161.739 127.264 158.979 116.914 158.979 105.108C158.979 93.4545 161.356 83.0278 166.109 73.8278C170.862 64.4745 177.456 57.1145 185.889 51.7478C194.322 46.3811 204.136 43.6978 215.329 43.6978C227.442 43.6978 237.486 46.3045 245.459 51.5178C253.586 56.7311 259.642 63.7845 263.629 72.6778C267.616 81.4178 269.609 91.2311 269.609 102.118C269.609 103.804 269.532 105.568 269.379 107.408C269.379 109.248 269.226 110.858 268.919 112.238H181.519C182.286 119.444 184.662 125.578 188.649 130.638C192.636 135.544 197.696 139.301 203.829 141.908C210.116 144.361 217.016 145.588 224.529 145.588H255.119V163.758H224.989ZM181.289 97.2878H248.219C248.219 94.3745 247.912 91.3078 247.299 88.0878C246.686 84.7145 245.612 81.4945 244.079 78.4278C242.546 75.2078 240.476 72.3711 237.869 69.9178C235.416 67.3111 232.272 65.2411 228.439 63.7078C224.759 62.1745 220.389 61.4078 215.329 61.4078C209.962 61.4078 205.209 62.4811 201.069 64.6278C197.082 66.6211 193.632 69.3811 190.719 72.9078C187.806 76.2811 185.582 80.1145 184.049 84.4078C182.516 88.7011 181.596 92.9945 181.289 97.2878ZM274.691 163.758L314.941 109.708C307.734 107.254 301.371 103.728 295.851 99.1278C290.484 94.3745 286.191 88.8545 282.971 82.5678C279.904 76.1278 278.371 69.3045 278.371 62.0978V46.4578H299.761V62.0978C299.761 67.7711 301.217 72.9845 304.131 77.7378C307.044 82.4911 310.954 86.3245 315.861 89.2378C320.767 92.1511 326.057 93.9911 331.731 94.7578L367.151 46.4578H390.611L352.431 98.2078C360.404 100.508 367.227 104.111 372.901 109.018C378.727 113.771 383.251 119.521 386.471 126.268C389.691 132.861 391.301 140.068 391.301 147.888V163.758H370.141V147.888C370.141 141.754 368.607 136.234 365.541 131.328C362.474 126.268 358.334 122.204 353.121 119.138C347.907 115.918 341.927 114.001 335.181 113.388L298.381 163.758H274.691ZM422.211 210.448V192.278H479.711C485.384 192.278 489.754 190.591 492.821 187.218C496.041 183.844 497.651 179.398 497.651 173.878V141.678H497.191C494.278 146.124 490.751 150.111 486.611 153.638C482.471 157.164 477.718 160.001 472.351 162.148C466.984 164.141 460.928 165.138 454.181 165.138C443.141 165.138 433.404 162.608 424.971 157.548C416.538 152.334 409.944 145.204 405.191 136.158C400.438 126.958 398.061 116.454 398.061 104.648C398.061 93.1478 400.438 82.7978 405.191 73.5978C409.944 64.3978 416.768 57.1145 425.661 51.7478C434.708 46.3811 445.594 43.6978 458.321 43.6978C470.588 43.6978 481.244 46.3045 490.291 51.5178C499.338 56.7311 506.314 64.0145 511.221 73.3678C516.281 82.5678 518.811 93.3778 518.811 105.798V175.258C518.811 185.991 515.668 194.501 509.381 200.788C503.094 207.228 494.508 210.448 483.621 210.448H422.211ZM458.091 146.968C465.911 146.968 472.734 145.128 478.561 141.448C484.541 137.768 489.141 132.784 492.361 126.498C495.734 120.058 497.421 112.851 497.421 104.878C497.421 96.7511 495.811 89.4678 492.591 83.0278C489.371 76.5878 484.848 71.5278 479.021 67.8478C473.194 64.0145 466.218 62.0978 458.091 62.0978C450.118 62.0978 443.218 64.0145 437.391 67.8478C431.718 71.5278 427.271 76.6645 424.051 83.2578C420.984 89.6978 419.451 96.9811 419.451 105.108C419.451 112.774 420.984 119.828 424.051 126.268C427.271 132.554 431.718 137.614 437.391 141.448C443.218 145.128 450.118 146.968 458.091 146.968ZM536.62 163.758V95.9078C536.62 85.4811 538.92 76.3578 543.52 68.5378C548.273 60.7178 554.79 54.6611 563.07 50.3678C571.35 45.9211 580.78 43.6978 591.36 43.6978C602.093 43.6978 611.523 45.9211 619.65 50.3678C627.93 54.6611 634.37 60.7178 638.97 68.5378C643.723 76.3578 646.1 85.4811 646.1 95.9078V163.758H624.94V96.1378C624.94 89.0845 623.33 83.0278 620.11 77.9678C617.043 72.7545 612.903 68.7678 607.69 66.0078C602.63 63.2478 597.187 61.8678 591.36 61.8678C585.533 61.8678 580.013 63.2478 574.8 66.0078C569.74 68.7678 565.6 72.7545 562.38 77.9678C559.313 83.0278 557.78 89.0845 557.78 96.1378V163.758H536.62Z" fill="#FFAF9A"/>
</svg>
          </h1> */}
        </div>

        <div className={styles.faqList}>
          {faqData.map((item, index) => (
            <div className={styles.faqItem} key={index}>
              <button
                className={styles.faqQuestion}
                onClick={() => toggleFaq(index)}
              >
                <span>{item.question}</span>
                <ChevronDown
                  size={18}
                  className={`${styles.faqIcon} ${activeIndex === index ? styles.faqIconOpen : ""}`}
                />
              </button>

              <div
                className={`${styles.faqAnswer} ${activeIndex === index ? styles.faqAnswerOpen : ""}`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className={styles.log}>
        <video
    className={styles.bgVideo}
    autoPlay
    loop
    muted
    playsInline
    src="/hero-bg-ascii.mp4"
  />
  <div className={styles.overlay1}> 
<svg width="70" height="70" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.0205 0C34.5433 0 39.0205 4.47717 39.0205 10V29.0205C39.0205 30.304 38.7755 31.5298 38.335 32.6572L30.3623 24.8584C28.5708 23.1059 25.6823 23.1214 23.9102 24.8936C22.1383 26.6657 22.1539 29.523 23.9453 31.2754L31.5352 38.7002C30.7316 38.9083 29.8891 39.0205 29.0205 39.0205H10C8.93076 39.0205 7.90149 38.8498 6.93555 38.5391L30.2363 15.7471C32.0279 13.9946 32.0436 11.1374 30.2715 9.36523C28.4993 7.59324 25.6108 7.57761 23.8193 9.33008L0.5 32.1406C0.177637 31.1586 3.84748e-05 30.1104 0 29.0205V10C2.47359e-06 9.11162 0.117554 8.25064 0.334961 7.43066L8.61133 15.5264C10.4027 17.2787 13.2913 17.2629 15.0635 15.4912C16.8356 13.7191 16.8199 10.8619 15.0283 9.10938L6.40039 0.669922C7.51751 0.238592 8.73076 5.31673e-05 10 0H29.0205Z" fill="#FF0915"/>
</svg>
</div>
  
  
    </section>

    <section className={styles.cta}>
  <div className={styles.ctaCard}>
    <div className={styles.ctaContent}>
      <h2 className={styles.ctaTitle}>Start signing documents the simpler way</h2>
      <p className={styles.ctaSubtext}>
        Join modern businesses sending and signing documents securely with Nexgn.
      </p>
      <button className={styles.ctaButton}>Create your free account</button>
    </div>
  </div>
</section>

          <Footer/>
    </>
  )
}

export default Landing