// Navigation.jsx
import React from 'react';
import { Phone, Menu, X, Scale } from 'lucide-react';
import '../App.css';

const Navigation = ({ isMenuOpen, setIsMenuOpen, isSticky, scrollToSection }) => (
  <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
    isSticky ? 'bg-white shadow-lg' : 'bg-white shadow-md'
  }`} style={{ borderBottom: '1.5px solid #f3f4f6', background: 'rgba(255,255,255,0.98)' }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        {/* Logo Section */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('home')}>
          <span className="flex items-center justify-center rounded-full bg-orange-500" style={{ width: 36, height: 36 }}>
            <Scale className="h-6 w-6 text-white" />
          </span>
          <span className="text-2+++xl font-bold text-black tracking-tight" style={{ letterSpacing: '-1px' }}>DKP <span style={{ color: 'var(--accent-orange)' }}>&</span> Associates</span>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8" style={{ marginLeft: 'auto' }}>
          <button onClick={() => scrollToSection('home')} className="nav-link font-semibold text-lg relative" style={{ background: 'none', border: 'none', boxShadow: 'none' }}>Home</button>
          <button onClick={() => scrollToSection('about')} className="nav-link font-semibold text-lg relative" style={{ background: 'none', border: 'none', boxShadow: 'none' }}>About</button>
          <button onClick={() => scrollToSection('practice-areas')} className="nav-link font-semibold text-lg relative" style={{ background: 'none', border: 'none', boxShadow: 'none' }}>Practice Areas</button>
          <button onClick={() => scrollToSection('success-stories')} className="nav-link font-semibold text-lg relative" style={{ background: 'none', border: 'none', boxShadow: 'none' }}>Success Stories</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link font-semibold text-lg relative" style={{ background: 'none', border: 'none', boxShadow: 'none' }}>Contact</button>
        </div>
        {/* Call Button & Hamburger */}
        <div className="flex items-center space-x-4">
          <a href="tel:+91-9876543210" className="btn-primary hidden sm:flex shadow-md" style={{ fontWeight: 700, fontSize: '1rem', boxShadow: '0 2px 8px rgba(255,107,53,0.10)' }}>
            <Phone className="h-4 w-4 mr-2" />
            Call Now
          </a>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-black border border-orange-500 rounded-lg p-2 bg-white shadow-sm"
            style={{ boxShadow: '0 1px 4px rgba(255,107,53,0.10)' }}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6 text-orange-500" /> : <Menu className="h-6 w-6 text-orange-500" />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-orange-500 absolute top-16 left-0 right-0 shadow-lg rounded-b-lg animate-fadeInDown" style={{ zIndex: 49 }}>
          <div className="px-4 py-2 space-y-2">
            <button onClick={() => scrollToSection('home')} className="mobile-nav-link font-semibold text-lg">Home</button>
            <button onClick={() => scrollToSection('about')} className="mobile-nav-link font-semibold text-lg">About</button>
            <button onClick={() => scrollToSection('practice-areas')} className="mobile-nav-link font-semibold text-lg">Practice Areas</button>
            <button onClick={() => scrollToSection('success-stories')} className="mobile-nav-link font-semibold text-lg">Success Stories</button>
            <button onClick={() => scrollToSection('contact')} className="mobile-nav-link font-semibold text-lg">Contact</button>
            <a href="tel:+91-9876543210" className="mobile-nav-link flex items-center font-semibold text-lg">
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      )}
    </div>
  </nav>
);

export default Navigation;
