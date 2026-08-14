import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
// Assuming you placed the component inside a "legal" sub-folder in pages
import PrivacyPolicy from "./sub-pages/PrivacyPolicy"; 
import TrustSecurity from "./sub-pages/TrustSecurity"; 
import TermsServices from "./sub-pages/TermsServices";  
import Contact from "./pages/Contact";  
import HelpCenter from "./sub-pages/HelpCenter";
import ComingSoon from "./sub-pages/ComingSoon";
import Navbar from "./component/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/soon" element={<ComingSoon />} />

          {/* Support & Contact Routes */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<HelpCenter />} />

          {/* Legal & Compliance Routes */}
          <Route path="/privacy" element={<PrivacyPolicy />} />  {/* Privacy Page Route */}
          <Route path="/trust" element={<TrustSecurity />} />  {/* Trust Page Route */}
          <Route path="/terms" element={<TermsServices />} />  {/* Terms Page Route */}

          {/* Optional: Add a 404 Catch-All Route here if you build a NotFound page */}
          {/* <Route path="*" element={<NotFound />} /> */}

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;