import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react"; 
import styles from "./css/LoadingScreen.module.css";

const LoadingScreen = ({ onComplete, loaderRef }) => {
  const screenRef = useRef(null);
  const wrapperRef = useRef(null);
  const logoTextRef = useRef(null);
  const logoIconRef = useRef(null);
  const lettersRef = useRef([]);

  // Give App access to the actual loader element.
  useGSAP(() => {
    if (loaderRef) {
      loaderRef.current = screenRef.current;
    }
  }, [loaderRef]);

  useGSAP(() => {
    const letters = lettersRef.current;

    // 1. Initial State
    gsap.set(logoIconRef.current, {
      scale: 0,
      opacity: 0,
      rotation: -15,
      transformOrigin: "center center",
    });

    gsap.set(letters, {
      y: 40,
      opacity: 0,
    });

    // 2. Main Loader Timeline
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) {
          onComplete();
        }
      },
    });

    // 3. Icon Appears
    tl.to(logoIconRef.current, {
      scale: 1.1,
      opacity: 1,
      rotation: 0,
      duration: 0.5,
      ease: "back.out(2)",
    });

    // 4. Icon Settles
    tl.to(logoIconRef.current, {
      scale: 1,
      duration: 0.2,
      ease: "power2.out",
    });

    // 5. "Nexgn" Letters Stagger In
    tl.to(
      letters,
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.08,
        ease: "back.out(1.5)",
      },
      "-=0.3"
    );

    // 6. Let the user read the logo (Pause for 0.8s)
    // 7. "Nexgn" Letters Disappear
    tl.to(
      letters,
      {
        y: -20,
        opacity: 0,
        duration: 0.3,
        stagger: 0.03, // Swift exit
        ease: "power2.in",
      },
      "+=0.8" 
    );

    // 8. Glide Icon to Dead Center
    tl.to(
      wrapperRef.current,
      {
        x: () => {
          // Dynamically calculate shift based on text width + flex gap
          const textWidth = logoTextRef.current.offsetWidth;
          const gap = 12; // Matches gap in CSS
          return (textWidth + gap) / 2;
        },
        duration: 0.6,
        ease: "power3.inOut",
      },
      "<+=0.1" // Starts gliding just as the letters are fading out
    );

    // 9. Tiny final pause so it doesn't vanish instantly upon centering
    tl.to({}, { duration: 0.3 });

  }, { scope: screenRef });

  return (
    <div ref={screenRef} className={styles.loadingScreen}>
      <div ref={wrapperRef} className={styles.logoWrapper}>
        
        {/* LOGO ICON */}
        <svg
          ref={logoIconRef}
          className={styles.logoIcon}
          width="105"
          height="105"
          viewBox="0 0 65 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M55 0C60.5228 0 65 4.47715 65 10V55C65 55.1554 64.9953 55.3102 64.9883 55.4639L48.7539 39.583C46.7801 37.6522 43.597 37.6699 41.6445 39.6221L38.0254 43.2412C36.0728 45.1938 36.0895 48.3424 38.0635 50.2734L53.1182 65H10.7041L52.1992 24.4082C54.1726 22.4773 54.1904 19.3294 52.2383 17.377L48.6191 13.7578C46.6666 11.8053 43.4828 11.788 41.5088 13.7188L0 54.3232V11.8096L16.1768 27.6348C18.1507 29.5657 21.3335 29.5481 23.2861 27.5957L26.9062 23.9766C28.8581 22.0239 28.841 18.8752 26.8672 16.9443L9.55566 0.0107422C9.70299 0.00429987 9.85109 3.13737e-09 10 0H55Z"
            fill="white"
          />
        </svg>

        {/* LETTERS */}
        <div ref={logoTextRef} className={styles.logoText}>
          {"Nexgn".split("").map((letter, index) => (
            <span
              key={index}
              ref={(el) => {
                lettersRef.current[index] = el;
              }}
              className={styles.logoLetter}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;