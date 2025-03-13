export default function Home() {
    return (
      <div style={{
        padding: '20px',
        textAlign: 'center',
        fontFamily: 'sans-serif'
      }}>
        <h1 style={{
          color: '#333',
          marginBottom: '20px'
        }}>Welcome to TechShop</h1>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          flexWrap: 'wrap'
        }}>
          <div style={{
            backgroundColor: '#f5f5f5',
            padding: '20px',
            borderRadius: '10px',
            width: '300px',
            '@media (max-width: 768px)': {
              width: 'calc(50% - 10px)'
            },
            '@media (max-width: 480px)': {
              width: '100%'
            }
          }}>
            <h3>Featured Products</h3>
            <p>Check out our latest gadgets and devices</p>
          </div>
          
          <div style={{
            backgroundColor: '#f5f5f5',
            padding: '20px',
            borderRadius: '10px',
            width: '300px',
            '@media (max-width: 768px)': {
              width: 'calc(50% - 10px)'
            },
            '@media (max-width: 480px)': {
              width: '100%'
            }
          }}>
            <h3>Special Offers</h3>
            <p>Enjoy up to 50% off on selected items</p>
          </div>
          
          <div style={{
            backgroundColor: '#f5f5f5',
            padding: '20px',
            borderRadius: '10px',
            width: '300px',
            '@media (max-width: 768px)': {
              width: 'calc(50% - 10px)'
            },
            '@media (max-width: 480px)': {
              width: '100%'
            }
          }}>
            <h3>New Arrivals</h3>
            <p>Discover the latest tech innovations</p>
          </div>
        </div>
        
      </div>
    )
  }