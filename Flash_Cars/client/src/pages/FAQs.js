import React, { useState } from 'react';

const FAQs = () => {
  const [showAnswers, setShowAnswers] = useState({});

  const toggleAnswer = (question) => {
    setShowAnswers((prevState) => ({
      ...prevState,
      [question]: !prevState[question],
    }));
  };

  const pageStyles = {
    backgroundColor: 'black',
    color: 'Turquoise',
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '1500px',
    margin: '0 auto',
  };

  const headingStyles = {
    color: 'Turquoise',
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
  };

  const questionStyles = {
    marginBottom: '30px',
    borderBottom: '1px solid #E0E0E0',
    paddingBottom: '20px',
    cursor: 'pointer',
  };

  const questionHeadingStyles = {
    color: 'Turquoise',
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
    textTransform: 'capitalize',
  };

  const answerStyles = {
    color: 'Turquoise',
    fontSize: '18px',
    lineHeight: '1.5',
    textAlign: 'justify',
    display: 'none',
  };

  const answerVisibleStyles = {
    display: 'block',
  };

  return (
    <div style={pageStyles}>
      <h1 style={headingStyles}>Frequently Asked Questions</h1>
      <p>
        Find answers to commonly asked questions about our car rental service.
      </p>

      <div
        style={questionStyles}
        onClick={() => toggleAnswer('question1')}
      >
        <h2 style={questionHeadingStyles}>How can I book a car for my next adventure?</h2>
        <p
          style={
            showAnswers['question1']
              ? { ...answerStyles, ...answerVisibleStyles }
              : answerStyles
          }
        >
          Answer: Start your next adventure by easily booking a car through our user-friendly website. Browse our extensive collection of vehicles, select your desired travel dates, provide the necessary information, and complete the reservation with a secure online payment. Once confirmed, you'll receive a detailed booking confirmation via email.
        </p>
      </div>

      <div
        style={questionStyles}
        onClick={() => toggleAnswer('question2')}
      >
        <h2 style={questionHeadingStyles}>What documents are required to rent a car?</h2>
        <p
          style={
            showAnswers['question2']
              ? { ...answerStyles, ...answerVisibleStyles }
              : answerStyles
          }
        >
          Answer: To rent a car, you'll need a valid driver's license, a major credit card for the security deposit, and any additional documents as per our rental policy. Take a moment to review our rental requirements to ensure a smooth rental experience.
        </p>
      </div>

      <div
        style={questionStyles}
        onClick={() => toggleAnswer('question3')}
      >
        <h2 style={questionHeadingStyles}>Can I modify or cancel my reservation?</h2>
        <p
          style={
            showAnswers['question3']
              ? { ...answerStyles, ...answerVisibleStyles }
              : answerStyles
          }
        >
          Answer: Absolutely! We understand plans may change. You have the flexibility to modify or cancel your reservation through our website or by contacting our dedicated customer support team. Please familiarize yourself with our cancellation policy for any applicable terms and conditions.
        </p>
      </div>

      <div
        style={questionStyles}
        onClick={() => toggleAnswer('question4')}
      >
        <h2 style={questionHeadingStyles}>Does the rental price include insurance?</h2>
        <p
          style={
            showAnswers['question4']
              ? { ...answerStyles, ...answerVisibleStyles }
              : answerStyles
          }
        >
          Answer: Our rental prices typically include basic insurance coverage. However, we offer additional insurance options during the booking process for enhanced peace of mind. Feel free to explore the insurance details and select the coverage that aligns with your needs.
        </p>
      </div>

      <div
        style={questionStyles}
        onClick={() => toggleAnswer('question5')}
      >
        <h2 style={questionHeadingStyles}>What if I encounter any issues with the car during my rental?</h2>
        <p
          style={
            showAnswers['question5']
              ? { ...answerStyles, ...answerVisibleStyles }
              : answerStyles
          }
        >
          Answer: In the unlikely event of any issues, rest assured that we have your back. Our dedicated 24/7 roadside assistance hotline is just a call away. Our expert team will guide you through the necessary steps and ensure prompt resolution, whether it's arranging repairs or providing a replacement vehicle.
        </p>
      </div>

      <p style={{ marginTop: '30px' }}>
        If you have any other questions or need further assistance, please don't hesitate to contact our friendly customer support team. We're here to make your car rental experience seamless and enjoyable!
      </p>
    </div>
  );
};

export default FAQs;