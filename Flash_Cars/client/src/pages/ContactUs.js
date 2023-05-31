import React from 'react';

const ContactUs = () => {
  const pageStyles = {
    backgroundColor: 'black',
    color: 'Turquoise',
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '1500px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const headingStyles = {
    color: 'Turquoise',
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
    textTransform: 'uppercase',
  };

  const contactInfoStyles = {
    marginTop: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const addressStyles = {
    marginBottom: '10px',
  };

  const contactItemStyles = {
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '50%',
    backgroundColor: '#0084FF',
    padding: '10px',
  };

  const contactIconStyles = {
    marginRight: '10px',
    fontSize: '20px',
    color: '#FFFFFF',
  };

  const contactTextStyles = {
    fontSize: '16px',
    lineHeight: '1.5',
    color: '#FFFFFF',
  };

  const descriptionStyles = {
    marginTop: '40px',
    fontSize: '16px',
    lineHeight: '1.6',
    textAlign: 'center',
  };

  return (
    <div style={pageStyles}>
      <h1 style={headingStyles}>Contact Us</h1>
      <p>
        Have a question or need assistance? We're here to help!
      </p>

      <div style={contactInfoStyles}>
        <h2 style={headingStyles}>Contact Information</h2>

        <p style={addressStyles}>
          <strong>Address:</strong> 123 Guichet Street, Montrea, Canada.
        </p>

        <div style={contactItemStyles}>
          <i className="fas fa-envelope" style={contactIconStyles}></i>
          <p style={contactTextStyles}>
            <strong>Email:</strong> flashcars@gmail.com
          </p>
        </div>

        <div style={contactItemStyles}>
          <i className="fas fa-phone-alt" style={contactIconStyles}></i>
          <p style={contactTextStyles}>
            <strong>Phone:</strong> +1 514-456-7890
          </p>
        </div>

        <div style={contactItemStyles}>
          <i className="fab fa-twitter" style={contactIconStyles}></i>
          <p style={contactTextStyles}>
            <strong>Twitter:</strong> Flashcars
          </p>
        </div>

        <div style={contactItemStyles}>
          <i className="fab fa-instagram" style={contactIconStyles}></i>
          <p style={contactTextStyles}>
            <strong>Instagram:</strong> FlashcarsMazaa
          </p>
        </div>
      </div>

      <p style={descriptionStyles}>
        We're available during business hours to assist you with any inquiries. Feel free to reach out to us via email or phone, or visit our office if you prefer in-person assistance. We strive to provide prompt and helpful support to our valued customers.
      </p>

      <p style={descriptionStyles}>
        Thank you for choosing our sports car rental service. We look forward to hearing from you!
      </p>
    </div>
  );
};

export default ContactUs;