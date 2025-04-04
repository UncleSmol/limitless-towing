import React, { useEffect } from 'react';
import { IoClose, IoTime, IoCarSport, IoLocationSharp, IoWallet, IoShield } from 'react-icons/io5';

const ServiceModal = ({ service, onClose }) => {
  useEffect(() => {
    // Lock body scroll when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <IoClose size={24} />
        </button>
        
        <div className="modal-header">
          <img src={service.image} alt={service.title} />
          <h2>{service.title}</h2>
        </div>

        <div className="modal-body">
          <div className="service-features">
            {service.title === 'Emergency Towing' && (
              <>
                <div className="feature">
                  <IoTime size={32} />
                  <h4>Response Time</h4>
                  <p>30-45 minutes average arrival</p>
                </div>
                <div className="feature">
                  <IoCarSport size={32} />
                  <h4>Vehicle Types</h4>
                  <p>All vehicles supported</p>
                </div>
                {/* Add more features based on service type */}
              </>
            )}
            {/* Add similar blocks for other service types */}
          </div>
          
          <div className="service-description">
            <p>{service.fullDesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
