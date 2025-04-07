const Navigation = () => {
    return (
      <nav className="container">
        <div className="logo">
          <img src="/images/brand-logo.png" alt="logo" className="header-logo"/>
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Favorites</li>
          <li href="#">About</li>
          <li href="#">Contact Us</li>
        </ul>
  
        <button>login</button>
      </nav>
    );
  };
  
  export default Navigation;