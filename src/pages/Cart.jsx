const Cart = ({ cartItems }) => {
    return (
      <div style={{
        padding: '3rem 1rem',
        '@media (min-width: 640px)': {
          padding: '3rem 2rem'
        }
      }}>
        <h1 style={{
          fontSize: '1.75rem',
          fontWeight: '700',
          marginBottom: '2rem'
        }}>Your Cart</h1>
        {cartItems.length === 0 ? (
          <p style={{
            textAlign: 'center',
            color: '#6b7280'
          }}>Your cart is empty</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item.id} style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1rem',
                padding: '1rem',
                backgroundColor: 'white',
                borderRadius: '0.5rem',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: '96px',
                    height: '96px',
                    objectFit: 'cover',
                    borderRadius: '0.5rem'
                  }}
                />
                <div style={{
                  marginLeft: '1rem',
                  flex: 1
                }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontFamily: 'sans-serif',
                    fontWeight: '600'
                  }}>{item.name}</h3>
                  <p style={{
                    color: '#6b7280',
                    fontSize: '1.2rem'
                  }}>${item.price}</p>
                </div>
              </div>
            ))}
            <div style={{
              marginTop: '2rem',
              padding: '1rem',
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              <p style={{
                fontSize: '1.25rem',
                fontWeight: '700'
              }}>Total: ${cartItems.reduce((sum, item) => sum + item.price, 0)}</p>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default Cart;