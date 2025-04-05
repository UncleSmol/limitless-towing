import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from '../lib/gsap-plugins'; // Updated import for ScrollToPlugin
import '../styles/Header.css';
import logoImage from '../images/limitless-towing-logo1.png';
import sigLogo from '../sig/dev-doc-logo.svg';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const navRef = useRef(null);
  const sigLogoRef = useRef(null);
  const toggleRef = useRef(null);
  const overlayRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Set active section based on current path
    const path = location.pathname;
    if (path === '/') setActiveSection('home');
    else if (path === '/services') setActiveSection('services');
    else if (path === '/about') setActiveSection('about');
    else if (path === '/contact') setActiveSection('contact');
    
    // Initial GSAP animations - modified to avoid conflicts
    const tl = gsap.timeline();
    
    // Set initial state before animation
    gsap.set(headerRef.current, { opacity: 1, y: 0 });
    
    // Animate other elements without moving the header itself
    tl.from(logoRef.current, {
      opacity: 1,
      scale: 0.8,
      duration: 0.6,
      ease: "back.out(1.7)"
    })
    .from(navRef.current.children, {
      opacity: 1,
      stagger: 0.1,
      duration: 0.5,
      ease: "power3.out"
    }, "-=0.2")
    .from(sigLogoRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: "power3.out"
    }, "-=0.2");
    
    // Add scroll event listener for header effects
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  // Handle scroll effects
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const scrollPercent = (scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    
    // Update scroll indicator width
    if (scrollIndicatorRef.current) {
      scrollIndicatorRef.current.style.width = `${scrollPercent}%`;
    }
    
    // Header shrink effect on scroll
    if (scrollY > 100) {
      gsap.to(headerRef.current, {
        padding: '10px 0',
        background: 'rgba(255, 255, 255, 0.95)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        duration: 0.3
      });
      
      gsap.to(logoRef.current, {
        height: '40px',
        duration: 0.3
      });
    } else {
      gsap.to(headerRef.current, {
        padding: '',
        background: 'var(--white)',
        boxShadow: 'var(--shadow-md)',
        duration: 0.3
      });
      
      gsap.to(logoRef.current, {
        height: '',
        duration: 0.3
      });
    }
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    if (!isMenuOpen) {
      // Open menu animation
      gsap.to(navRef.current, {
        right: '0%',
        duration: 0.5,
        ease: 'power3.out'
      });
      
      // Animate hamburger to X
      gsap.to(toggleRef.current.children[0], {
        rotation: 45,
        y: 9,
        duration: 0.3
      });
      
      gsap.to(toggleRef.current.children[1], {
        opacity: 0,
        duration: 0.3,
      });
      
      gsap.to(toggleRef.current.children[2], {
        rotation: -45,
        y: -9,
        duration: 0.3
      });
      
      // Show overlay
      gsap.to(overlayRef.current, {
        opacity: 1,
        visibility: 'visible',
        duration: 0.3
      });
      
      // Animate nav items
      gsap.fromTo(
        navRef.current.children,
        {
          opacity: 0,
          y: 20
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          delay: 0.2,
          ease: 'power3.out'
        }
      );
      
      // Animate signature logo
      gsap.fromTo(
        sigLogoRef.current,
        {
          opacity: 0,
          y: 20
        },
        {
          opacity: 1,
          y: 0,
          delay: 0.6,
          ease: 'power3.out'
        }
      );
    } else {
      // Close menu animation
      gsap.to(navRef.current, {
        right: '-100%',
        duration: 0.5,
        ease: 'power3.in'
      });
      
      // Animate X back to hamburger
      gsap.to(toggleRef.current.children[0], {
        rotation: 0,
        y: 0,
        duration: 0.3
      });
      
      gsap.to(toggleRef.current.children[1], {
        opacity: 1,
        duration: 0.3
      });
      
      gsap.to(toggleRef.current.children[2], {
        rotation: 0,
        y: 0,
        duration: 0.3
      });
      
      // Hide overlay
      gsap.to(overlayRef.current, {
        opacity: 0,
        visibility: 'hidden',
        duration: 0.3
      });
    }
    
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle menu closure when a link is clicked
  const handleLinkClick = () => {
    if (isMenuOpen) {
      toggleMobileMenu();
    }
  };



  return (
    <header ref={headerRef} className="header">
      <div className="header-container">
        <div className="logo-container">
          <Link to="/" onClick={handleLinkClick}>
            <img 
              ref={logoRef}
              src={logoImage} 
              alt="Limitless Towing Logo" 
              className="logo"
            />
          </Link>
        </div>
        
        <nav ref={navRef} className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} 
            onClick={handleLinkClick}
          >
            HOME
          </Link>
          <Link 
            to="/services" 
            className={`nav-link ${activeSection === 'services' ? 'active' : ''}`} 
            onClick={handleLinkClick}
          >
            SERVICES
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} 
            onClick={handleLinkClick}
          >
            ABOUT US
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} 
            onClick={handleLinkClick}
          >
            CONTACT US
          </Link>
          <a href="tel:+27829518245" className="nav-link phone-link">
            <span className="phone-icon">📞</span> 
            <span className="phone-number">082 951 8245</span>
          </a>
          {/* Signature logo at the bottom of nav */}
          <div className="sig-logo-container">
            <a href='https://unclesmol.github.io/dev-doc/' target="_blank" rel='noreferrer'>
              <img 
                ref={sigLogoRef}
                src={sigLogo} 
                alt="Signature Logo" 
                className="sig-logo"
              />
            </a>
          </div>
        </nav>
        
        <div 
          ref={toggleRef}
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div ref={scrollIndicatorRef} className="scroll-indicator"></div>
      
      {/* Mobile menu overlay */}
      <div 
        ref={overlayRef} 
        className={`menu-overlay ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMobileMenu}
      ></div>
    </header>
  );
};

export default Header;
