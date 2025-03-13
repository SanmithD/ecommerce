const Contact = () => {
    return (
      <div style={{
        padding: '3rem 1rem',
        fontFamily: 'sans-serif',
        '@media (min-width: 640px)': {
          padding: '3rem 2rem',
        }
      }}>
        <h1 style={{
          fontSize: '2.75rem',
          fontWeight: '700',
          marginBottom: '2rem'
        }}>Contact Us</h1>
        <div style={{
          maxWidth: '42rem'
        }}>
          <p style={{
            color: '#6b7280',
            marginBottom: '1rem',
            fontSize: '1.75rem',
            lineHeight: '1.5'
          }}>
            Have questions or need assistance? Feel free to reach out to us:
          </p>
          <ul style={{
            paddingLeft: '1.5rem',
            listStyleType: 'disc',
            fontSize: '1.5rem'
          }}>
            <li style={{
              marginBottom: '0.5rem'
            }}>Email: contact@techstore.com</li>
            <li style={{
              marginBottom: '0.5rem'
            }}>Phone: (123) 456-7890</li>
            <li style={{
              marginBottom: '0.5rem'
            }}>Address: 123 Tech Street, Silicon Valley, CA 94089</li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Contact;