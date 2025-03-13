const Footer = () => {
    return (
      <footer style={{
        backgroundColor: '#374151',
        color: 'white',
        padding: '2rem 1rem',
        marginTop: '4rem',
        '@media (min-width: 640px)': {
          padding: '2rem 2rem'
        }
      }}>
        <div style={{
          maxWidth: '100%',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2rem',
          '@media (min-width: 768px)': {
            gridTemplateColumns: 'repeat(3, 1fr)'
          }
        }}>
          <div>
            <h3 style={{
              fontSize: '1.125rem',
              fontWeight: '600',
              marginBottom: '1rem'
            }}>TechStore</h3>
            <p style={{
              color: '#e5e7eb',
              lineHeight: '1.5'
            }}>Your premier destination for high-quality electronic devices and gadgets.</p>
          </div>
          <div>
            <h3 style={{
              fontSize: '1.125rem',
              fontWeight: '600',
              marginBottom: '1rem'
            }}>Quick Links</h3>
            <ul style={{
              listStyleType: 'none',
              padding: 0
            }}>
              <li style={{
                marginBottom: '0.5rem'
              }}>
                <a href="/" style={{
                  color: '#9ca3af',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  ':hover': {
                    color: 'white'
                  }
                }}>Home</a>
              </li>
              <li style={{
                marginBottom: '0.5rem'
              }}>
                <a href="/products" style={{
                  color: '#9ca3af',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  ':hover': {
                    color: 'white'
                  }
                }}>Products</a>
              </li>
              <li style={{
                marginBottom: '0.5rem'
              }}>
                <a href="/cart" style={{
                  color: '#9ca3af',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  ':hover': {
                    color: 'white'
                  }
                }}>Cart</a>
              </li>
              <li style={{
                marginBottom: '0.5rem'
              }}>
                <a href="/about" style={{
                  color: '#9ca3af',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  ':hover': {
                    color: 'white'
                  }
                }}>About</a>
              </li>
              <li style={{
                marginBottom: '0.5rem'
              }}>
                <a href="/contact" style={{
                  color: '#9ca3af',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  ':hover': {
                    color: 'white'
                  }
                }}>Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 style={{
              fontSize: '1.125rem',
              fontWeight: '600',
              marginBottom: '1rem'
            }}>Contact Us</h3>
            <p style={{
              color: '#e5e7eb',
              marginBottom: '0.5rem'
            }}>Email: contact@techstore.com</p>
            <p style={{
              color: '#e5e7eb',
              marginBottom: '0.5rem'
            }}>Phone: (123) 456-7890</p>
            <p style={{
              color: '#e5e7eb'
            }}>Address: 123 Tech Street, Silicon Valley, CA 94089</p>
          </div>
        </div>
        <div style={{
          marginTop: '2rem',
          borderTop: '1px solid #4b5563',
          paddingTop: '1rem',
          textAlign: 'center'
        }}>
          <p style={{
            color: '#9ca3af'
          }}>© 2023 TechStore. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;