import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Landing from "./pages/Landing";
import PrivacyPolicy from "./sub-pages/PrivacyPolicy";
import TrustSecurity from "./sub-pages/TrustSecurity";
import TermsServices from "./sub-pages/TermsServices";
import Contact from "./pages/Contact";
import HelpCenter from "./sub-pages/HelpCenter";
import ComingSoon from "./sub-pages/ComingSoon";
import Navbar from "./component/Navbar";
// import SignUp from "./login-signup/pages/SignUp";
// import Login from "./login-signup/pages/Login";

// Routes where navbar should be HIDDEN
const HIDE_NAVBAR_ROUTES = ["/signup", "/login","/help","/privacy","/terms","/trust"];

function ConditionalNavbar() {
  const location = useLocation();
  const shouldHide = HIDE_NAVBAR_ROUTES.includes(location.pathname);

  if (shouldHide) return null;
  return <Navbar />;
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ConditionalNavbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/soon" element={<ComingSoon />} />

          {/* Support & Contact Routes */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<HelpCenter />} />

          {/* Legal & Compliance Routes */}
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/trust" element={<TrustSecurity />} />
          <Route path="/terms" element={<TermsServices />} />

          {/* <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} /> */}

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;