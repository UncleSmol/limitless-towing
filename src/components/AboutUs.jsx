import React from 'react';
import '../styles/AboutUs.css';
import { FaMapMarkerAlt, FaTools, FaUserFriends, FaClock, FaTrophy, FaQuoteLeft, FaStar, FaStarHalf, FaTruck, FaThumbsUp, FaPhone } from 'react-icons/fa';
import { MdHighQuality, MdOutlineTimer } from 'react-icons/md';
import { GiReceiveMoney } from 'react-icons/gi';
import { RiCustomerService2Fill } from 'react-icons/ri';

// Company owner image
import ownerImage from '../images/owner.jpg'; // You'll need to add this image

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <section className="about-us-hero">
        <div className="about-us-overlay"></div>
        <div className="about-us-content">
          <h1 className="font-primary">About Limitless Towing</h1>
          <p className="font-secondary">Your trusted towing partner in Witbank, Mpumalanga since 2018</p>
        </div>
      </section>
      
      <section className="company-info">
        <div className="company-story">
          <h2 className="font-primary">Our Story</h2>
          <div className="story-content">
            <div className="story-text">
              <p>
                Limitless Towing was founded in 2018 by Herman, a Witbank local with over 15 years of experience in vehicle recovery. What started as a single tow truck operation has grown into a reliable service that the Witbank community trusts for all their vehicle recovery needs.
              </p>
              <p>
                Based in Witbank, Mpumalanga, we serve the entire region with prompt, professional towing services. Our team understands that vehicle breakdowns are stressful, which is why we prioritize quick response times and friendly service.
              </p>
              <p className="font-bold">
                Our mission: To provide the most reliable, efficient, and affordable towing services in Mpumalanga, ensuring no driver is ever left stranded.
              </p>
            </div>
            <div className="founder-image">
              <img src={ownerImage} alt="Herman, Founder of Limitless Towing" />
              <p>Herman, Founder</p>
            </div>
          </div>
        </div>
        
        <div className="company-stats">
          <div className="stat-item">
            <FaClock className="stat-icon" />
            <h3 className="font-secondary">24/7</h3>
            <p>Emergency Service</p>
          </div>
          <div className="stat-item">
            <FaTruck className="stat-icon" />
            <h3 className="font-secondary">1000+</h3>
            <p>Successful Tows</p>
          </div>
          <div className="stat-item">
            <FaMapMarkerAlt className="stat-icon" />
            <h3 className="font-secondary">Witbank</h3>
            <p>& Surrounding Areas</p>
          </div>
          <div className="stat-item">
            <FaUserFriends className="stat-icon" />
            <h3 className="font-secondary">100%</h3>
            <p>Customer Satisfaction</p>
          </div>
        </div>
      </section>
      
      <section className="why-choose-us">
        <h2 className="font-primary">Why Choose Limitless Towing?</h2>
        <div className="features-grid">
          <div className="feature">
            <MdOutlineTimer className="feature-icon" />
            <h3 className="font-secondary">Quick Response</h3>
            <p>We understand emergencies and aim to reach you within 30-45 minutes in the Witbank area.</p>
          </div>
          <div className="feature">
            <MdHighQuality className="feature-icon" />
            <h3 className="font-secondary">Quality Service</h3>
            <p>Professional handling of all vehicle types with proper equipment and trained staff.</p>
          </div>
          <div className="feature">
            <GiReceiveMoney className="feature-icon" />
            <h3 className="font-secondary">Fair Pricing</h3>
            <p>Competitive, transparent pricing with no hidden costs or surprise fees.</p>
          </div>
          <div className="feature">
            <RiCustomerService2Fill className="feature-icon" />
            <h3 className="font-secondary">Customer First</h3>
            <p>Friendly, respectful service that puts your needs and concerns first.</p>
          </div>
        </div>
      </section>
      
      <section className="testimonials">
        <h2 className="font-primary">What Our Customers Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <div className="testimonial-header">
              <div className="client-info">
                <h3 className="font-secondary">Nosipho Mandlazi</h3>
                <p className="review-date">1 month ago</p>
              </div>
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="star" />
                ))}
              </div>
            </div>
            <div className="testimonial-body">
              <FaQuoteLeft className="quote-icon" />
              <p>"I highly recommend their services! They were fast, reliable, and affordable."</p>
            </div>
            <div className="testimonial-footer">
              <div className="positive-aspects">
                <FaThumbsUp className="thumbs-up" />
                <span>Fast Response, Reliable, Affordable</span>
              </div>
            </div>
          </div>
          
          <div className="testimonial-card">
            <div className="testimonial-header">
              <div className="client-info">
                <h3 className="font-secondary">Thami Kukulela</h3>
                <p className="review-date">4 years ago</p>
              </div>
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="star" />
                ))}
              </div>
            </div>
            <div className="testimonial-body">
              <FaQuoteLeft className="quote-icon" />
              <p>"Herman made an effort to be there as soon as possible, a very friendly and kind guy. Top class assistance when you need his services."</p>
            </div>
            <div className="testimonial-footer">
              <div className="positive-aspects">
                <FaThumbsUp className="thumbs-up" />
                <span>Punctuality, Quality, Professionalism, Value</span>
              </div>
              <div className="services-used">
                <FaTools className="tools-icon" />
                <span>Car towing, Long distance haulage</span>
              </div>
            </div>
          </div>
          
          <div className="testimonial-card">
            <div className="testimonial-header">
              <div className="client-info">
                <h3 className="font-secondary">Vicky Harrison</h3>
                <p className="review-date">2 years ago</p>
              </div>
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="star" />
                ))}
              </div>
            </div>
            <div className="testimonial-body">
              <FaQuoteLeft className="quote-icon" />
              <p>"Excellent experience and best you can ask for."</p>
            </div>
            <div className="testimonial-footer">
              <div className="positive-aspects">
                <FaThumbsUp className="thumbs-up" />
                <span>Excellence, Reliability</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="overall-rating">
          <div className="rating-number">
            <h3 className="font-secondary">5.0</h3>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="star" />
              ))}
            </div>
            <p>Based on customer reviews</p>
          </div>
          <div className="review-cta">
            <p>Had a great experience with us?</p>
            <a 
              href="https://www.google.co.za/maps/place/Limitless+Towing+%26+Recovery/@-25.8750976,29.2486425,18z/data=!4m8!3m7!1s0x1eeaf3b7c6159b85:0x743b020997882405!8m2!3d-25.8748!4d29.24776!9m1!1b1!16s%2Fg%2F11qrkxfdjn?hl=en&entry=ttu&g_ep=EgoyMDI1MDQwMS4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-review">
              Leave a Review
            </a>
          </div>
        </div>
      </section>
      
      <section className="contact-cta">
        <div className="cta-content">
          <h2 className="font-primary">Need towing services in Witbank?</h2>
          <p>We're available 24/7 to help you get back on the road</p>
          <a href="tel:+27829518245" className="btn btn-primary">
            <FaPhone className="phone-icon" /> Call Now: 082 951 8245
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
