import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(username);
    navigate('/');
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f9fafb',
      padding: '2rem 1rem',
      '@media (min-width: 640px)': {
        padding: '4rem 2rem'
      },
      '@media (min-width: 1024px)': {
        padding: '5rem 4rem'
      }
    }}>
      <div style={{
        maxWidth: '48rem',
        width: '100%',
        space: '8'
      }}>
        <div>
          <h2 style={{
            marginTop: '1.5rem',
            textAlign: 'center',
            fontSize: '1.875rem',
            fontWeight: '800',
            color: '#1f2937'
          }}>
            Login to your account
          </h2>
        </div>
        <form style={{
          marginTop: '2rem',
          gap: '1.5rem',
          display: 'flex',
          flexDirection: 'column'
        }} onSubmit={handleSubmit}>
          <div style={{
            borderRadius: '0.5rem',
            boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
            space: '-1px'
          }}>
            <div>
              <label htmlFor="username" style={{
                position: 'absolute',
                clip: 'rect(0 0 0 0)',
                whiteSpace: 'nowrap'
              }}>Username</label>
              <input
                id="username"
                name="username"
                type="text"
                required
                style={{
                  appearance: 'none',
                  borderRadius: '0',
                  WebkitAppearance: 'none',
                  MozAppearance: 'none',
                  msAppearance: 'none',
                  WebkitBorderRadius: '0',
                  MozBorderRadius: '0',
                  WebkitBorderTopLeftRadius: '0.5rem',
                  WebkitBorderBottomLeftRadius: '0.5rem',
                  MozBorderRadiusTopLeft: '0.5rem',
                  MozBorderRadiusBottomLeft: '0.5rem',
                  WebkitBorderTopRightRadius: '0',
                  WebkitBorderBottomRightRadius: '0',
                  MozBorderRadiusTopRight: '0',
                  MozBorderRadiusBottomRight: '0',
                  position: 'relative',
                  block: 'block',
                  width: '100%',
                  padding: '0.5rem 1rem',
                  border: '1px solid #e5e7eb',
                  placeholder: '#9ca3af',
                  color: '#1f2937',
                  fontSize: '0.875rem',
                  fontFamily: 'system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
                  borderRadius: '0.25rem',
                  WebkitBorderRadius: '0.25rem',
                  MozBorderRadius: '0.25rem',
                  transition: 'border-color 0.3s ease',
                  ':focus': {
                    outline: 'none',
                    borderColor: '#3b82f6',
                    boxShadow: '0 0 0 2px rgba(59,130,246,0.3)'
                  },
                  ':focus-visible': {
                    outline: 'none',
                    borderColor: '#3b82f6',
                    boxShadow: '0 0 0 2px rgba(59,130,246,0.3)'
                  }
                }}
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              style={{
                WebkitAppearance: 'none',
                appearance: 'none',
                MozAppearance: 'none',
                msAppearance: 'none',
                backgroundColor: '#3b82f6',
                color: 'white',
                border: '1px solid transparent',
                padding: '0.5rem 1rem',
                fontSize: '0.875rem',
                fontWeight: '500',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
                ':hover': {
                  backgroundColor: '#2563eb'
                },
                ':active': {
                  backgroundColor: '#1d4ed8'
                },
                ':disabled': {
                  opacity: '0.5',
                  cursor: 'not-allowed'
                }
              }}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;