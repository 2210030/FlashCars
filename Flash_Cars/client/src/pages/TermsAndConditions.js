import React from 'react';

const TermsAndConditions = () => {
  const pageStyles = {
    backgroundColor: 'black',
    color: 'white',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    borderRadius: '10px',
  };

  const headingStyles = {
    color: 'turquoise',
    borderBottom: '2px solid turquoise',
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
      <h1 style={headingStyles}>
        Terms and Conditions
      </h1>

      <section>
        <h2 style={headingStyles}>
          1. Rental Agreement
        </h2>
        <p>
          By renting a car from our website, you agree to the terms and conditions outlined in this rental agreement. It is important to carefully read and understand the terms before proceeding with a reservation.
        </p>
      </section>

      <section>
        <h2 style={headingStyles}>
          2. Eligibility
        </h2>
        <p>
          To be eligible to rent a car, you must meet the following requirements:
        </p>
        <ul>
          <li style={listItemStyles}>
            <div style={circleStyles}></div>
            Be at least 21 years old
          </li>
          <li style={listItemStyles}>
            <div style={circleStyles}></div>
            Hold a valid driver's license
          </li>
          <li style={listItemStyles}>
            <div style={circleStyles}></div>
            Have a major credit card in your name for the security deposit
          </li>
        </ul>
      </section>

      <section>
        <h2 style={headingStyles}>
          3. Reservation and Payment
        </h2>
        <p>
          To reserve a car, you must provide accurate and complete information, including the rental dates and personal details. Payment for the reservation is required at the time of booking and can be made using a major credit card.
        </p>
      </section>

      <section>
        <h2 style={headingStyles}>
          4. Rental Period
        </h2>
        <p>
          The rental period begins at the designated pickup time and ends at the designated return time. Late returns may be subject to additional charges. Please refer to the rental agreement for specific details regarding extensions or early returns.
        </p>
      </section>

      <section>
        <h2 style={headingStyles}>
          5. Insurance and Liability
        </h2>
        <p>
          Our rental prices typically include basic insurance coverage. However, it is important to review the insurance details and understand the coverage and any deductibles or exclusions. Any damages or accidents during the rental period are the renter's responsibility, subject to the terms of the insurance policy.
        </p>
      </section>

      <section>
        <h2 style={headingStyles}>
           6. Cancellation and Refunds
        </h2>
        <p>
          Cancellations made within a certain period may be eligible for a refund, subject to our cancellation policy. Refunds will be issued using the original payment method. Please review the cancellation policy for specific terms and conditions.
        </p>
      </section>

      <section>
        <h2 style={headingStyles}>
          7. Vehicle Usage
        </h2>
        <p>
          The rented vehicle should only be used for its intended purpose and by authorized drivers. It is prohibited to use the vehicle for illegal activities or in violation of traffic laws. Any fines, penalties, or legal consequences resulting from misuse or improper usage of the vehicle are the renter's responsibility.
        </p>
      </section>

      <p style={{ color: 'Turquoise' }}>
        These terms and conditions constitute the agreement between the renter and our car rental service. By proceeding with a reservation, you acknowledge that you have read, understood, and agreed to these terms. If you have any questions or concerns, please contact our customer support team for clarification.
      </p>
    </div>
  );
};

export default TermsAndConditions;