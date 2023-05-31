import React from 'react';
import MamathaImage from './IMG_1661.jpeg';
import SukithImage from './Sukith.jpg';
import PoojithaImage from './Poojitha.jpg';

const About = () => {
  const pageStyles = {
    backgroundColor: 'black',
    color: 'white',
    padding: '20px',
    fontFamily: 'Montserrat',
  };

  const headingStyles = {
    color: 'Turquoise',
  };

  const teamContainerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: '10px',
  };

  const teamMemberStyles = {
    width: '40%',
    textAlign: 'center',
  };

  const teamMemberImageStyles = {
    width: '280px',
    height: '290px',
    marginBottom: '10px',
    borderRadius: '50%',
    objectFit: 'cover',
    opacity: 1,
    transition: 'opacity 0.3s ease',
  };

  const [activeMember, setActiveMember] = React.useState(null);

  const handleImageClick = (memberName) => {
    setActiveMember((prevActiveMember) =>
      prevActiveMember === memberName ? null : memberName
    );
  };

  return (
    <div style={pageStyles}>
      <h1 style={headingStyles}>About Us</h1>
      <p>Welcome to our sports car rental website!</p>

      <h2 style={headingStyles}>Website Overview</h2>
      <p>
        Our website offers a unique opportunity for car enthusiasts to experience
        high-end sports cars that are not readily available on a regular basis. We aim
        to provide an exhilarating driving experience for our customers, bringing the
        thrill of sports car driving to everyone.
      </p>

      <h2 style={headingStyles}>Our Team</h2>

      <div style={teamContainerStyles}>
        <div style={teamMemberStyles}>
          <img
            src={MamathaImage}
            alt="Mamatha"
            style={{
              ...teamMemberImageStyles,
              opacity: activeMember === 'Mamatha' ? 0.5 : 1,
            }}
            onClick={() => handleImageClick('Mamatha')}
          />
          <h3 style={headingStyles}>Mamatha</h3>
          {activeMember === 'Mamatha' && (
            <p>
              <strong style={{ color: 'orange' }}>
                Backend Developer and Database Manager
              </strong>
              <br />
              Mamatha is responsible for the backend development, database management,
              API development, and the implementation of new features and pages. Her
              expertise ensures a seamless and robust experience for our users.
            </p>
          )}
        </div>

        <div style={teamMemberStyles}>
          <img
            src={SukithImage}
            alt="Sukhith"
            style={{
              ...teamMemberImageStyles,
              opacity: activeMember === 'Sukhith' ? 0.5 : 1,
            }}
            onClick={() => handleImageClick('Sukhith')}
          />
          <h3 style={headingStyles}>Sukhith</h3>
          {activeMember === 'Sukhith' && (
            <p>
              <strong style={{ color: 'orange' }}>
                Website Designer and Front-End Developer
              </strong>
              <br />
              Sukhith is our talented website designer and front-end developer. He is
              responsible for creating captivating designs and delivering an exceptional
              user interface. His attention to detail enhances the overall experience of
              our website.
            </p>
          )}
        </div>

        <div style={teamMemberStyles}>
          <img
            src={PoojithaImage}
            alt="Poojitha"
            style={{
              ...teamMemberImageStyles,
              opacity: activeMember === 'Poojitha' ? 0.5 : 1,
            }}
            onClick={() => handleImageClick('Poojitha')}
          />
          <h3 style={headingStyles}>Poojitha</h3>
          {activeMember === 'Poojitha' && (
            <p>
              <strong style={{ color: 'orange' }}>
                Documentation and Testing Specialist
              </strong>
              <br />
              Poojitha ensures the quality and reliability of our website through
              meticulous testing and comprehensive documentation. Her dedication to
              maintaining high standards guarantees a seamless and bug-free experience
              for our users.
            </p>
          )}
        </div>
      </div>

      <p>
        Thank you for visiting our website! We are excited to bring you an exceptional
        sports car rental experience that exceeds your expectations.
      </p>
    </div>
  );
};

export default About;