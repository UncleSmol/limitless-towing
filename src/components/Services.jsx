import React, { useRef, useState, useEffect } from 'react';
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
  const [truncatedDescriptions, setTruncatedDescriptions] = useState({});
  const CHAR_LIMIT = 150;

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

  // Function to truncate text
  const truncateText = (text, limit) => {
    if (text.length <= limit) return text;
    return text.slice(0, limit) + '...';
  };

  // Initialize truncated descriptions
  useEffect(() => {
    const truncated = {};
    services.forEach((service, index) => {
      truncated[index] = {
        text: truncateText(service.fullDesc, CHAR_LIMIT),
        isExpanded: false
      };
    });
    setTruncatedDescriptions(truncated);
  }, []);

  // Toggle between truncated and full description
  const toggleDescription = (index, e) => {
    e.stopPropagation(); // Prevent card flip
    setTruncatedDescriptions(prev => ({
      ...prev,
      [index]: {
        text: prev[index].isExpanded 
          ? truncateText(services[index].fullDesc, CHAR_LIMIT)
          : services[index].fullDesc,
        isExpanded: !prev[index].isExpanded
      }
    }));
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
                    <div className="service-desc-container">
                      <p className="service-full-desc">
                        {truncatedDescriptions[index]?.text || service.fullDesc}
                        {service.fullDesc.length > CHAR_LIMIT && (
                          <button 
                            className="read-more-btn"
                            onClick={(e) => toggleDescription(index, e)}
                          >
                            {truncatedDescriptions[index]?.isExpanded ? 'Read Less' : 'Read More'}
                          </button>
                        )}
                      </p>
                    </div>
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
