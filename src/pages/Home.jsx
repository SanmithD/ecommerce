import { Link, useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
  return (
    <div style={{
      padding: '20px',
      fontFamily: 'sans-serif',
      backgroundColor: '#f9fafb'
    }}>
      {/* Hero Section */}
      <div style={{
        textAlign: 'center',
        padding: '40px 0',
        backgroundColor: 'white',
        borderBottom: '1px solid #e5e7eb'
      }}>
        <h1 style={{
          color: '#1f2937',
          fontSize: '2.5rem',
          marginBottom: '1rem',
          fontWeight: '700'
        }}>Welcome to TechShop</h1>
        <p style={{
          color: '#6b7280',
          fontSize: '1.25rem',
          maxWidth: '600px',
          margin: '0 auto'
        }}>Your premier destination for cutting-edge electronic devices and gadgets at competitive prices.</p>
      </div>

      {/* Featured Sections */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        flexWrap: 'wrap',
        padding: '40px 0',
        '@media (max-width: 768px)': {
          flexDirection: 'column'
        }
      }}>
        <div style={{
          backgroundColor: '#f3f4f6',
          padding: '30px',
          borderRadius: '12px',
          width: '300px',
          '@media (max-width: 768px)': {
            width: '100%',
            maxWidth: '400px'
          }
        }}>
          <h3 style={{
            color: '#1f2937',
            fontSize: '1.25rem',
            marginBottom: '15px',
            fontWeight: '600'
          }}>Featured Products</h3>
          <p style={{
            color: '#6b7280',
            lineHeight: '1.5'
          }}>Discover our most popular gadgets and devices that customers love. All featuring the latest technology and innovative designs.</p>
        </div>
        
        <div style={{
          backgroundColor: '#f3f4f6',
          padding: '30px',
          borderRadius: '12px',
          width: '300px',
          '@media (max-width: 768px)': {
            width: '100%',
            maxWidth: '400px',
            marginTop: '20px'
          }
        }}>
          <h3 style={{
            color: '#1f2937',
            fontSize: '1.25rem',
            marginBottom: '15px',
            fontWeight: '600'
          }}>Special Offers</h3>
          <p style={{
            color: '#6b7280',
            lineHeight: '1.5'
          }}>Take advantage of our limited-time promotions and discounts. Enjoy up to 50% off on selected items across our store.</p>
        </div>
        
        <div style={{
          backgroundColor: '#f3f4f6',
          padding: '30px',
          borderRadius: '12px',
          width: '300px',
          '@media (max-width: 768px)': {
            width: '100%',
            maxWidth: '400px',
            marginTop: '20px'
          }
        }}>
          <h3 style={{
            color: '#1f2937',
            fontSize: '1.25rem',
            marginBottom: '15px',
            fontWeight: '600'
          }}>New Arrivals</h3>
          <p style={{
            color: '#6b7280',
            lineHeight: '1.5'
          }}>Stay ahead of the curve with our latest tech innovations. New products added weekly to keep you connected to the future.</p>
        </div>
      </div>

      {/* Promotional Banner */}
      <div style={{
        backgroundColor: '#3b82f6',
        color: 'white',
        padding: '40px 0',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '2rem',
          marginBottom: '15px',
          fontWeight: '700'
        }}>Summer Tech Sale!</h2>
        <p style={{
          fontSize: '1.25rem',
          maxWidth: '800px',
          margin: '0 auto 20px'
        }}>Upgrade your technology with our exclusive summer discounts. Limited time offers on all major brands.</p>
        <button style={{
          padding: '10px 20px',
          backgroundColor: 'white',
          color: '#3b82f6',
          border: 'none',
          borderRadius: '5px',
          fontWeight: '600',
          cursor: 'pointer',
          fontSize: '1rem'
        }}
        onClick={()=>navigate('/products')}
        >
          Shop Now
        </button>
      </div>

      {/* Products Section */}
      <div style={{
        padding: '50px 0',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '2.25rem',
          color: '#1f2937',
          marginBottom: '30px',
          fontWeight: '700'
        }}><Link to='/products'>Explore Our Products</Link></h2>
      </div>

      {/* Testimonials */}
      <div style={{
        backgroundColor: '#f3f4f6',
        padding: '50px 0',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '2rem',
          color: '#1f2937',
          marginBottom: '30px',
          fontWeight: '700'
        }}>What Our Customers Say</h2>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          gap: '30px',
          flexWrap: 'wrap'
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
            width: '300px',
            '@media (max-width: 768px)': {
              width: '100%',
              maxWidth: '400px'
            }
          }}>
            <p style={{
              color: '#6b7280',
              fontSize: '1rem',
              lineHeight: '1.5',
              marginBottom: '15px'
            }}>I've been shopping at TechShop for years now. Their product selection is amazing and their customer service is outstanding. Highly recommend!</p>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end'
            }}>
              <div style={{
                textAlign: 'right'
              }}>
                <h4 style={{
                  color: '#1f2937',
                  fontSize: '1.1rem',
                  margin: 0
                }}>Sarah Johnson</h4>
                <p style={{
                  color: '#6b7280',
                  fontSize: '0.9rem',
                  margin: '0'
                }}>Tech Enthusiast</p>
              </div>
            </div>
          </div>
          
          <div style={{
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
            width: '300px',
            '@media (max-width: 768px)': {
              width: '100%',
              maxWidth: '400px',
              marginTop: '30px'
            }
          }}>
            <p style={{
              color: '#6b7280',
              fontSize: '1rem',
              lineHeight: '1.5',
              marginBottom: '15px'
            }}>The prices here are unbeatable! I recently bought a laptop that was $300 cheaper than other stores. Plus, it arrived in perfect condition.</p>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end'
            }}>
              <div style={{
                textAlign: 'right'
              }}>
                <h4 style={{
                  color: '#1f2937',
                  fontSize: '1.1rem',
                  margin: 0
                }}>Michael Chen</h4>
                <p style={{
                  color: '#6b7280',
                  fontSize: '0.9rem',
                  margin: '0'
                }}>Professional Photographer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div style={{
        padding: '50px 0',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '2rem',
          color: '#1f2937',
          marginBottom: '20px',
          fontWeight: '700'
        }}>Subscribe to Our Newsletter</h2>
        <p style={{
          color: '#6b7280',
          fontSize: '1.1rem',
          marginBottom: '30px',
          maxWidth: '600px',
          margin: '0 auto'
        }}>Get the latest tech news, exclusive offers, and new product announcements directly to your inbox.</p>
        <div style={{
          maxWidth: '500px',
          margin: '0 auto'
        }}>
          <form style={{
            display: 'flex',
            gap: '10px'
          }}>
            <input
              type="email"
              placeholder="Enter your email address"
              style={{
                flex: 1,
                padding: '12px 15px',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '1rem'
              }}
            />
            <button type="submit" style={{
              padding: '12px 24px',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600'
            }}>
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Brand Partners */}
      <div style={{
        backgroundColor: '#f9fafb',
        padding: '40px 0',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '2rem',
          color: '#1f2937',
          marginBottom: '30px',
          fontWeight: '700'
        }}>Trusted by Leading Brands</h2>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '40px',
          flexWrap: 'wrap',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <img src="data:image/png;base64,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" alt="Apple" style={{
            height: '40px',
            opacity: '0.7',
            transition: 'opacity 0.3s ease',
            ':hover': {
              opacity: '1'
            }
          }} />
          <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBAQDxAQEA8QEBAPDxAQDw8PDw8PFREWFhURFRUYHSohGBolGxUVITIhMSkrOi4wFx81ODMuNygtLisBCgoKDg0OGxAQGi8lHx8tLTcvLTYrLS4rLSsxLystLS0uListNS0vLS4yNzAuLS0tLS0tLS0tKy0tLS0rLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAACAwAEAQYHBQj/xABOEAABAwIFAgIHAgcLCgcAAAABAAIDBBEFEhMhMQdRBkEUIjJhcYGRI6FCUmKisbPRFSUzU3J0dYKSlMIXJDVjc6OytMHwFiY2Q0RUg//EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EAC8RAQACAgECAwYFBQEAAAAAAAABAgMRBCExEhNBBTJRYZGhIkJxgbEUFcHh8FL/2gAMAwEAAhEDEQA/AO4qvU8j4LHpB7IgM+58kCouQriQY8u/ZD6QeyAZvaKKn5RCPNv3ULcm4QPVEpwnPZZ0QgzTcFMk4KSTk4UEpO3fZAlWoeEOgEJky7IDqOPmqycH5tii0Aga3gJFT5LGsRsiHr8+SBUfIVxJMVt0GueyDE/tKU/KMMzblQty7hA9Un8lM9IPZGIQd+6DFMnO4KS71OFgTE7W5QJVmn4Q6AWC/LsEDJ/ZVVOEmbYotAIK6isejhRAnTPZNiOUb7J6rVXIQMe8EWCRpnspFyFbQLjcALFYlNxtulTcoqflAOmeyeJB3TFRPKB0wzcboWMIIKZTcFMk4KDAkHdJkaSbhKVqHhAqIWNzsnag7oaj2fmqyAzGeyZD6vOyc3gJNT5IDc8EbFV9M9lI+QriBMbgBYqSkEWG5S6j2lKflAOmeysNeAOUxUn8oHTetxultYeyZTJzuD8EAag7pUrbm43CUrNPwgVG0g3PCfqDusT8Kqgt6g7qKoogPVd3TIxm53Q6BRNOXYoCewAEhJ1T3TTJcW7oNAoGMYCLnlDIMvGyy2TLsfJYc7NsEC9V3dPEQStAo9YDZAMpy8IWyE7XRuGfhCIiN+yB2kOyS95BsEeuELmZt0GI3FxseE3SCW1uXcotcIFGQ90yL1ud0JhJ3RN9TnzQG6MAXCRqnummUHZBoFAbG5hc8qSNyi4WGvyixWXPzbBArVd3T2xgi5StAoxMBt2QYl9XjZA2Q90bvW4QiEjdA3SHZKkcWmw4R64Qubm3CDEbiTY8J2kOyU1mXco9cIC0h2WEOuFlAy6RU8hJunwcIFxchW7pcg2Kq3QHN7RRU/KbCNghnGyByonn5rIKttCBdN5pknB+CTUeSXGdwgGytQ8I8oVWXlA6o9n5qsAmQcqzYII3gJNT5JLjunU+97oFRjdW0Lxsql0B1HtLMHKbCNlJxsgaqT+SsXVtg2QLp053BSajZKadwgABWoOEYAVeflA6f2VVsmQndWcoQUrKK7lCiBXo47oScmydqDukz7kW3QQS5tu6L0cd0uNpBuVY1B3QJ1Mu3ZQOz7IZWkkkC6zCLHfZAeh70OsR5J2cd1VLD2QNAz+6yhitv2UhNudkb3gg7+SBfpB7LIjzbpWmexT43ADdAJZl3WNc9kUxuNt0nIeyBuhfdYPqe+6a147hKn3tbflBNa+yL0cd1QlxCGIgyTRR2sTnkY3b5lVZ/G2Fs2diFID2E7CfoCrRS09oRuHrl+XZQPzbLU6rqLhIJPpjHfyWSu/Q1VGdU8Jab68h+FPOf8K0jj5Z/LP0R4q/FvPo/vQ61trcLTf8rWEfx0392n/YkHqlhJJ+2kG/nTzfsU/02b/zP0PHX4t6HrrOjbfstToeo+EG96xjb2tnZKz9LV69L4tw6baKupXk+Qnjv9CVScWSO9Z+ifFD0tc9kQZm3VeM5hdtnDu0gj6hWoTYWOxWaQmPLusekHsjlcCCBykaZ7H6IGekHsol6Z7H6LCDCsU/CLSCXKcvCBsvBVRMY8k2KdpBBIfZCGo4QPeQbDhZiOY2PZAlXQgMTRvxb3larjXj/D6QlslUx7wbacP27wexy3y/MhWpS151WNomdNmqfJLj5HxXJcX6zk3FLSX7SVL7bd8jD/iWmYp4/wAUqCc1U6Jp/Apw2AD4Ob635y7Mfs/Lbv0UnLEPo+sr4YRmmljib3ke1g+8rT8W6lYVE42qNYjygjfKOPxrZfvXz5NI57s0jnPf+M9xe76ndAuunsyke9O2c5p9HYarrPE2/o9FK4+RmlZEPjZmZeFX9YsSf/BR00A9zHyu+rjb7lzxRdNeHgr+VXzLNirPHeKy3zVszQfKLLD9MgBXjVGI1En8JUTyX51J5X3/ALRVZRdFaUr2hTchEYHAH0CysqKyEUUURKKKKIIsELKiINpKqWE3hllhPN4pHxG/xaQtpwrqRilPbNP6QwWu2oGoSP5Ys77ytRUVL46X96NpiZjs7r4S6p0lS5sdUPRJTsC5wdTucfIP/BPxA+K6QCvkJdh6LeKZZBJQTPL9KPVp3O3cIw4NdGSfIEtt8SF5XL4NaV8dPo3pk30l11RVdY9/0KLy2+jtcIHjNuElWKfg/FEAbGRufJM1x71Qx/G6aihMtVK2JnAufWefxWt5cfguOeJ+rE8pdHQM9Hi41ngOnd7wOGff8l0YeNky+7HT4q2vFe7trm5ibW8ja+4B93yK1jxRiWLQtcaCgjl2IzyTMc74tiaQXcfjfJUujNSJcOL3PMk5qJjUPe4ukL7jLmJ39jLZeP8A+KMQwmeq/dhs9RTySA0ksMcZhaMzvVzbZfVLfVO+x+KtXDNck1jUzX0+KJt025jj/inEKtz21dRMQHEOh/gY2kGxaY224990WE+DMRqomzU1I+SF5cGvD4mg5XFpsHOB5BCX4yxWGrrZ6qBrmRyljsrw0OzCNocTYkbkEruNI84b4eDxs+DDzIPL7Z0Zdf8AtuXq5s04aV8FYiZ9GNa+KZ3LhmOeGK2iax9XTuha92Rhc6Nwc617eqT5AqrhGEz1cujTRmWXK5+QFrTlba5u4geYXcOs1MJsK1W76UkMwP5JOUn6PXPuiY/fYe6ln/44lOPlWtgnJrrG0TT8WnjVngPFIY3yy0b2xxtc97tSE5WNFybB1+F52C4BVVpeKWF02nlL7OY3Lmvb2iOx+i+lKiUTyVtGf/rRm35MzZWf4FzTpGPRcNxGqk2LHyXPuggufzi76LCnOvOO1piNxr7rzjjbn+LeEq+kiM1TTOiiaWtLy+IgFxsBYOJ5K87DMNnqpBDTRPmldchjBc2HJJ4A95XcOq4vg0p/KpHX/wD2YvD6AaX+f8a/2Hx0bPtb+te/y9y0ry7TgnJMdY/0r5ceLTUX9MsWDS7QYbfgieIu+Fr/APVapV0z4nvjlY6OSM5XseMrmnsQu141jmIYbiM1RVCWbCHMIjEEcbxC6zSC/gtNw+5Jsbj5c36i+IqfEallRTskYBAI36jWtc5wc4g7E+RVuPmy3n8URqY7x/CLViOypP4OxFkBqn0r204jExlL4bCIi+a2a/B7JWEeFq6rYZaWndNGHFhc10YAeACW+s4Hgj6ruPiH/wBOS/0W39S1eN0RH73SfzuT9XGsv62/lTfUdJ0t5cbcZhw+V8wp2sJnMhhEd2g6odlLL3te4tyvck6fYs0FzqKQAAknUgOwF+A5NwU/v9H/AEo//mHL6CxCtDJoYXW+3bKW+90eU5f7Jcfkr8nl3xTWKx3jaK0iYfMmCYFVVuf0SIzaYaX5XMblDr5faI5sVWxKglppXwTsMc0eXOwlpLczQ4bgkcEH5rr3TTDfRcUxmDyYYCza32b3SSM/Ne0fJaT1JiEmOVDHey+WkY74OhiB/StKcmbZZp6a3/CLU1G1DBfBGIVkYlgpzpO3ZJI9kTXju3NuR77WS8d8HV9E3UqICIrgGRjmyRtJ4zFvs/Nds6n4pLh+HalIWxvD4oWHKHBjCbbA7cCy1bDuptBLQthxCRzqh8T45w2ncWOJuAdhbix+Kwx8nPePHFYmu+3qtNKx0249ZRYZewvzbdZXpMUXVOhmByOkqK0giMM9GiJ2D3FzXPPvAytHzK1PwN4KnxOQWvFStdaWcjnuyO/tO+4efZfRmF4fFTRRwQNDIo2hjGjyA7nzPnf3rzefyYrXy6957tsVJ3tnQPuUVlZXiunbGUdloPUXqBFh32MAE1YR7F/s4QeHSW8+zfP3K91F8XHD6Mvjt6RMTFT33DXWJMhHZo+8hfOc0jnuc97nPe8lz3uJc5zjy4nzK9HhcTzPx37fyxyZNdIWcXxSerlM9TK6WQ+bjs0fitHDW+4KoFFF7cREdIc7fPAXh/GGtbXYbJAxkt2ubLK4NlDHFtnsy7gG9t10rwR4uixXXpZ4Wsnia5s8JtLDI0OyFzSRuL+RHn5rnnTjqDHQRGlq2PMGdz45YxndGXbua5vJbffa/J2W103j7AKQyz0kbjPNd0gipJInyG5dYueAOTfnzXk8mmS1piab+Ex/ltWY13c/8ceGI6bFxRQC0U76bTZucgmflLPhe9vcR2XTur02nhMrAf4R8EIH5Oo0kfRpXLZPFwmxiPE6mN2lHK14ijyuc2ONhEbRewJzZSfmvV6jePYMTghhp4qiPJNqyawiAcAxzQBlefN1/ktb4slr4tx7vefmjxRES6TBH6d4fI5dNh1hfciQQ7fnNXNuh2+JSO7UMxHzlhXp+Cup9NQ0MNLPBUyPjzgujEJZlL3FoGZ4PB7LWOn/AIlp8Mq5p3xzSQuhkgjbGGGQAysc0nM4DhndVphyVplprv2TMxMxLqsVaWeIZIvKbDIiN/w453kfc5y8/wAVQfuf4er22s6aeqaB+TPWuDf92R9Fplf46gfjNNiUcc7YIotKSNzYxM4FsoNgHFv4bTz5JnUjqBDidIylp4p4rS6jzMIgHAMcABkc7zcD8lSONk8dOnTpv9tpm8dXQ+qw/eOY+6lP++jXJ/Anh7EZ3OqsNkjifA/TLnyujJJaHFtspDmkWuCtk8X9TKWtw6SjZBUtke2IB7xDp5mPa7yeT+D2WvdO/Gf7mSSCVjpKabLnDLajHtvZ7QbA7Egi/kFphx5aYLREdd9p+CtprNnVPCnjV8tXJheIQsZXRgtL4SX00xDA4ixF2nKb23Gx3XOOsnh2Ciq4n07RGyqjke6NoAYyRjgHFo8gc4Nvit0HUTAWzOrGxONWWZTIKVwmcLAWzEW4AHK5p498WOxSpbLk0oomGOFhILg0m7nOI2uTb6BV4uO8ZvFFZrGuv6/JN5jXd13xAf8Ay9L/AEY39SFV6E/6Nk/nkv6uJa14Q6l0zKVtHiMT3NZHoh7WCaOWG1gyRnN7bcEGy9Oo6pYbSU5iwymN/WMbBEKeBjz+E6+537DdY2wZYrOLwz1ne/RaLR3aHhf+nm/0pJ/zDl0zqdiZpJ8IqfKKtdm3/wDbdHlf+aXLjWC4no1kFVLmk052zyWtnec2Z1r7XJW0dR/HEGKRQRxQzxGKV0jjLpWLTGW2GVx33XZlwWtlp06RGp+6lbRqXa6fDQ3EJapo2qKSKNxHBdFI4g/Nsg/srhvUE/v/ADfzmk/VwrbMC6xQw00EU9NUSTRRMjkkYYcry0WzC7gfILnPjDGG1tdPVxtfG2UsLWvy525Y2t/BJHLbrHiYMlMkzePTSb2iYjTsvV+XLhpfa+SrpHWPBtJey97wxigrsOZVvhjjdLHKSxvrBuVzm7Ejfhad4T8fMxCL0Wqw+apeQ1kpjhZPTPI835iAw8Gx+q6AIWup9BjPRo3R6YZHptMTCLFrQ27QbdrriyROOsY7R1ie/wAmkamdvlnD6WSZzY4Y3yyOtlYxpc4/IfpXWPBfSMnLNiZFtiKWN17+dpXj/hH18l0nA/DFJRR6dLCyJthcht3vt5ued3fMr08+TblbZ/aFr9KdI+6tcUR3AymZFGGRMbGxgDWMY0Na1o4AA4CDMe6dqZtuFPR/evO21JzHuonej+9ZRDj3Xilk/wAxlsdMekRE72Ejsjmj5hjvoVydfV2OYPDWwPp6huaN438nNcOHNPk4HzXBfF3TetoS58bTVUwuRJE0mRrf9ZGN7+8XHwXtcDk08EY5nUx92GSk720tRYBusr0mSKKKIhFFFEEUUUQRRRRBFFFEEUQueByQPiQF6VBgdZPbQpaiQHgthkyH+sRb71EzEdZTp56i3TD+l2KSluaOKAEi5mlGYf1WArbsM6Js5qq17vyYImsHwzPvf6Bc9+Zhp3stGO0uOq1h2Gz1Jy00Es54+yjfIB8SBYfNfQFB06wumPq0zZXC3r1BMxv3s7YfRbTRRNZZrGhrQNmtAaB8guS/tOv5KtIwz6uFYP0lxGaxn06Vp/HOrJb+Q3b71v8AgXSjDYLOnD6yT/XOAiB90bbA/O66EqT+SuLJzc1/XX6NIx1hllNHG1rIWNYwXs1jQxo+QWWsKZTJzuCuTa7GcJEwudkpWYOECohY7qxnCGf2VVQXM4UVNRAzWcjjGbc+XyQaJRsOXYoPIxrwnQVd3VFLFI/+My5ZR/XG/wB60yv6Q0L94ZaiD3ZmytH9oX+9dLdICLDkpeiVtTkZae7aVZrE93H5+is3MVdE4eQkgew/UOP6F5VV0gxNm7XUkg900jT9DGu8tkDRY8hYe4O2C3j2hnj1+yvl1fPh6W4r/FwfKob+xM/yT4v/ABcH94b+xd80SmiYK39yzfL/AL90eVV8+O6VYsOY4P7w39iZD0mxRxsfRGfyp3n9DCu+PGbhYERG58k/uOb5HlVcXg6LVp9uqpWfyWzSfpDVbh6MWP2tff8A2dNb73PK7Drt9/0S3MLtwqTz88+v2hPlVc5oOj1AD9pNVSe7PHGPzW3XvUfTLCI//iCT/bSSy3+TjZbSxuXco9YLK3JzW72laKRDyqHCaan2gpqeG3GnDGw/UBenH63teSAwlGz1eVjMzPdYTowNwlaxTTKDsErRKgMY3NueVHtyi45UY8N2PKj3hwsEC9ZyaIgd0rRKaJQNkAyerwgEpOyN/rcIRERugZohLe4tNgmawQPbmNwgjXl2x4TNEJbWFu54R64QZ0QsKa4UQNVep5HwSsx7p8IuN90CYuQriXI0AFVsx7oCm9ooqflNiFwCd0MwsNtkDlRKzmPdWgwIApuCmScH4JM+1rbIGONxugBWoeEWQdh9FXlNjsgbUcfNVk2E3O6fkHZBlvASanySnON+U2De990Co+QriB7RbgKrmPdAc/tKQcpsQuN1JhYbIGqk/k/FTMe6tNaLDZAumTncH4JM+3GyU1xuN0AqzBwjyDsq8xsdkDp+FVTIjc2KsZB2H0QU1FcyDsPoogVoKXybJucd0mcXItugzq5tu6no6XGLEKzmHdArUy7dlM2bZBKLkrMIsd0BaCmum5h3VUtPZA22f5KaVt+26kBtzsmPcLFAvXU0826TlPZWYjYboAy5N1NdFPuNlXynsgdo33U9j5pjXC3KXUb2sgmrfZTQS2NN1ZzDugVny7KZ82yCYXOyzCLHdAXo6mtbbtsm5h3VVzTcoG+2po237KQbc7JrnCx3QK11MmbdJynsrEJsN0A5Mu6muimNxsq+U9kDtdRJynsogwn0/CLRCCQ5dggZLwVVTWyE7HhM0AgzDwhqOEDnlpsFljs2xQJCuNQaIStUoM1HIQR8hNYM3KIxAbhA1VJuVnWKY1gduUC4OVZSntyi4S9YoAdyU6nRCIFC/wBXhA2ThU00Sk7FM0QgkHCk/CW9xabBZY8u2PCBIVxnAQaISzKRsgKpSWchOZ63KIxAboGKtPyprFMY0O3PKBcPKtJLmBouEvXKC0oquuVEDtZqXIM1iElWKfhADWEG5TdZqzLwVUQNewk3HCzGMu5TYfZCCo4QFrNSTEUtXQgTGcvKJ0gIsEFT5JcXKDOkU1jwBY8pyqTcoGyODhYcpWkUVPyrKBQlAQyetwku5KdToAbGRuU7Waik4VNA2RuY3HCjG5dymweypPwggmCS6MndLCuM4CBUfq8ozKDsl1KUzkIC0SmMcG7FPVWo5QMe8OFhylaJ/wCyswcq0gqaLv8AshRW1EFFWKfhZUQFLwVUUUQW4fZCCo4WVEFYK6FFECKnyS4uVFEFxVJuVFEBU/KsqKIKTuSn06iiBknCpqKILUHsqT8LCiCsFdZwoogTUpLOQooguqrUcqKIJByrSiiCKKKIP//Z" alt="Samsung" style={{
            height: '40px',
            opacity: '0.7',
            transition: 'opacity 0.3s ease',
            ':hover': {
              opacity: '1'
            }
          }} />
          <img src="data:image/png;base64,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" alt="Canon" style={{
            height: '40px',
            opacity: '0.7',
            transition: 'opacity 0.3s ease',
            ':hover': {
              opacity: '1'
            }
          }} />
          <img src="data:image/png;base64,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" alt="NVIDIA" style={{
            height: '40px',
            opacity: '0.7',
            transition: 'opacity 0.3s ease',
            ':hover': {
              opacity: '1'
            }
          }} />
          <img src="data:image/png;base64,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" alt="Sony" style={{
            height: '40px',
            opacity: '0.7',
            transition: 'opacity 0.3s ease',
            ':hover': {
              opacity: '1'
            }
          }} />
        </div>
      </div>
    </div>
  );
}