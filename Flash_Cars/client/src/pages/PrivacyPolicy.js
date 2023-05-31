import React from 'react';

const PrivacyPolicy = () => {
  const pageStyles = {
    backgroundColor: 'black',
    color: 'white',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    borderRadius: '10px',
  };

  const headingStyles = {
    color: 'turquoise',
    borderBottom: '3px solid turquoise',
    paddingBottom: '10px',
    display: 'inline-block',
    borderRadius: '50%',
    padding: '10px',
    cursor: 'pointer',
  };

  const listItemStyles = {
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
  };

  const circleStyles = {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: 'turquoise',
    marginRight: '10px',
  };

  return (
    <div style={pageStyles}>
      <h1 style={headingStyles}>Privacy Policy</h1>

      <section>
        <h2 style={headingStyles}>1. Information Collection</h2>
        <p>
          We collect personal information from users when they make a reservation or create an account on our website. The information may include name, email address, phone number, and payment details. We use this information solely for the purpose of processing reservations and providing customer support.
        </p>
      </section>

      <section>
        <h2 style={headingStyles}>2. Data Storage and Security</h2>
        <p>
          We take appropriate measures to protect the personal information we collect. All data is stored securely and access is limited to authorized personnel only. We employ industry-standard security practices to safeguard user data against unauthorized access, alteration, or disclosure.
        </p>
      </section>

      <section>
        <h2 style={headingStyles}>3. Information Usage</h2>
        <p>
          The personal information we collect is used to process reservations, communicate with users, and provide customer support. We may also use the information to send promotional emails or updates about our services, but users can opt out of receiving such communications at any time.
        </p>
      </section>

      <section>
        <h2 style={headingStyles}>4. Information Sharing</h2>
        <p>
          We do not sell, trade, or rent users' personal information to third parties. However, we may share certain information with our trusted partners and service providers who assist us in delivering our services. These parties are obligated to keep the information confidential and are prohibited from using it for any other purpose.
        </p>
      </section>

      <section>
        <h2 style={headingStyles}>5. Cookies</h2>
        <p>
          Our website uses cookies to enhance the user experience and collect non-personal information. Cookies are small files stored on the user's device that help analyze website usage and tailor content to the user's preferences. Users can disable cookies in their browser settings, but this may affect certain functionalities of the website.
        </p>
      </section>

      <section>
        <h2 style={headingStyles}>6. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these external sites. Users are encouraged to review the privacy policies of those websites before providing any personal information.
        </p>
      </section>

      <section>
        <h2 style={headingStyles}>7. Changes to the Privacy Policy</h2>
        <p>
          We reserve the right to update or modify this Privacy Policy at any time. Users will be notified of any changes via email or through a prominent notice on our website. Continued use of our services after the changes constitutes acceptance of the revised Privacy Policy.
        </p>
      </section>

      <p style={{ color: 'Turquoise' }}>
        If you have any questions or concerns about our Privacy Policy, please contact our customer support team for assistance.
      </p>
    </div>
  );
};

export default PrivacyPolicy;