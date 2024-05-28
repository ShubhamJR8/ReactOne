import React from "react";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <nav>
      <h1>Header</h1>
      <main>
        <HashLink to="/#home">Home</HashLink>
        <HashLink to="/#about">About</HashLink>
        <HashLink to="/contact">Contact</HashLink>
        <HashLink to="/#brands">Brands</HashLink>
        <HashLink to="/service">Services</HashLink>
      </main>
    </nav>
  );
};

export default Header;
