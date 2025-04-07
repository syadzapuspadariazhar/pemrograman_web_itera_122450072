const HeroSection = () => {
    return (
      <main className="hero container">
        <div className="hero-content">
          <h1>NEW ARRIVAL</h1>
          <p>
            New Pinkflash Pinky Girl: Create Vitality Pink Makeup Look
          </p>
  
          <div className="hero-btn">
            <button>Buy Now </button>
            <button className="secondary-btn">Favorite</button>
          </div>
  
        </div>
        <div className="hero-image">
          <img src="/images/product.jpg" alt="product" />
        </div>
      </main>
    );
  };
  
  export default HeroSection;