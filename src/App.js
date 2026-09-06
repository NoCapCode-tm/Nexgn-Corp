import "./App.css";
import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import gsap from "gsap";

import Landing from "./pages/Landing";
import PrivacyPolicy from "./sub-pages/PrivacyPolicy";
import TrustSecurity from "./sub-pages/TrustSecurity";
import TermsServices from "./sub-pages/TermsServices";
import Contact from "./pages/Contact";
import HelpCenter from "./sub-pages/HelpCenter";
import Navbar from "./component/Navbar";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import LoadingScreen from "./component/LoadingScreen";


const VALID_ROUTES = [
  "/",
  "/contact",
  "/help",
  "/privacy",
  "/trust",
  "/terms",
  "/about",
];


const HIDE_NAVBAR_ROUTES = [
  "/help",
  "/privacy",
  "/terms",
  "/trust",
  "/about",
];


function ConditionalNavbar() {
  const location = useLocation();

  const isNotFoundPage =
    !VALID_ROUTES.includes(location.pathname);

  const isHiddenRoute =
    HIDE_NAVBAR_ROUTES.includes(location.pathname);

  if (isNotFoundPage || isHiddenRoute) {
    return null;
  }

  return <Navbar />;
}


function WebsiteContent() {
  return (
    <div className="websiteContent">

      <ConditionalNavbar />

      <Routes>

        <Route
          path="/"
          element={<Landing />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/help"
          element={<HelpCenter />}
        />

        <Route
          path="/about"
          element={<AboutUs />}
        />

        <Route
          path="/privacy"
          element={<PrivacyPolicy />}
        />

        <Route
          path="/trust"
          element={<TrustSecurity />}
        />

        <Route
          path="/terms"
          element={<TermsServices />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

    </div>
  );
}


function App() {

  const loaderRef = useRef(null);

  const [websiteLoaded, setWebsiteLoaded] =
    useState(false);

  const [loaderFinished, setLoaderFinished] =
    useState(false);

  const [showLoader, setShowLoader] =
    useState(true);


  /*
    Detect when the page/resources have loaded.
  */
  useEffect(() => {

    const handleLoad = () => {
      setWebsiteLoaded(true);
    };

    if (document.readyState === "complete") {
      setWebsiteLoaded(true);
    } else {
      window.addEventListener(
        "load",
        handleLoad
      );
    }

    return () => {
      window.removeEventListener(
        "load",
        handleLoad
      );
    };

  }, []);


  /*
    Once BOTH:

    1. Website has loaded
    2. LoadingScreen animation has finished

    move ONLY the loader away.

    IMPORTANT:
    We do NOT transform the website.

    This keeps Landing/ScrollTrigger completely untouched.
  */
  useLayoutEffect(() => {

    if (!websiteLoaded || !loaderFinished) {
      return;
    }

    const loader = loaderRef.current;

    if (!loader) {
      return;
    }

    gsap.killTweensOf(loader);

    gsap.to(loader, {
      yPercent: -100,
      duration: 1.15,
      ease: "power4.inOut",

      onComplete: () => {

        setShowLoader(false);

        gsap.set(loader, {
          clearProps: "transform",
        });

      },
    });

  }, [websiteLoaded, loaderFinished]);


  return (
    <BrowserRouter>

      {/* 
        IMPORTANT:
        Website is completely normal.
        NO transform.
        NO fixed positioning.
        NO height manipulation.
      */}
      <div className="websiteReveal">

        <WebsiteContent />

      </div>


      {showLoader && (
        <LoadingScreen
          loaderRef={loaderRef}
          onComplete={() => {
            setLoaderFinished(true);
          }}
        />
      )}

    </BrowserRouter>
  );
}


export default App;