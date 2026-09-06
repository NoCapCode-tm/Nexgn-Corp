import React, {
  useLayoutEffect,
  useRef,
} from "react";

import gsap from "gsap";

import styles from "./css/LoadingScreen.module.css";


const LoadingScreen = ({
  onComplete,
  loaderRef,
}) => {

  const screenRef = useRef(null);

  const logoIconRef = useRef(null);

  const lettersRef = useRef([]);


  useLayoutEffect(() => {

    /*
      Give App access to the actual loader element.
    */
    if (loaderRef) {
      loaderRef.current = screenRef.current;
    }


    const ctx = gsap.context(() => {

      const letters = lettersRef.current;


      /*
        Initial icon state
        ----
        UNCHANGED
      */
      gsap.set(logoIconRef.current, {
        scale: 0,
        opacity: 0,
        rotation: -15,
        transformOrigin: "center center",
      });


      /*
        Initial letters state
        ----
        UNCHANGED
      */
      gsap.set(letters, {
        y: window.innerHeight,
        opacity: 1,
      });


      /*
        Main loader timeline
        ----
        UNCHANGED
      */
      const tl = gsap.timeline({

        onComplete: () => {

          /*
            Tell App the loader's own
            animation is finished.

            App will then move the loader
            upward.
          */
          if (onComplete) {
            onComplete();
          }

        },

      });


      /*
        Icon animation
        ----
        UNCHANGED
      */
      tl.to(logoIconRef.current, {

        scale: 2,

        opacity: 1,

        rotation: 0,

        duration: 0.45,

        ease: "back.out(2.5)",

      });


      /*
        Small settle
        ----
        UNCHANGED
      */
      tl.to(logoIconRef.current, {

        scale: 2,

        duration: 0.15,

        ease: "power2.out",

      });


      /*
        Letter animation
        ----
        UNCHANGED
      */
      tl.to(
        letters,
        {

          y: 0,

          duration: 0.75,

          stagger: 0.14,

          ease: "power3.out",

        },
        "-=0.02"
      );


    }, screenRef);


    return () => {

      ctx.revert();

      if (loaderRef) {
        loaderRef.current = null;
      }

    };

  }, [onComplete, loaderRef]);


  return (

    <div
      ref={screenRef}
      className={styles.loadingScreen}
    >

      <div className={styles.logoWrapper}>


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

        <div className={styles.logoText}>

          {"Nexgn".split("").map(
            (letter, index) => (

              <span
                key={index}
                ref={(el) => {
                  lettersRef.current[index] = el;
                }}
                className={styles.logoLetter}
              >
                {letter}
              </span>

            )
          )}

        </div>


      </div>

    </div>

  );

};


export default LoadingScreen;