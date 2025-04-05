import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTiktok, FaFacebook, FaWhatsapp, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import '../styles/ContactUs.css';

const ContactUs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What areas do you service?",
      answer: "We provide towing services in Witbank, South Africa and surrounding areas."
    },
    {
      question: "How quickly can you respond to an emergency?",
      answer: "We aim to respond to emergencies as quickly as possible, typically within 30-60 minutes depending on your location and current demand."
    },
    {
      question: "Do you offer 24/7 service?",
      answer: "Yes, we provide round-the-clock towing services for emergencies, 7 days a week, 365 days a year."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, credit/debit cards, and electronic transfers for our services."
    },
    {
      question: "Do I need to be present with my vehicle during towing?",
      answer: "While it's preferable for you to be present, we can make arrangements if you're unable to be there. Just make sure to provide all necessary information when calling us."
    }
  ];
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <div>
                <h3>Address</h3>
                <p>26 Judy Street, Modelpark</p>
                <address>Witbank, Mpumalanga, RSA</address>
              </div>
            </div>
            
            <div className="info-item">
              <FaPhone className="info-icon" />
              <div>
                <h3>Phone</h3>
                <p>Call us for immediate assistance</p>
                <a href="tel:+27829518245" className="contact-link">082 951 8245</a>
              </div>
            </div>
            
            <div className="info-item">
              <FaWhatsapp className="info-icon" />
              <div>
                <h3>WhatsApp</h3>
                <p>Message us on WhatsApp</p>
                <a href="https://wa.me/27784237877" className="contact-link">+27 78 423 7877</a>
              </div>
            </div>
            
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <div>
                <h3>Email</h3>
                <p>Send us a message anytime</p>
                <a href="mailto:limitless.towing18@gmail.com" className="contact-link">limitless.towing18@gmail.com</a>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <h3>Send Us a Message</h3>
            <form>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Your Phone" />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
        
        <div className="faq-section">
          <h3>Frequently Asked Questions</h3>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              >
                <div 
                  className="faq-question" 
                  onClick={() => toggleFAQ(index)}
                >
                  <h4>{faq.question}</h4>
                  {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="social-media">
          <h3>Connect With Us</h3>
          <div className="social-icons">
            <a 
              href="https://www.tiktok.com/@limitlesstowing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaTiktok />
              <span>TikTok</span>
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=100057032366849" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaFacebook />
              <span>Facebook</span>
            </a>
            <a 
              href="https://wa.me/27784237877" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaWhatsapp />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
