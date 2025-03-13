const About = () => {
    return (
      <div style={{
        padding: '3rem 1rem',
        '@media (min-width: 640px)': {
          padding: '3rem 2rem'
        }
      }}>
        <h1 style={{
          fontSize: '2.75rem',
          fontWeight: '700',
          fontFamily: 'sans-serif',
          marginBottom: '2rem'
        }}>About Us</h1>
        <p style={{
          color: '#6b7280',
          maxWidth: '42rem',
          lineHeight: '1.5',
          fontSize: '1.75rem',
          fontFamily: 'sans-serif'
        }}>
          TechStore is your premier destination for high-quality electronic devices. 
          We pride ourselves on offering the latest technology at competitive prices.
          Our team of experts is dedicated to providing exceptional customer service 
          and ensuring you find the perfect device to meet your needs.
        </p>
      </div>
    );
  };
  
  export default About;