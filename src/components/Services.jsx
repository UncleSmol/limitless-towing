import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/Homepage.css';  // Keeping the same CSS import
import '../styles/Services.css';
import { services } from '../data/services';
import ServiceModal from './ServiceModal';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const servicesRef = useRef(null);
  const [expandedService, setExpandedService] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

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

  return (
    <>
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
      
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default Services;
