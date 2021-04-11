import React, { useRef } from "react";

const Header = () => {
  const targetRef = useRef();
  return (
    <nav class="navbar">
      <a href="/" class="navbar__logo">
        Press Key
      </a>
      <div class="navbar__bars">
        <i class="fas fa-bars"></i>
      </div>
      {/*<div class="navbar__menu">
        <a href="/" class="navbar__menu--links">Home</a>
        <a href="/" class="navbar__menu--links">Products</a>
        <a href="/" class="navbar__menu--links">Services</a>
  <a href="/" class="navbar__menu--links" id="button">Sign Up</a>
      </div>*/}
    </nav>
  );
};

export default Header;
