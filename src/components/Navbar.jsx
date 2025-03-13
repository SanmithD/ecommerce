import { Link } from 'react-router-dom';

const Navbar = ({ user }) => (
  <nav style={{
    backgroundColor: 'white',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    width: '100%',
    fontFamily: 'sans-serif'
  }}>
    <div style={{
      maxWidth: '100%',
      margin: '0 auto',
      padding: '0 1.25rem',
      '@media (min-width: 640px)': {
        padding: '0 1.5rem'
      },
      '@media (min-width: 1024px)': {
        padding: '0 2rem'
      }
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        height: '64px',
        alignItems: 'center'
      }}>
        <div style={{
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center'
        }}>
          <span style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: '#3b82f6'
          }}>TechStore</span>
        </div>
        <div style={{
          display: 'none',
          marginLeft: '1.5rem',
          display: 'flex',
          gap: '2rem',
          '@media (min-width: 640px)': {
            display: 'flex'
          }
        }}>
          <Link to="/" style={{
            color: '#4b5563',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            padding: '0 0.25rem',
            paddingTop: '0.25rem',
            fontSize: '1.25rem',
            fontWeight: '500',
            transition: 'color 0.3s ease',
            ':hover': {
              color: '#3b82f6'
            }
          }}>
            Home
          </Link>
          <Link to="/products" style={{
            color: '#4b5563',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            padding: '0 0.25rem',
            paddingTop: '0.25rem',
            fontSize: '1.25rem',
            fontWeight: '500',
            transition: 'color 0.3s ease',
            ':hover': {
              color: '#3b82f6'
            }
          }}>
            Products
          </Link>
          <Link to="/cart" style={{
            color: '#4b5563',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            padding: '0 0.25rem',
            paddingTop: '0.25rem',
            fontSize: '1.25rem',
            fontWeight: '500',
            transition: 'color 0.3s ease',
            ':hover': {
              color: '#3b82f6'
            }
          }}>
            Cart
          </Link>
          <Link to="/about" style={{
            color: '#4b5563',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            padding: '0 0.25rem',
            paddingTop: '0.25rem',
            fontSize: '1.25rem',
            fontWeight: '500',
            transition: 'color 0.3s ease',
            ':hover': {
              color: '#3b82f6'
            }
          }}>
            About
          </Link>
          <Link to="/contact" style={{
            color: '#4b5563',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            padding: '0 0.25rem',
            paddingTop: '0.25rem',
            fontSize: '1.25rem',
            fontWeight: '500',
            transition: 'color 0.3s ease',
            ':hover': {
              color: '#3b82f6'
            }
          }}>
            Contact
          </Link>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center'
        }}>
          {!user ? (
            <Link to="/login" style={{
              color: '#4b5563',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              padding: '0.5rem 1.25rem',
              fontSize: '1.25rem',
              fontWeight: '500',
              transition: 'color 0.3s ease',
              ':hover': {
                color: '#3b82f6'
              }
            }}>
              Login
            </Link>
          ) : (
            <span style={{
              color: '#4b5563',
              padding: '0.5rem 1.25rem',
              fontSize: '1.25rem',
              fontWeight: '500'
            }}>
              Welcome, {user}
            </span>
          )}
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;