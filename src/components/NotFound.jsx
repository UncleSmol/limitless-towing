import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.css';

const NotFound = () => {
  useEffect(() => {
    document.title = '404 - Page Not Found | Limitless Towing';
  }, []);

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Oops! Page Not Found</h2>
        <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        
        <div className="not-found-image">
          <img src="/broken-truck.svg" alt="Broken down truck" />
        </div>
        
        <p>Let us help you get back on the road!</p>
        
        <div className="not-found-actions">
          <Link to="/" className="btn btn-primary">
            Go Home
          </Link>
          <Link to="/services" className="btn btn-outline">
            Our Services
          </Link>
          <Link to="/contact" className="btn btn-outline">
            Call For Help
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
