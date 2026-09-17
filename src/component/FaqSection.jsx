import React, { useLayoutEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './css/FaqSection.module.css';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Replace this with your actual image import if needed
import faqImageSrc from '../assets/faqimage.png';
const faqData = [
  {
    question: "How do I use Nexgn to execute a document?",
    answer: "Using Nexgn is frictionless and requires zero technical expertise from your signers. Simply upload your PDF or contract into our encrypted zero-trust vault, assign signers, define the workflow, and place signature fields using our drag-and-drop editor. Once dispatched, recipients receive a secure email link to sign instantly on any device without creating an account. After completion, all parties automatically receive the finalized document along with a cryptographically sealed, legally binding audit certificate."
  },
  {
    question: "Are Nexgn digital signatures legally binding internationally?",
    answer: "Yes. Nexgn complies with major global electronic signature frameworks. Our cryptographic signatures are legally binding under the U.S. ESIGN Act and UETA. In India, Section 5 of the Information Technology Act, 2000 recognizes electronic signatures as legally equivalent to handwritten signatures, while Section 10A validates electronically formed contracts. Nexgn also aligns with the European Union's eIDAS regulation, ensuring executed agreements are recognized across major international jurisdictions."
  },
  {
    question: "How does Nexgn protect my sensitive corporate data?",
    answer: "Nexgn operates on a zero-trust security architecture. Every document is protected using military-grade AES-256 encryption both at rest and in transit. Each completed agreement is secured with an immutable cryptographic audit trail containing timestamps, IP addresses, and signer activity, ensuring complete document integrity, traceability, and compliance."
  },
  {
    question: "Can I control where my enterprise data is stored?",
    answer: "Absolutely. Enterprise customers can choose where their encrypted documents are stored using either India-based or US-based secure server regions. This flexible data residency model helps organizations comply with international privacy regulations, the Digital Personal Data Protection (DPDP) Act, and corporate data sovereignty requirements."
  },
  {
    question: "Can I orchestrate workflows with multiple signers and approvals?",
    answer: "Yes. Nexgn supports advanced enterprise workflow automation with sequential signing, parallel approvals, and multi-level approval routing. Documents can be securely routed between legal teams, managers, partners, and clients within a single encrypted workflow, providing complete control over complex business processes."
  },
  {
    question: "How does the pricing structure work? Do I need a credit card to start?",
    answer: "No credit card is required to get started. Nexgn offers a free Starter plan with up to 9 signatures per month secured by AES-256 encryption. Professional plans support up to 99 signatures monthly with multi-signer workflows, while Business and Enterprise plans provide unlimited signatures, API access, advanced workflow automation, dedicated support, and configurable data residency options."
  }
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqSectionRef = useRef(null);
  const faqHeaderRef = useRef(null);
  const faqTitleRef = useRef(null);
  const faqSubtitleRef = useRef(null);
  const faqImageRef = useRef(null);
  const faqListRef = useRef(null);

   
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {

      const section = faqSectionRef.current;
      const header = faqHeaderRef.current;
      const title = faqTitleRef.current;
      const subtitle = faqSubtitleRef.current;
      const image = faqImageRef.current;
      const list = faqListRef.current;

      if (
        !section ||
        !header ||
        !title ||
        !subtitle ||
        !image ||
        !list
      ) {
        return;
      }

      const faqCards = list.querySelectorAll(
        `.${styles.faqItem}`
      );

      if (!faqCards.length) return;


      
      gsap.set(title, {
        opacity: 0,
        y: 35,
      });

      
      gsap.set(subtitle, {
        opacity: 0,
        y: 25,
      });

    
      gsap.set(image, {
        opacity: 0,
        x: -100,
      });

     
      gsap.set(faqCards, {
        opacity: 0,
        scale: 0.75,
        y: 30,
      });


      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 95%",
          end: "bottom 40%",
          scrub: 1,
        },
      });
      tl.to(title, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
      })
      .to(subtitle, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      })


      .to(image, {
        opacity: 1,
        x: 0,
        duration: 0.9,
        ease: "power3.out",
      })



      .to(faqCards, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.1,
        stagger: 1,
        ease: "back.out(1.4)",
      });

    }, faqSectionRef);

    return () => ctx.revert();

  }, []);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection} ref={faqSectionRef}>
      <div
  className={styles.faqHeader}
  ref={faqHeaderRef}
>
  <h2
    className={styles.faqTitle}
    ref={faqTitleRef}
  >
    Frequently Annoying Questions
  </h2>

  <p
    className={styles.faqSubtitle}
    ref={faqSubtitleRef}
  >
    Because Clicking Here Is Faster Than Emailing Us
  </p>
</div>

      <div className={styles.faqGrid}>
        
        {/* LEFT: Image Container */}
        <div className={styles.faqImageWrapper}  ref={faqImageRef}>
          <img 
            src={faqImageSrc} 
            alt="FAQ Abstract Art" 
            className={styles.faqImage}
          />
        </div>

        {/* RIGHT: FAQ List */}
        <div className={styles.faqList}  ref={faqListRef}>
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;
            
            return (
              <div 
                key={index} 
                className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ""}`}
              >
                <button
                  className={styles.faqQuestion}
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    size={20}
                    strokeWidth={2.5}
                    className={styles.faqIcon}
                  />
                </button>

                <div className={styles.faqAnswerWrapper}>
                  <div className={styles.faqAnswerInner}>
                    <div className={styles.faqAnswerContent}>
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}