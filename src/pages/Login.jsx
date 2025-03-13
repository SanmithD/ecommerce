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
      backgroundColor: '#f3f4f6',
      padding: '2rem',
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '500px',
        padding: '3rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '@media (max-width: 640px)': {
          padding: '2rem',
          width: '90%',
        },
      }}>
        {/* Logo Section */}
        <div style={{
          marginBottom: '1.2rem',
        }}>
          <img
            src="data:image/png;base64,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"
            alt="TechShop Logo"
            style={{
              height: '120px',
              width: 'auto',
            }}
          />
        </div>

        {/* Form Container */}
        <div style={{
          width: '100%',
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: '#1f2937',
            textAlign: 'center',
            marginBottom: '1.5rem',
          }}>
            Welcome Back
          </h2>
          <p style={{
            color: '#6b7280',
            textAlign: 'center',
            marginBottom: '2.5rem',
          }}>
            Please enter your username to continue
          </p>

          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            {/* Username Field */}
            <div style={{
              position: 'relative',
            }}>
              <input
                id="username"
                name="username"
                type="text"
                placeholder='user name'
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.875rem 1.25rem',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  color: '#1f2937',
                }}
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              style={{
                padding: '1rem',
                backgroundColor: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                ':hover': {
                  backgroundColor: '#2563eb',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 12px rgba(59,130,246,0.2)',
                },
                ':active': {
                  transform: 'translateY(0)',
                },
              }}
            >
              Login
            </button>
          </form>
        </div>

        {/* Social Login Section */}
        <div style={{
          width: '100%',
          marginTop: '2rem',
          textAlign: 'center',
        }}>
          <p style={{
            color: '#6b7280',
            margin: '1rem 0',
          }}>
            Or continue with
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
          }}>
            <button style={{
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              ':hover': {
                borderColor: '#3b82f6',
              },
            }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.04C6.5 2.04 2.04 6.5 2.04 12.06C2.04 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.5 17.5 2.04 12 2.04Z" />
              </svg>
            </button>
            <button style={{
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              ':hover': {
                borderColor: '#3b82f6',
              },
            }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22 4.01C21.01 4.01 20 3.95 20 3.95C20 3.95 13.5 4.01 13.5 9.69C13.5 10.69 14 11.36 14.5 11.66C14 11.36 13.5 10.69 13.5 9.69C13.5 7.79 14.79 6.1 16.64 6.1C16.84 6.1 17 6.11 17.11 6.11C16.7 6.01 16.29 5.85 15.89 5.66C15.89 5.66 16.02 5.3 16.64 5.3C17.79 5.3 19 6.59 19 8.59C19 9.39 18.95 10.18 18.95 10.98C18.95 10.98 19 11.36 19 11.74C19 15.54 14.79 18 13.5 18C13.5 18 12.22 17.74 11.74 17.5C11.56 17.5 11.36 17.5 11.25 17.5C11.25 17.5 11.25 17.75 11.25 18C11.25 18.44 11.74 18.95 12.5 18.95C13.25 18.95 13.75 18.44 13.75 17.75C13.75 17.5 13.75 17.25 13.75 17C13.75 16.75 13.5 16.5 13.25 16.5C12.75 16.5 12.5 16.75 12.5 17.25C12.5 17.5 12.5 17.75 12.5 18C12.5 18.95 13.25 19.46 14 19.46C14.75 19.46 15.5 18.95 15.5 17.75C15.5 17.25 15.25 16.75 14.75 16.5C14.25 16.25 13.75 16.5 13.5 16.75C13.25 17 13 17.25 13 17.5C13 17.75 13.25 18 13.75 18C14.75 18 15.5 17.5 15.5 16.5C15.5 15.4 14.75 14.5 13.5 14.5C12.25 14.5 11.25 15.4 11.25 16.5C11.25 16.75 11 17 10.75 17C10.5 17 10.25 16.75 10.25 16.5C10.25 16 10.5 15.5 11 15.25C11.5 14.75 12.25 14.5 13 14.5C14.16 14.5 15 15.36 15 16.5C15 16.75 15 17 15 17.25C15 17.5 15 17.75 15 18C15 18.95 14.25 19.46 13.5 19.46C12.75 19.46 12 18.95 12 17.75C12 17.25 12 16.75 12 16.5C12 16.25 11.75 16 11.5 15.75C11.25 15.5 11 15.25 11 15C11 14.75 11.25 14.5 11.5 14.5C11.75 14.5 12 14.75 12 15C12 15.25 11.75 15.5 11.5 15.75C11.25 16 11 16.25 11 16.5C11 16.75 11 17.25 11 17.5C11 17.75 11 18 11 18.25C11 18.5 11.25 18.75 11.5 18.75C11.75 18.75 12 18.5 12 18.25C12 18 12 17.75 12 17.5C12 17.25 12 17 12 16.75C12 16.5 12.25 16.25 12.5 16C12.75 15.75 13 15.5 13.25 15.25C13.5 15 13.75 14.75 14 14.5C14.25 14.25 14.5 14 14.75 13.75C15 13.5 15.25 13.25 15.5 13C15.75 12.75 16 12.5 16.25 12.25C16.5 12 16.75 11.75 17 11.5C17.25 11.25 17.5 11 17.75 10.75C18 10.5 18.25 10.25 18.5 10C18.75 9.75 19 9.5 19.25 9.25C19.5 9 19.75 8.75 20 8.5C20.25 8.25 20.5 8 20.75 7.75C21 7.5 21.25 7.25 21.5 7C21.75 6.75 22 6.5 22 6.25C22 6 22 5.75 22 5.5C22 5.25 22 5 22 4.75C22 4.5 22 4.25 22 4.01Z" />
              </svg>
            </button>
          </div>
          {/* <p style={{
            color: '#6b7280',
            margin: '1rem 0',
          }}>
            Don't have an account? <a href="/register" style={{
              color: '#3b82f6',
              textDecoration: 'none',
              fontWeight: '600',
            }}>Sign up</a>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Login;