import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
// Assuming you placed the component inside a "legal" sub-folder in pages
import PrivacyPolicy from "./sub-pages/PrivacyPolicy"; 
import TrustSecurity from "./sub-pages/TrustSecurity"; 
import TermsServices from "./sub-pages/TermsServices";  // Assuming you have a TermsOfService component

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          
          <Route path="/privacy" element={<PrivacyPolicy />} />  {/* Privacy Page Route */}
          <Route path="/trust" element={<TrustSecurity />} />  {/* Trust Page Route */}
          <Route path="/terms" element={<TermsServices />} />  {/* Terms Page Route */}

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;