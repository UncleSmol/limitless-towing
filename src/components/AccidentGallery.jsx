import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/AccidentGallery.css';

gsap.registerPlugin(ScrollTrigger);

// This will be replaced with actual database data
const sampleAccidents = [
  {
    id: 1,
    title: 'Highway Collision',
    date: '2023-05-15',
    location: 'N1 Highway, Midrand',
    description: 'Multiple vehicle collision requiring heavy-duty towing and recovery.',
    severity: 'High',
    attendingTower: 'Heavy Duty Rig #3',
    staff: 'John Doe, Sam Smith',
    imageUrls: 'https://source.unsplash.com/random/800x600/?accident,tow-truck,1, https://source.unsplash.com/random/800x600/?accident,tow-truck,2, https://source.unsplash.com/random/800x600/?accident,tow-truck,3'
  },
  {
    id: 2,
    title: 'Roadside Breakdown',
    date: '2023-06-22',
    location: 'R21, Kempton Park',
    description: 'Vehicle breakdown requiring flatbed towing to service center.',
    severity: 'Low',
    attendingTower: 'Flatbed #2',
    staff: 'Mike Johnson',
    imageUrls: 'https://source.unsplash.com/random/800x600/?breakdown,tow-truck,1, https://source.unsplash.com/random/800x600/?breakdown,tow-truck,2'
  },
  {
    id: 3,
    title: 'Truck Rollover',
    date: '2023-07-10',
    location: 'M1 South, Johannesburg',
    description: 'Heavy truck rollover requiring specialized recovery equipment.',
    severity: 'Critical',
    attendingTower: 'Heavy Recovery Unit #1',
    staff: 'David Williams, Robert Brown, James Taylor',
    imageUrls: 'https://source.unsplash.com/random/800x600/?truck,accident,1, https://source.unsplash.com/random/800x600/?truck,accident,2, https://source.unsplash.com/random/800x600/?truck,accident,3, https://source.unsplash.com/random/800x600/?truck,accident,4'
  }
];

const AccidentGallery = () => {
  const galleryRef = useRef(null);
  const [selectedAccident, setSelectedAccident] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    if (!galleryRef.current) return;
    
    const mm = gsap.matchMedia();
    
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Animation for the gallery items
      gsap.from(galleryRef.current.querySelectorAll('.accident-card'), {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: galleryRef.current,
          start: 'top 80%',
        }
      });
    });
    
    return () => {
      mm.revert();
    };
  }, []);
  
  // Reset image index when selecting a new accident
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [selectedAccident]);
  
  const handleAccidentClick = (accident) => {
    setSelectedAccident(accident);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };
  
  const closeModal = () => {
    setSelectedAccident(null);
    document.body.style.overflow = ''; // Re-enable scrolling
  };
  
  const navigateImages = (direction) => {
    if (!selectedAccident) return;
    
    const imageArray = selectedAccident.imageUrls.split(', ');
    if (direction === 'next') {
      setCurrentImageIndex((prev) => (prev + 1) % imageArray.length);
    } else {
      setCurrentImageIndex((prev) => (prev - 1 + imageArray.length) % imageArray.length);
    }
  };
  
  return (
    <>
      <section ref={galleryRef} id="accident-gallery" className="accident-gallery-section">
        <div className="section-container">
          <h2 className="section-title">ACCIDENT GALLERY</h2>
          <p className="section-subtitle">Featured recoveries and assistance we've provided</p>
          
          <div className="accident-grid">
            {sampleAccidents.map((accident) => {
              const mainImage = accident.imageUrls.split(', ')[0];
              return (
                <div
                  key={accident.id}
                  className="accident-card"
                  onClick={() => handleAccidentClick(accident)}
                >
                  <div className="accident-image">
                    <img src={mainImage} alt={accident.title} />
                  </div>
                  <div className="accident-info">
                    <h3>{accident.title}</h3>
                    <p className="accident-date">{accident.date}</p>
                    <p className="accident-location">{accident.location}</p>
                    <div className="severity-indicator">
                      <span className={`severity ${accident.severity.toLowerCase()}`}>
                        {accident.severity}
                      </span>
                    </div>
                    <button className="view-details-btn">View Details</button>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="gallery-cta">
            <p>We have attended numerous incidents and provided swift recovery services.</p>
            <a href="/services" className="btn btn-primary">View Our Services</a>
          </div>
        </div>
      </section>
      
      {/* Accident Details Modal */}
      {selectedAccident && (
        <div className="accident-modal">
          <div className="modal-overlay" onClick={closeModal}></div>
          <div className="modal-content">
            <button className="close-modal" onClick={closeModal}>×</button>
            
            <div className="modal-gallery">
              <div className="modal-image-container">
                {selectedAccident.imageUrls.split(', ').length > 1 && (
                  <button 
                    className="gallery-nav prev" 
                    onClick={() => navigateImages('prev')}
                  >
                    ‹
                  </button>
                )}
                
                <img 
                  src={selectedAccident.imageUrls.split(', ')[currentImageIndex]} 
                  alt={`${selectedAccident.title} - Image ${currentImageIndex + 1}`} 
                />
                
                {selectedAccident.imageUrls.split(', ').length > 1 && (
                  <button 
                    className="gallery-nav next" 
                    onClick={() => navigateImages('next')}
                  >
                    ›
                  </button>
                )}
                
                <div className="image-counter">
                  {currentImageIndex + 1} / {selectedAccident.imageUrls.split(', ').length}
                </div>
              </div>
            </div>
            
            <div className="accident-details">
              <h2>{selectedAccident.title}</h2>
              
              <div className="detail-group">
                <div className="detail-item">
                  <strong>Date:</strong> {selectedAccident.date}
                </div>
                <div className="detail-item">
                  <strong>Location:</strong> {selectedAccident.location}
                </div>
                <div className="detail-item">
                  <strong>Severity:</strong> 
                  <span className={`severity-badge ${selectedAccident.severity.toLowerCase()}`}>
                    {selectedAccident.severity}
                  </span>
                </div>
              </div>
              
              <div className="detail-description">
                <h3>Incident Description</h3>
                <p>{selectedAccident.description}</p>
              </div>
              
              <div className="detail-group">
                <div className="detail-item">
                  <strong>Attending Tower:</strong> {selectedAccident.attendingTower}
                </div>
                <div className="detail-item">
                  <strong>Staff:</strong> {selectedAccident.staff}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AccidentGallery;
