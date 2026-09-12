import React, {useLayoutEffect, useRef, useState } from 'react'
import styles from '../pages/css/Landing.module.css'
// import {  ChevronDown } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../component/Footer'
import FaqSection from '../component/FaqSection'


// 1. IMPORT THE IMAGE HERE
import hero from '../assets/hero-section.png'
import benefitsDashboard from '../assets/benefits-dashboard.png'
import workflowBg from '../assets/workflow-bg.png'; // <--- ADD THIS
import collage1 from '../assets/collageBox-1.png';
import collage2 from '../assets/collageBox-2.png';
import collage3 from '../assets/collageBox-3.png';
import collageWide from '../assets/collageBoxWide.png';
import { useNavigate } from 'react-router'
import useWindowWidth from '../component/usewindowwidth'


const Landing = () => {

// const [activeIndex, setActiveIndex] = useState(null)
const [currentSlide, setCurrentSlide] = useState(0)
const pricingCarouselRef = useRef(null)
const [hoveredCard, setHoveredCard] = useState(null)
const securityRef = useRef(null)
const navigate = useNavigate()
const introRef = useRef(null)
const aboutRef = useRef(null)
const aboutTextRef = useRef(null)
const width = useWindowWidth()
  // const toggleFaq = (index) => {
  //   setActiveIndex(activeIndex === index ? null : index)
  // }

  const pricingCards = [
    {
      price: '$0',
      period: '/month',
      plan: 'Free',
      description: 'Perfect for individuals and early exploration.',
      headerBg: '#FFCACA',
      headerColor: '#000000',
      features: [
        '25 documents per month',
        'Basic signing workflow',
        'Limited templates',
        'No credit card required'
      ]
    },
    {
      price: '$9',
      period: '/month',
      plan: 'Starter',
      isPopular: true,
      description: 'Built for freelancers and small businesses.',
      headerBg: 'linear-gradient(116.65deg, #FFFFFF 7.01%, #FF0915 32.03%, #100000 66.82%),linear-gradient(225.1deg, rgba(249, 0, 0, 0.2) 35.5%, rgba(0, 0, 0, 0.2) 98.07%)',
      headerColor: '#fff',
      features: [
        '100 documents per month',
        'Professional signing tools',
        'Templates and reminders',
        'SETU integration',
        'Basic automation support'
      ]
    },
    {
      price: '$19',
      period: '/month',
      plan: 'Business',
      description: 'Designed for growing teams.',
      headerBg: '#FE7474',
      headerColor: '#fff',
      features: [
        'Unlimited documents',
        'Bulk sending',
        'Team collaboration',
        'API access',
        'Aadhaar verification credits',
        'Custom branding',
        'Priority support'
      ]
    },
    // {
    //   price: 'Custom',
    //   period: '',
    //   plan: 'Enterprise',
    //   description: 'Tailored according to you.',
    //   headerBg: '#FF1F1F',
    //   headerColor: '#fff',
    //   features: [
    //     'Everything in Business',
    //     'Unlimited users',
    //     'Full API ecosystem',
    //     'Dedicated onboarding',
    //     'SLA and enterprise support',
    //     'Advanced security and compliance',
    //     'Custom infrastructure support'
    //   ]
    // }
  ]

const handleDotClick = (index) => {
  const carousel = pricingCarouselRef.current

  if (!carousel) return

  const cards = carousel.querySelectorAll(`.${styles.pricingCard}`)
  const card = cards[index]

  if (!card) return

  setCurrentSlide(index)

  const targetLeft =
    card.offsetLeft -
    (carousel.clientWidth - card.offsetWidth) / 2

  carousel.scrollTo({
    left: targetLeft,
    behavior: 'smooth'
  })
}


const handleScroll = (e) => {
  const carousel = e.currentTarget

  const cards = carousel.querySelectorAll(`.${styles.pricingCard}`)

  if (!cards.length) return

  const carouselCenter =
    carousel.scrollLeft + carousel.clientWidth / 2

  let closestIndex = 0
  let closestDistance = Infinity

  cards.forEach((card, index) => {
    const cardCenter =
      card.offsetLeft + card.offsetWidth / 2

    const distance = Math.abs(
      carouselCenter - cardCenter
    )

    if (distance < closestDistance) {
      closestDistance = distance
      closestIndex = index
    }
  })

  setCurrentSlide(closestIndex)
}



//gsap animations

// useLayoutEffect(() => {
//   gsap.registerPlugin(ScrollTrigger)

//   const ctx = gsap.context(() => {
//     const intro = introRef.current
//     const about = aboutRef.current
//     const aboutText = aboutTextRef.current

//     if (!intro || !about || !aboutText) return

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: intro,
//         start: "top top",
//         end: () => `+=${window.innerHeight}`,
//         scrub: 1,
//         pin: true,
//         pinSpacing: true,
//         anticipatePin: 1,
//         invalidateOnRefresh: true,
//       },
//     })

//     tl.fromTo(
//       about,
//       {
//         y: 0,
//         borderTopLeftRadius: 36,
//         borderTopRightRadius: 36,
//       },
//       {
//         y: () => -window.innerHeight,
//         borderTopLeftRadius: 0,
//         borderTopRightRadius: 0,
//         ease: "none",
//       },
//       0
//     )

//     tl.fromTo(
//       aboutText,
//       {
//         fontSize: width > 1200 ?"48px": width<1200 && width > 900?"48px":width>900 && width > 768 ? "48px":"30px",
//       },
//       {
//        fontSize: width > 1200 ?"90px": width<1200 && width > 900?"85px":width<900 && width > 768 ? "80px":width<768 && width > 640 ? "70px":width<500 && width > 400 ?"55px":width<400 && width > 360?"50px":"45px",
//         ease: "none",
//       },
//       0
//     )
//   }, introRef)

//   return () => ctx.revert()
// }, [])

useLayoutEffect(() => {
  gsap.registerPlugin(ScrollTrigger)

  const ctx = gsap.context(() => {
    const security = securityRef.current
    const svg = security?.querySelector(
      `.${styles.securityBrandSvg}`
    )

    if (!security || !svg) return

    gsap.fromTo(
      svg,
      {
        scale: 0.03,
      },
      {
        scale: 1.2,
        ease: "expo.in",

        scrollTrigger: {
          trigger: security,
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      }
    )
  }, securityRef)

  return () => ctx.revert()
}, [])

  return (
    <>
    <Helmet>
      <title>Nexgn | The Next Generation of Document Signatures</title>
      <meta name="description" content="Replace manual paperwork with borderless, lightning-fast workflows. Nexgn delivers military-grade AES-256 encryption and multi-signer capabilities." />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Nexgn",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web"
        })}
      </script>
    </Helmet>
    {/* <div ref={introRef} className={styles.introScene}> */}
    <div className={styles.landing}>
      <section className={styles.heroNew}>
          {/* Background Grid Lines */}
          <div className={styles.heroLines}>
            <div className={styles.heroLineLeft}></div>
            <div className={styles.heroLineRight}></div>
          </div>

          {/* Floating Labels */}
          <div className={styles.heroLabelsContainer}>
            <div className={`${styles.heroLabel} ${styles.labelTop1}`}>Military-grade<br/>AES-256 encryption</div>
            <div className={`${styles.heroLabel} ${styles.labelTop2}`}>Multi-signer capabilities</div>
            <div className={`${styles.heroLabel} ${styles.labelTop3}`}>Secure<br/>collaboration</div>
            
            <div className={`${styles.heroLabel} ${styles.labelBottom1}`}>Data security</div>
            <div className={`${styles.heroLabel} ${styles.labelBottom2}`}>Digital transformation</div>
            <div className={`${styles.heroLabel} ${styles.labelBottom3}`}>Lightning-fast<br/>workflow</div>
          </div>

          {/* Main Title */}
          <div className={styles.heroTitleContainer}>
            <h1 className={styles.heroTitle}>
              Built on <span className={styles.red}>Trust</span>,<br />
              Engineered for <span className={styles.red}>Tomorrow.</span>
            </h1>
            
            {/* Kept CTA for mobile usability, hidden on desktop to match your visual */}
            <button className={styles.heroCtaBtn} onClick={()=>{navigate("/Login")}}>
              Start Signing for Free
            </button>
          </div>

          {/* Hero Image (Red Visor Silhouette) */}
          <div className={styles.heroImageContainer}>
            {/* Ensure you have this image in your assets or public folder */}
            <img src={hero} alt="Nexgn Interface" className={styles.heroImg} />
          </div>
      </section>
    </div>

    <section ref={aboutRef} className={styles.about}>
        <span ref={aboutTextRef}>Nexgn is a secure, India-first digital signature platform built to simplify and scale modern document workflows.</span>
      </section>

 {/* </div> */}
 
{/* ===================== HOW IT WORKS SECTION ===================== */}
      <section className={styles.howItWorks}>
        <div className={styles.hwContent}>
          
          <div className={styles.hwHeader}>
            <div className={styles.hwTitleRow}>
              <h2 className={styles.hwTitle}>HOW IT WORKS</h2>
              <div className={styles.hwLine}></div>
            </div>
            <p className={styles.hwSubtitle}>
              Nexgn delivers secure, compliant digital signature solutions, empowering businesses with trust.
            </p>
          </div>

          <div className={styles.hwGrid}>
            {/* Labels Row */}
            <div className={styles.hwLabel}>Collaboration-ready<br/>tool</div>
            <div className={styles.hwLabel}>Enterprise-grade<br/>security</div>
            <div className={styles.hwLabel}>Efficiency-driven<br/>design</div>

            {/* Steps Row */}
            <div className={styles.hwStep}>
              <div className={styles.hwStepNum}>01</div>
              <h3 className={styles.hwStepTitle}>Upload document</h3>
              <p className={styles.hwStepDesc}>Drag and drop your PDF or document into Nexgn- ready in seconds</p>
            </div>
            
            <div className={styles.hwStep}>
              <div className={styles.hwStepNum}>02</div>
              <h3 className={styles.hwStepTitle}>Add signers</h3>
              <p className={styles.hwStepDesc}>Invite one or multiple signers by email with custom signing order</p>
            </div>
            
            <div className={styles.hwStep}>
              <div className={styles.hwStepNum}>03</div>
              <h3 className={styles.hwStepTitle}>Sign &amp; Complete</h3>
              <p className={styles.hwStepDesc}>Signers receive a link, sign digitally and the sealed document is delivered instantly</p>
            </div>
          </div>
          
        </div>
        
        {/* Right-aligned Graphic */}
        <div className={styles.hwImageWrapper}>
          <img src={workflowBg} alt="Workflow Stairs" className={styles.hwImage} />
        </div>
      </section>

      

<section className={styles.benefits}>
  <div className={styles.benefitsHeader}>
    <h2 className={styles.benefitsTitle}>KEY BENEFITS</h2>
    <p className={styles.benefitsSubtitle}>Unlock speed, security, and simplicity</p>
  </div>

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



{/* ===================== NEW FEATURES SECTION ===================== */}
      <section className={styles.featuresNew}>
        <div className={styles.featuresContainer}>
          
          {/* Left Column */}
          <div className={styles.featuresLeft}>
            <div className={styles.featuresHeader}>
              <h2 className={styles.featuresTitle}>FEATURES</h2>
              <p className={styles.featuresSubtitle}>Everything you need to go paperless</p>
            </div>
            
            <div className={styles.featuresTextContent}>
              <h3 className={styles.featuresMainText}>A masterpiece of<br />engineering innovation.</h3>
              <p className={styles.featuresSubText}>
                Nexgn replaces paperwork<br />with secure digital workflows,<br />helping businesses run<br />smarter.
              </p>
            </div>

            <div className={styles.featuresFooterText}>
              Paperless. Fast. Compliant. Sustainable.
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.featuresRight}>
            
            {/* Number Grid */}
            <div className={styles.featuresGridNew}>
              {/* Item 1 */}
              <div className={styles.featureItemNew}>
                <div className={styles.featureNumber}>01</div>
                <div className={styles.featureDivider}></div>
                <div className={styles.featureContent}>
                  <h4 className={styles.featureItemTitle}>Document Upload<br />&amp; Management</h4>
                  <p className={styles.featureItemDesc}>Users can seamlessly add, organize, and track all their files in one secure platform.</p>
                </div>
              </div>

              {/* Item 2 */}
              <div className={styles.featureItemNew}>
                <div className={styles.featureNumber}>02</div>
                <div className={styles.featureDivider}></div>
                <div className={styles.featureContent}>
                  <h4 className={styles.featureItemTitle}>Multi-Signer<br />Workflows</h4>
                  <p className={styles.featureItemDesc}>Nexgn allow multiple stakeholders to review and sign documents in sequence or simultaneously.</p>
                </div>
              </div>

              {/* Item 3 */}
              <div className={styles.featureItemNew}>
                <div className={styles.featureNumber}>03</div>
                <div className={styles.featureDivider}></div>
                <div className={styles.featureContent}>
                  <h4 className={styles.featureItemTitle}>Digital Signatures</h4>
                  <p className={styles.featureItemDesc}>Nexgn provide legally valid, tamper-proof authentication for documents, ensuring security, compliance, and trust.</p>
                </div>
              </div>

              {/* Item 4 */}
              <div className={styles.featureItemNew}>
                <div className={styles.featureNumber}>04</div>
                <div className={styles.featureDivider}></div>
                <div className={styles.featureContent}>
                  <h4 className={styles.featureItemTitle}>Audit Trail &amp; PDF<br />Download</h4>
                  <p className={styles.featureItemDesc}>Nexgn ensures complete transparency and accessibility.</p>
                </div>
              </div>
            </div>

            {/* Collage Placeholder Grid */}
            <div className={styles.featureImagesCollage}>
              <div className={styles.collageBox}>
                <img src={collage1} alt="Upload and manage" className={styles.collageImg} />
              </div>
              <div className={styles.collageBox}>
                <img src={collage2} alt="Multi-signer" className={styles.collageImg} />
              </div>
              <div className={styles.collageBox}>
                <img src={collage3} alt="Signatures" className={styles.collageImg} />
              </div>
              <div className={styles.collageBoxWide}>
                <img src={collageWide} alt="Audit trail" className={styles.collageImgWide} />
              </div>
            </div>

          </div>
        </div>
      </section>


<section ref={securityRef} className={styles.security}>
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
        
      <svg   className={styles.securityBrandSvg} width="400" height="290" viewBox="0 0 345 290" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M131.6 289.597C114.8 289.597 99.7333 285.997 86.4 278.797C73.0667 271.33 62.5333 261.064 54.8 247.997C47.0667 234.93 43.2 220.13 43.2 203.597V81.1969C43.2 76.9302 42.1333 73.0635 40 69.5969C37.8667 66.1302 35.0667 63.3302 31.6 61.1969C28.1333 59.0635 24.2667 57.9969 20 57.9969C15.7333 57.9969 11.8667 59.0635 8.4 61.1969C4.93334 63.3302 2.13334 66.1302 3.57628e-06 69.5969C-1.86666 73.0635 -2.8 76.9302 -2.8 81.1969V284.797H-68.4V85.9969C-68.4 69.1969 -64.6667 54.3969 -57.2 41.5969C-49.4667 28.7969 -38.9333 18.6635 -25.6 11.1969C-12 3.7302 3.2 -0.00312996 20 -0.00312996C37.0667 -0.00312996 52.2667 3.7302 65.6 11.1969C78.9333 18.6635 89.4667 28.7969 97.2 41.5969C104.933 54.3969 108.8 69.1969 108.8 85.9969V208.397C108.8 212.664 109.867 216.664 112 220.397C114.133 223.864 116.8 226.664 120 228.797C123.467 230.664 127.2 231.597 131.2 231.597C135.467 231.597 139.333 230.664 142.8 228.797C146.533 226.664 149.467 223.864 151.6 220.397C153.733 216.664 154.8 212.664 154.8 208.397V4.79686H220V203.597C220 220.13 216.133 234.93 208.4 247.997C200.667 261.064 190.133 271.33 176.8 278.797C163.467 285.997 148.4 289.597 131.6 289.597ZM346.431 284.797C323.231 284.797 302.831 280.53 285.231 271.997C267.631 263.197 253.898 251.197 244.031 235.997C234.431 220.53 229.631 202.664 229.631 182.397C229.631 159.997 234.298 140.797 243.631 124.797C252.965 108.797 265.365 96.5302 280.831 87.9969C296.565 79.1969 313.898 74.7969 332.831 74.7969C354.431 74.7969 372.431 79.3302 386.831 88.3969C401.498 97.4635 412.565 109.864 420.031 125.597C427.498 141.064 431.231 158.797 431.231 178.797C431.231 182.264 430.965 186.397 430.431 191.197C430.165 195.73 429.765 199.33 429.231 201.997H294.831C296.431 208.93 299.498 214.797 304.031 219.597C308.565 224.397 314.298 227.997 321.231 230.397C328.165 232.53 335.898 233.597 344.431 233.597H407.231V284.797H346.431ZM293.231 163.197H371.231C370.698 158.93 369.898 154.797 368.831 150.797C367.765 146.797 366.031 143.33 363.631 140.397C361.498 137.197 358.965 134.53 356.031 132.397C353.098 129.997 349.631 128.13 345.631 126.797C341.898 125.464 337.631 124.797 332.831 124.797C326.698 124.797 321.231 125.864 316.431 127.997C311.631 130.13 307.631 133.064 304.431 136.797C301.231 140.264 298.698 144.397 296.831 149.197C295.231 153.73 294.031 158.397 293.231 163.197Z" fill="#E6E6E6"/>
      <mask id="mask0_3344_37577" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="120" y="134" width="137" height="138">
      <path d="M250.053 134.797C253.89 134.797 257 137.907 257 141.744V251.739L217.688 213.284C216.317 211.943 214.105 211.955 212.749 213.312L195.13 230.931C193.774 232.287 193.786 234.475 195.157 235.816L231.939 271.797H142.529L235.058 181.283C236.429 179.942 236.441 177.755 235.085 176.398L217.466 158.779C216.109 157.423 213.898 157.41 212.526 158.752L120 249.263V159.702L159.146 197.996C160.517 199.337 162.728 199.325 164.085 197.969L181.705 180.35C183.062 178.993 183.049 176.805 181.678 175.464L140.105 134.797H250.053Z" fill="black"/>
      </mask>
      <g mask="url(#mask0_3344_37577)">
      <path d="M131.6 289.597C114.8 289.597 99.7333 285.997 86.4 278.797C73.0667 271.33 62.5333 261.064 54.8 247.997C47.0667 234.93 43.2 220.13 43.2 203.597V81.1969C43.2 76.9302 42.1333 73.0635 40 69.5969C37.8667 66.1302 35.0667 63.3302 31.6 61.1969C28.1333 59.0635 24.2667 57.9969 20 57.9969C15.7333 57.9969 11.8667 59.0635 8.4 61.1969C4.93334 63.3302 2.13334 66.1302 3.57628e-06 69.5969C-1.86666 73.0635 -2.8 76.9302 -2.8 81.1969V284.797H-68.4V85.9969C-68.4 69.1969 -64.6667 54.3969 -57.2 41.5969C-49.4667 28.7969 -38.9333 18.6635 -25.6 11.1969C-12 3.7302 3.2 -0.00312996 20 -0.00312996C37.0667 -0.00312996 52.2667 3.7302 65.6 11.1969C78.9333 18.6635 89.4667 28.7969 97.2 41.5969C104.933 54.3969 108.8 69.1969 108.8 85.9969V208.397C108.8 212.664 109.867 216.664 112 220.397C114.133 223.864 116.8 226.664 120 228.797C123.467 230.664 127.2 231.597 131.2 231.597C135.467 231.597 139.333 230.664 142.8 228.797C146.533 226.664 149.467 223.864 151.6 220.397C153.733 216.664 154.8 212.664 154.8 208.397V4.79686H220V203.597C220 220.13 216.133 234.93 208.4 247.997C200.667 261.064 190.133 271.33 176.8 278.797C163.467 285.997 148.4 289.597 131.6 289.597ZM346.431 284.797C323.231 284.797 302.831 280.53 285.231 271.997C267.631 263.197 253.898 251.197 244.031 235.997C234.431 220.53 229.631 202.664 229.631 182.397C229.631 159.997 234.298 140.797 243.631 124.797C252.965 108.797 265.365 96.5302 280.831 87.9969C296.565 79.1969 313.898 74.7969 332.831 74.7969C354.431 74.7969 372.431 79.3302 386.831 88.3969C401.498 97.4635 412.565 109.864 420.031 125.597C427.498 141.064 431.231 158.797 431.231 178.797C431.231 182.264 430.965 186.397 430.431 191.197C430.165 195.73 429.765 199.33 429.231 201.997H294.831C296.431 208.93 299.498 214.797 304.031 219.597C308.565 224.397 314.298 227.997 321.231 230.397C328.165 232.53 335.898 233.597 344.431 233.597H407.231V284.797H346.431ZM293.231 163.197H371.231C370.698 158.93 369.898 154.797 368.831 150.797C367.765 146.797 366.031 143.33 363.631 140.397C361.498 137.197 358.965 134.53 356.031 132.397C353.098 129.997 349.631 128.13 345.631 126.797C341.898 125.464 337.631 124.797 332.831 124.797C326.698 124.797 321.231 125.864 316.431 127.997C311.631 130.13 307.631 133.064 304.431 136.797C301.231 140.264 298.698 144.397 296.831 149.197C295.231 153.73 294.031 158.397 293.231 163.197Z" fill="#FF0915"/>
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
          
<svg className={styles.marqueeIcon} width="162" height="162" viewBox="0 0 162 162" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M81 0C125.735 0 162 36.2649 162 81C162 97.9279 156.805 113.641 147.926 126.638L122.16 101.434C118.212 97.5718 111.846 97.6066 107.94 101.512L94.1045 115.348C90.1995 119.253 90.2339 125.55 94.1816 129.412L118.241 152.947C107.091 158.73 94.4278 162 81 162C67.1906 162 54.189 158.543 42.8115 152.449L135.555 61.7275C139.502 57.8655 139.537 51.5692 135.632 47.6641L121.796 33.8281C117.891 29.9231 111.524 29.8881 107.576 33.75L13.4941 125.78C4.96811 112.953 0 97.5568 0 81C0 67.3762 3.36379 54.5381 9.30566 43.2705L41.3086 74.5752C45.2565 78.437 51.6231 78.4011 55.5283 74.4961L69.3652 60.6602C73.2702 56.7549 73.235 50.4586 69.2871 46.5967L35.7607 13.8018C48.679 5.08783 64.2452 0 81 0Z" fill="#FF0915" fillOpacity="0.4"/>
</svg>
        </div>
      ))}
    </div>
  </div>
<div className={styles.newpricing}>
  <div className={styles.above} >
    <span className={styles.abovesub}>Choose the plan that fits your document workflow and scale your business with Nexgn.</span>
    <h1>Simple Pricing .</h1>
  </div>
  <div className={styles.pricingCarousel} ref={pricingCarouselRef} onScroll={handleScroll}>
    {pricingCards.map((card, index) => (
      <div key={index} className={`${styles.pricingCard} ${card.isPopular ? styles.popularCard : ''}`}>
        <div className={styles.shadow}>
          <div className={styles.cardHeader} style={{ 
            background: card.headerBg,
            backgroundColor: card.headerBg.startsWith('#') ? card.headerBg : undefined
          }}>
            <h3 className={styles.price} style={{ color: card.headerColor }}>
              {card.price}<span>{card.period}</span>
            </h3>
            {card.isPopular ? (
              <div className={styles.tagRow}>
                <span className={styles.planTag}>{card.plan}</span>
                <span className={styles.popularBadge}>Popular</span>
              </div>
            ) : (
              <span className={styles.planTag}>{card.plan}</span>
            )}
          </div>
          <p className={styles.cardDesc1}>{card.description}</p>
          <button className={styles.chooseBtn}>Choose {card.plan}</button>
        </div>
        <ul className={styles.featureList}>
          {card.features.map((feature, idx) => (
            <li key={idx}><span className={styles.check}>✓</span>{feature}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
  <div className={styles.above1} >
    <h1>Powerful Signing.</h1>
    <div className={styles.carouselDots}>
    {pricingCards.map((_, index) => (
      <button
        key={index}
        className={`${styles.dot} ${currentSlide === index ? styles.dotActive : ''}`}
        onClick={() => handleDotClick(index)}
        aria-label={`Go to slide ${index + 1}`}
      />
    ))}
    </div>
    <span className={styles.abovesub} style={{maxWidth:"750px"}}>We’re excited to share that very soon you’ll be able to build your own plan, choose the features you need, and get a custom price tailored just for you.</span>
  </div>
  </div>
</section>


    <FaqSection/>

    {/* <section className={styles.log}>
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
  
  
    </section> */}



    <Footer/>

   

    </>
  )
}

export default Landing