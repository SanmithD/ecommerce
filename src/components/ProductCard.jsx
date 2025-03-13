const ProductCard = ({ product, addToCart }) => {
  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '0.5rem',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      overflow: 'hidden',
      width: '100%'
    }}>
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: '100%',
          height: '256px',
          objectFit: 'cover'
        }}
      />
      <div style={{
        padding: '1rem'
      }}>
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: '600',
          marginBottom: '0.5rem'
        }}>{product.name}</h3>
        <p style={{
          color: '#6b7280',
          marginBottom: '0.75rem'
        }}>{product.description}</p>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <span style={{
            fontSize: '1.125rem',
            fontWeight: '600'
          }}>${product.price}</span>
          <button
            onClick={() => addToCart(product)}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '0.375rem',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              ':hover': {
                backgroundColor: '#2563eb'
              }
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;