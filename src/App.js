import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Landing from "./pages/Landing";
import PrivacyPolicy from "./sub-pages/PrivacyPolicy";
import TrustSecurity from "./sub-pages/TrustSecurity";
import TermsServices from "./sub-pages/TermsServices";
import Contact from "./pages/Contact";
import HelpCenter from "./sub-pages/HelpCenter";
import Navbar from "./component/Navbar";
import NotFound from "./pages/NotFound";
import AboutUs from './pages/AboutUs';

// 1. List ALL valid routes in your app
const VALID_ROUTES = [
  "/",
  "/contact",
  "/help",
  "/privacy",
  "/trust",
  "/terms"
];

// 2. Routes where navbar should be explicitly HIDDEN
const HIDE_NAVBAR_ROUTES = ["/help", "/privacy", "/terms", "/trust", "/about"];

function ConditionalNavbar() {
  const location = useLocation();
  
  // Check if the current URL doesn't exist in our app (meaning it's a 404)
  const isNotFoundPage = !VALID_ROUTES.includes(location.pathname);
  
  // Check if the current URL is in our explicit hide list
  const isHiddenRoute = HIDE_NAVBAR_ROUTES.includes(location.pathname);

  // If it is a 404 OR a hidden route, do not render the Navbar
  if (isNotFoundPage || isHiddenRoute) {
    return null;
  }

  return <Navbar />;
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ConditionalNavbar />
        <Routes>
          {/* Main Landing Page Route */}
          <Route path="/" element={<Landing />} />

          {/* Support & Contact Routes */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<HelpCenter />} />

          {/* Add the new About Us route here */}
          <Route path="/about" element={<AboutUs />} />

          {/* Legal & Compliance Routes */}
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/trust" element={<TrustSecurity />} />
          <Route path="/terms" element={<TermsServices />} />

          {/* <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} /> */}

          {/* 404 Not Found Catch-All (Must be at the bottom) */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;