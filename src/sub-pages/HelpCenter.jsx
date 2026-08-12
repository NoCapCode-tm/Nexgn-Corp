import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, ChevronDown, ChevronRight, Mail } from 'lucide-react';
import PrivacyNavbar from '../component/Navbar';
import Footer from '../component/Footer';
import styles from './css/HelpCenter.module.css';

// IMPORT YOUR CTA BACKGROUND IMAGE
import ctaBackgroundImage from '../assets/cta-bg.png';

const faqData = [
  {
    id: 1,
    category: "Core Platform & Capabilities",
    questions: [
      { q: "What is Nexgn?", a: "Nexgn is a next-generation digital signature and document infrastructure platform. Originating in New Mexico and built for the global enterprise, we provide a frictionless, highly secure environment to send, sign, and manage legally binding agreements." },
      { q: "Who is Nexgn built for?", a: "Nexgn scales to fit any operation. It is designed for fast-growing startups needing quick contract execution, real estate agencies handling complex multi-party agreements, and multinational corporations requiring strict data sovereignty and advanced API integrations." },
      { q: "Which file formats are supported?", a: "Nexgn supports all major document formats, including .PDF, .DOCX, .DOC, .PPTX, .XLSX, and .TXT. Upon upload, Nexgn automatically converts these files into a secure, tamper-proof format for signing." },
      { q: "Is Nexgn optimized for mobile devices?", a: "Yes. Nexgn utilizes a responsive, mobile-first architecture. You can upload, prepare, and send documents entirely from your smartphone or tablet with zero loss in functionality." },
      { q: "Can I save documents as reusable templates?", a: "Absolutely. If you frequently send the same document (like an NDA or onboarding form), you can save it as a Template. You simply map out the signature fields once, and you can reuse it indefinitely with a single click." },
      { q: "Can I send a document to multiple signers at once?", a: "Yes. You can assign multiple signers to a single document and set a strict 'Signing Order' (e.g., the CEO must sign first, then the client, then the contractor)." },
      { q: "What is 'Bulk Send' and how does it work?", a: "Available on Pro and Enterprise tiers, Bulk Send allows you to upload a CSV file of email addresses and automatically send a personalized copy of a single template to hundreds or thousands of recipients simultaneously." }
    ]
  },
  {
    id: 2,
    category: "The Signer Experience",
    questions: [
      { q: "Do signers need to download any software or create a Nexgn account?", a: "No. Frictionless velocity is our core principle. Signers receive a secure, encrypted link via email or SMS. They click the link, review the document in their browser, and sign instantly on any device." },
      { q: "Can a signer decline to sign a document?", a: "Yes. If a signer spots an error or disagrees with terms, they can click 'Decline to Sign.' They will be prompted to leave a reason, which is immediately emailed back to the document owner." },
      { q: "How do automated reminders work?", a: "You don't need to chase people down. Nexgn allows you to set automated follow-ups. For example, you can configure the system to automatically email the recipient every 48 hours until the document is signed." },
      { q: "Can signers delegate the document to someone else?", a: "Yes. If you send a contract to a manager, but it requires the CFO's signature, the manager can securely delegate the signing authority. This delegation is strictly tracked in the legal audit trail." },
      { q: "Can signers use a drawn signature, or just typed text?", a: "Signers have full flexibility. They can type their name (using legally compliant cursive fonts), draw their signature using a mouse or touchscreen, or upload an image of their physical signature." }
    ]
  },
  {
    id: 3,
    category: "Advanced Security & Legal Compliance",
    questions: [
      { q: "Are Nexgn signatures legally binding globally?", a: "Yes. Nexgn complies with the U.S. ESIGN Act, UETA, the EU’s eIDAS, and major global electronic signature frameworks. Our cryptographic signatures are court-admissible worldwide." },
      { q: "What constitutes a 'Comprehensive Audit Trail'?", a: "Every Nexgn document is attached to a digital certificate. This audit trail tracks the exact IP address, browser information, operating system, and precise cryptographic timestamps (in ISO 8601 format) for every time the document is opened, viewed, and signed." },
      { q: "How does Nexgn ensure tamper-proofing?", a: "The moment the final signature is applied, Nexgn seals the document using a Public Key Infrastructure (PKI) digital certificate. If even a single pixel or character is altered after signing, the document is immediately flagged as invalid." },
      { q: "Does Nexgn support Multi-Factor Authentication (MFA) for signers?", a: "Yes. For highly sensitive documents, senders can require signers to authenticate their identity via a one-time passcode (OTP) sent via SMS, or through integration with enterprise SSO providers before they are allowed to view the document." },
      { q: "Where are my documents geographically stored?", a: "To comply with strict data sovereignty laws, Enterprise clients can dictate their preferred data residency regions (e.g., ensuring EU data never leaves European servers). All data is encrypted at rest using AES-256." }
    ]
  },
  {
    id: 4,
    category: "Account Management & Billing",
    questions: [
      { q: "Can I upgrade or downgrade my plan at any time?", a: "Absolutely. Nexgn is built to scale with your business. You can upgrade to a higher tier instantly from your billing dashboard to unlock more signature requests and advanced features. Downgrades will take effect at the start of your next billing cycle." },
      { q: "What payment methods do you accept?", a: "We accept all major credit and debit cards (Visa, Mastercard, American Express) globally. For annual Enterprise plans, we also support wire transfers and corporate invoicing." },
      { q: "How does billing work if I add more team members?", a: "Nexgn offers transparent per-seat pricing. If you add a new team member halfway through your billing cycle, you will only be charged a prorated amount for the days they actually had access." },
      { q: "How do I access my past invoices?", a: "Administrators can download detailed PDF invoices and billing histories at any time directly from the 'Billing & Subscriptions' tab within the Nexgn dashboard." },
      { q: "What happens to my documents if I cancel my subscription?", a: "If you cancel, your account will downgrade to a limited free state at the end of your billing cycle. You will still be able to access and download your previously signed documents, but you will not be able to send new ones." }
    ]
  },
  {
    id: 5,
    category: "Enterprise, API & Customization",
    questions: [
      { q: "Can I add my own company branding to the signature process?", a: "Yes. Pro and Enterprise users can utilize 'Custom Branding.' You can replace the Nexgn logo with your own, customize the email colors to match your brand, and redirect signers to your own website upon completion." },
      { q: "Does Nexgn offer webhooks?", a: "Yes. Developers can subscribe to real-time webhooks to trigger events in their own systems. For example, your CRM can be automatically updated the exact second a client signs a contract." },
      { q: "Are there rate limits on the Nexgn API?", a: "Standard API usage is subject to generous rate limits to protect our infrastructure. Enterprise clients are provided with dedicated API endpoints and scalable SLA-backed limits." },
      { q: "How do I manage multiple team members?", a: "Nexgn features robust Role-Based Access Control (RBAC). Administrators can create dedicated workspaces, assign specific permissions (Viewer, Sender, Admin), and track the document flow of their entire organization from a central dashboard." }
    ]
  },
  {
    id: 6,
    category: "Sustainability & Environmental Impact (ESG)",
    questions: [
      { q: "How does Nexgn contribute to environmental sustainability?", a: "By transitioning companies from physical paper to digital workflows, Nexgn directly eliminates the massive environmental costs associated with paper production, printing, ink toxins, and the physical transportation of documents via mail carriers." },
      { q: "What is the environmental cost of traditional paper vs. Nexgn?", a: "Producing a single sheet of paper requires approximately 1.5 gallons of water and generates carbon emissions. By digitizing thousands of contracts, a single Nexgn enterprise client can save dozens of trees and thousands of gallons of water annually." },
      { q: "Are Nexgn’s cloud servers powered by renewable energy?", a: "Yes. Our global edge infrastructure partners are committed to 100% renewable energy powering their data centers. We prioritize routing traffic through energy-efficient, green-certified server hubs." },
      { q: "How does Nexgn's architecture reduce energy consumption?", a: "Nexgn utilizes 'Edge Computing.' Instead of routing data back and forth to a single, massive, energy-draining central server, we process data at edge nodes located geographically closest to the user. This drastically reduces latency and the electricity required for data transmission." },
      { q: "How does digital signature adoption reduce Scope 3 emissions?", a: "Scope 3 emissions include the indirect carbon footprint of a company's supply chain. By using Nexgn, you eliminate the need for overnight courier services (FedEx, UPS, etc.) to transport physical contracts, directly cutting down on aviation and vehicular carbon emissions in your supply chain." },
      { q: "Does Nexgn provide sustainability reporting for clients?", a: "Yes. Inside the Nexgn dashboard, companies can view their 'Impact Dashboard.' This calculates the estimated number of trees saved, water conserved, and carbon emissions prevented based on your digital signature volume." },
      { q: "Can we display our paper-saving metrics to our customers?", a: "Absolutely. Nexgn provides embeddable badges and dynamic widgets that you can place on your own website, proudly displaying your company's real-time environmental savings to your customers." },
      { q: "What is Nexgn's approach to e-waste?", a: "We architect our software to be exceptionally lightweight. By not forcing users to download heavy native apps or requiring high-end processing power to sign a document, we extend the usable lifespan of older mobile devices and computers, helping combat the global e-waste crisis." },
      { q: "Does Nexgn partner with any global climate initiatives?", a: "Our corporate governance aligns with the UN Sustainable Development Goals (SDGs). A percentage of our enterprise revenue is directly committed to certified global reforestation projects and carbon-capture technologies." },
      { q: "Is Nexgn a paperless company internally?", a: "100%. We practice what we preach. From our corporate headquarters to our global engineering hubs, Nexgn operates a zero-paper policy. All internal HR, vendor, and legal agreements are executed exclusively on our own platform." }
    ]
  }
];

const HelpCenter = () => {
  const [activeCategory, setActiveCategory] = useState(1);
  const [expandedQuestion, setExpandedQuestion] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleCategory = (id) => {
    setActiveCategory(activeCategory === id ? null : id);
    setExpandedQuestion(null); // Reset open questions when changing categories
  };

  const toggleQuestion = (q) => {
    setExpandedQuestion(expandedQuestion === q ? null : q);
  };

  return (
    <>
      <Helmet>
        <title>Help Center | Nexgn</title>
        <meta
          name="description"
          content="Everything you need to know about Nexgn's platform, features, security, billing, and more."
        />
        <link rel="canonical" href="https://nexgn.cloud/help" />
      </Helmet>

      <div className={styles.pageWrapper}>
        <div className={styles.navContainer}>
          <PrivacyNavbar />
        </div>

        {/* HEADER SECTION */}
        <header className={styles.headerSection}>
          <div className={styles.headerContent}>
            <span className={styles.topLabel}>HELP CENTER</span>
            <h1 className={styles.mainTitle}>
              Find <span className={styles.highlightText}>answers</span><br />
              Get <span className={styles.highlightText}>things done.</span>
            </h1>
            <p className={styles.subtitle}>
              Everything you need to know about Nexgn's platform,<br />
              features, security, billing, and more.
            </p>

            <div className={styles.searchWrapper}>
              <Search className={styles.searchIcon} size={20} />
              <input
                type="text"
                placeholder="Search for answers..."
                className={styles.searchInput}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </header>

        {/* MAIN SPLIT LAYOUT */}
        <main className={styles.mainLayout}>
          
          {/* LEFT SIDEBAR */}
          <aside className={styles.sidebar}>
            <div className={styles.categoriesBox}>
              <h4 className={styles.sidebarTitle}>CATEGORIES</h4>
              <nav className={styles.sidebarNav}>
                {faqData.map((cat) => (
                  <button
                    key={cat.id}
                    className={`${styles.sidebarBtn} ${activeCategory === cat.id ? styles.activeSidebarBtn : ''}`}
                    onClick={() => toggleCategory(cat.id)}
                  >
                    {cat.category}
                  </button>
                ))}
              </nav>
            </div>

            <div className={styles.supportCard}>
              <h4 className={styles.supportTitle}>Still need help?</h4>
              <p className={styles.supportText}>
                Can't find what you're looking for? Reach out and our global team will respond as soon as possible.
              </p>
              <a href="mailto:gateway@nexgn.cloud" className={styles.supportBtn}>
                <Mail size={16} /> Contact Support
              </a>
            </div>
          </aside>

          {/* RIGHT CONTENT (Accordion) */}
          <section className={styles.contentArea}>
            {faqData.map((cat) => {
              const isActive = activeCategory === cat.id;
              
              return (
                <div key={cat.id} className={`${styles.categoryAccordion} ${isActive ? styles.categoryActive : ''}`}>
                  
                  {/* Category Header */}
                  <div className={styles.catHeader} onClick={() => toggleCategory(cat.id)}>
                    <div className={styles.catTitleWrapper}>
                      <span className={`${styles.catNumber} ${isActive ? styles.textRed : styles.textGray}`}>
                        {cat.id}
                      </span>
                      <h2 className={styles.catTitle}>{cat.category}</h2>
                    </div>
                    {isActive ? (
                      <ChevronDown className={styles.catChevron} size={24} />
                    ) : (
                      <ChevronDown className={`${styles.catChevron} ${styles.rotated}`} size={24} />
                    )}
                  </div>

                  {/* Questions List (Only shows if category is active) */}
                  {isActive && (
                    <div className={styles.questionsList}>
                      {cat.questions.map((item, index) => {
                        const isQOpen = expandedQuestion === item.q;
                        
                        return (
                          <div key={index} className={styles.questionItem}>
                            <button 
                              className={styles.questionBtn} 
                              onClick={() => toggleQuestion(item.q)}
                            >
                              <ChevronRight 
                                className={`${styles.qChevron} ${isQOpen ? styles.qChevronOpen : ''}`} 
                                size={16} 
                              />
                              <span className={styles.qText}>{item.q}</span>
                            </button>
                            
                            {/* Answer reveal */}
                            {isQOpen && (
                              <div className={styles.answerBox}>
                                <p>{item.a}</p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </section>

        </main>

        {/* CTA BANNER */}
        <section className={styles.ctaWrapper}>
          <div className={styles.ctaCard} style={{ backgroundImage: `url(${ctaBackgroundImage})` }}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Start signing documents the simpler way</h2>
              <p className={styles.ctaSubtext}>
                Join modern businesses sending and signing documents securely with Nexgn.
              </p>
              <button className={styles.ctaButton}>Create your free account</button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default HelpCenter;