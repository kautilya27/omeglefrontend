import { Routes, Route, useLocation } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ChatPage from "./pages/ChatPage"
import AdminDashboard from "./pages/AdminDashboard"
import { ThemeProvider } from "./contexts/ThemeContext"
import "./App.css"
import Header from "./components/Header"
import InfoSection  from "./components/InfoSection"
import FeaturesSection from "./components/FeaturesSection"
import FaqSection from "./components/FaqSection"
import Footer from "./components/Footer"
import PrivacyPolicy from "./components/PrivacyPolicy"
import TermsOfService from "./components/TermsOfService"
import CommunityGuidelines from "./components/CommunityGuidelines"

function App() {
  const location = useLocation();

  return (
    <>
      <Header/>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/community-guidelines" element={<CommunityGuidelines />} />
        </Routes>
        {/* Only show these sections if not on /chat */}
        {location.pathname !== "/chat" && (
          <>
            <InfoSection />
            <FeaturesSection />
            <FaqSection />
          </>
        )}
      </ThemeProvider>
      <Footer/>
    </>
  )
}

export default App
