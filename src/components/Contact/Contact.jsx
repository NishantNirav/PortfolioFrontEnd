import React, { useState } from 'react';
import './Contact.css';
import './ResponsiveContact.css'
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submissionMessage, setSubmissionMessage] = useState('');

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission (frontend placeholder)
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmissionMessage('Please fill out all required fields.');
      return;
    }

    console.log('Form Submitted (Frontend Only):', formData);
    
    // Simulate successful submission
    setSubmissionMessage('Thank you for your message! I will get back to you shortly.');
    setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
    
    // In a real application, this is where you would integrate your backend API call (e.g., using fetch or Axios)
    // to send the data to a serverless function, dedicated backend, or email service.
  };

  // Replace with your actual contact details and social links
  const contactDetails = [
    { icon: '📧', label: 'Email', value: 'nishantnirava@gmail.com', link: 'mailto:nishantnirava@gmail.com' },
    { icon: '📍', label: 'Location', value: 'Pune, India', link: 'https://maps.google.com/?q=Pune' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: 'In', url: 'https://in.linkedin.com/in/nishant-nirava' },
    { name: 'GitHub', icon: 'git', url: 'https://github.com/NishantNirav/' },
    // { name: 'Twitter', icon: 'X', url: 'https://twitter.com/nishantnirav' },
  ];

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-subtitle">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>

      <div className="contact-content-wrapper">
        
        {/* Left Side: Contact Details and Social Links */}
        <div className="contact-details-panel">
          <h3 className="panel-header">Contact Information</h3>
          {contactDetails.map((detail, index) => (
            <div key={index} className="detail-item">
              <span className="detail-icon">{detail.icon}</span>
              <div>
                <p className="detail-label">{detail.label}</p>
                <a href={detail.link} className="detail-value">{detail.value}</a>
              </div>
            </div>
          ))}

          <h3 className="panel-header social-header">Connect With Me</h3>
          <div className="social-links-bar">
            {socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-link"
                aria-label={`Visit Nishant Nirav's ${link.name}`}
              >
                {/* Using simple text/emojis for icons, replace with proper SVG/Font Icons if available */}
                <span className={`social-icon ${link.name.toLowerCase()}`}>{link.icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="contact-form-panel">
          <h3 className="panel-header">Send a Message</h3>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group half-width">
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name *" 
                value={formData.name} 
                onChange={handleChange} 
                className="form-input" 
                required 
              />
            </div>
            <div className="form-group half-width">
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email *" 
                value={formData.email} 
                onChange={handleChange} 
                className="form-input" 
                required 
              />
            </div>
            <div className="form-group full-width">
              <input 
                type="text" 
                name="subject" 
                placeholder="Subject" 
                value={formData.subject} 
                onChange={handleChange} 
                className="form-input" 
              />
            </div>
            <div className="form-group full-width">
              <textarea 
                name="message" 
                placeholder="Your Message *" 
                rows="6" 
                value={formData.message} 
                onChange={handleChange} 
                className="form-textarea" 
                required 
              ></textarea>
            </div>
            
            {submissionMessage && (
                <div className={`submission-message ${submissionMessage.includes('Thank you') ? 'success' : 'error'}`}>
                    {submissionMessage}
                </div>
            )}
            
            <div className="form-group full-width submit-group">
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
