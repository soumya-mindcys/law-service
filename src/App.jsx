import React, { useState, useEffect } from "react";
import {
  Phone,
  Menu,
  X,
  Scale,
  Briefcase,
  Pickaxe,
  Handshake,
  Gavel,
  GraduationCap,
  Target,
  Award,
  Star,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MessageCircle,
} from "lucide-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import PracticeAreas from "./components/PracticeAreas";
import WhyChooseUs from "./components/WhyChooseUs";
import SuccessStories from "./components/SuccessStories";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import DisclaimerModal from "./components/DisclaimerModal"; // ✅ Import the modal
import Blog from "./components/Blog";
function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(false); // ✅ New state

  // Sticky nav effect
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-rotate testimonials
  const testimonials = [
    {
      text: "DKP & Associates provided exceptional legal guidance for our mining project. Their expertise in Odisha's regulatory landscape was invaluable.",
      name: "Rajesh Kumar",
      designation: "Mining Industry Executive",
      rating: 5,
    },
    {
      text: "Outstanding commercial law services. They helped us navigate complex business regulations with professionalism and expertise.",
      name: "Priya Patel",
      designation: "Business Owner",
      rating: 5,
    },
    {
      text: "Excellent dispute resolution services. The team's dedication and strategic approach led to a favorable outcome for our case.",
      name: "Amit Sharma",
      designation: "Corporate Manager",
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
  const sectionId = sessionStorage.getItem("scrollTo");
  if (sectionId) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      sessionStorage.removeItem("scrollTo");
    }
  }
}, [location]);

  const scrollToSection = (sectionId) => {
  if (location.pathname !== "/") {
    navigate("/", { replace: false });
    // Save target section to scroll to after redirect
    sessionStorage.setItem("scrollTo", sectionId);
  } else {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  }
};

  const handleAgree = () => setDisclaimerAccepted(true);
  const handleDisagree = () =>
    alert("You must accept the disclaimer to continue.");

  return (
    <>
      <div className="min-h-screen bg-white">
        {!disclaimerAccepted ? (
          <DisclaimerModal onAgree={handleAgree} onDisagree={handleDisagree} />
        ) : (
          <Routes>
            {/* Main Website Routes */}
            <Route
              path="/"
              element={
                <>
                  <Navigation
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                    isSticky={isSticky}
                    scrollToSection={scrollToSection}
                  />
                  <HeroSection scrollToSection={scrollToSection} />
                  <AboutSection />
                  <PracticeAreas scrollToSection={scrollToSection} />
                  <WhyChooseUs />
                  <SuccessStories
                    testimonials={testimonials}
                    currentTestimonial={currentTestimonial}
                    setCurrentTestimonial={setCurrentTestimonial}
                  />
                  <ContactSection />
                  <Footer scrollToSection={scrollToSection} />
                  <WhatsAppFloat />
                </>
              }
            />

            {/* Blog Route */}
            <Route
              path="/articles-blogs"
              element={
                <>
                  <Navigation
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                    isSticky={isSticky}
                    scrollToSection={scrollToSection}
                  />
                  <Blog />
                  <Footer scrollToSection={scrollToSection} />
                </>
              }
            />
          </Routes>
        )}
      </div>
    </>
  );
}
export default App;
