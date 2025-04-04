import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/Homepage.css';
import '../styles/Services.css';
import { services } from '../data/services';
import ServiceModal from './ServiceModal';

// Hero images
import heroImage1 from '../images/hero-images/hero-image-1.jpg';
import heroImage2 from '../images/hero-images/hero-image-2.jpg';
import heroImage3 from '../images/hero-images/hero-image-3.jpg';
import heroImage4 from '../images/hero-images/hero-image-4.jpg';

gsap.registerPlugin(ScrollTrigger);

const heroImages = [
  { id: 1, src: heroImage1 },
  { id: 2, src: heroImage2 },
  { id: 3, src: heroImage3 },
  { id: 4, src: heroImage4 }
];

// Increased timing configuration to 10 seconds
const SLIDE_DURATION = 10; 

const Homepage = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const sliderRef = useRef(null);
  const [expandedService, setExpandedService] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const toggleService = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  const handleOpenModal = (service, e) => {
    e.stopPropagation();
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  // Simple carousel implementation using useState and useEffect
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroImages.length);
    }, SLIDE_DURATION * 1000); // Convert to milliseconds (10 seconds)

    return () => clearInterval(slideInterval);
  }, []);

  // Content animation only
  useEffect(() => {
    if (!heroRef.current || !servicesRef.current) return;

    const mm = gsap.matchMedia();
    
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Hero content animation
      gsap.from(heroRef.current.querySelector('.hero-content'), {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      mm.revert();
    };
  }, []);

  return (
    <>
      <div className="homepage">
        <section ref={heroRef} className="hero-section" aria-label="Main banner">
          <div className="hero-slider" ref={sliderRef}>
            {heroImages.map((image, index) => (
              <div 
                key={image.id} 
                className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                style={{
                  opacity: index === currentSlide ? 1 : 0,
                  transition: 'opacity 0.5s ease-in-out',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%'
                }}
              >
                <img 
                  src={image.src} 
                  alt="" 
                  aria-hidden="true"
                  loading={image.id === 1 ? 'eager' : 'lazy'}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
            ))}
          </div>
          <div className="hero-overlay" aria-hidden="true"></div>
          <div className="hero-content">
            <h1>24/7 PROFESSIONAL<br/>TOWING SERVICE</h1>
            <p className="hero-subtitle">Your reliable partner on the road</p>
            <div className="hero-buttons">
              <a href="tel:+27829518245" className="btn btn-primary" aria-label="Call emergency towing service">
                <span className="phone-icon" aria-hidden="true">📞</span> Emergency Call
              </a>
              <a href="#services" className="btn btn-secondary">Our Services</a>
            </div>
          </div>
        </section>

        <section ref={servicesRef} id="services" className="services-section">
          <div className="section-container">
            <h2 className="section-title">OUR SERVICES</h2>
            <p className="section-subtitle">Click on any service to learn more</p>
            <div className="services-grid">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className={`service-card ${expandedService === index ? 'expanded' : ''}`}
                  onClick={() => toggleService(index)}
                >
                  <div className="service-card-inner">
                    <div className="service-card-front">
                      <div className="service-image">
                        <img src={service.image} alt={service.title} />
                        <div className="flip-hint">
                          <span className="flip-icon">↺</span>
                          <span className="flip-text">Click to flip</span>
                        </div>
                      </div>
                      <h3>{service.title}</h3>
                      <p>{service.shortDesc}</p>
                    </div>
                    <div className="service-card-back">
                      <h3>{service.title}</h3>
                      <p className="service-full-desc">{service.fullDesc}</p>
                      <button 
                        className="btn btn-secondary"
                        onClick={(e) => handleOpenModal(service, e)}
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-content">
            <h2>Need Immediate Assistance?</h2>
            <p>We're available 24/7 for all your towing needs</p>
            <a href="tel:+27829518245" className="btn btn-primary">
              <i className="fas fa-phone"></i> Call Now: 082 951 8245
            </a>
          </div>
        </section>
      </div>
      
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default Homepage;
