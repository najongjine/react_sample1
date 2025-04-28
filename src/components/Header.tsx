import React from "react";

const Header: React.FC = () => (
  <header>
    <h1>My App</h1>
    <nav>
      <a href="/">Home</a> | <a href="/counter">Counter</a> | <a href="/list_sample">List Sample</a>
    </nav>
  </header>
);

export default Header;
