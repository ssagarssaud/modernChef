import React from "react";
import "./header.css";
import logo from "../../src/assets/logo";
const Header = () => {
  return (
    <header>
      <img src={logo} />
      <span>Chef.AI</span>
    </header>
  );
};

export default Header;
