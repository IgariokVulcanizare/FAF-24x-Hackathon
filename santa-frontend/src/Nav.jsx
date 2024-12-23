import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import logo from "./images/Renovo(1).png"; // Import the logo image

const navLinks = [
  { title: "Gifts Categories", href: "/categorized-gifts" },
  { title: "Santa's List", href: "/behaviour" },
  { title: "Santa Airlines", href: "/earth-animation" },
  { title: "Stamina", href: "/chinchilla"},
];

const Navbar = () => {
  const navBarStyle = {
    position: "fixed", // Makes the navbar stick to the top
    top: "0",
    left: "0",
    width: "100%",
    zIndex: "1000", // Ensures it stays above other content
    background: "#FFDB89",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Adds a subtle shadow for better visibility
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  };

  const navItemStyle = {
    listStyle: "none",
    display: "inline-block",
    margin: "0 15px",
    fontSize: "18px",
    fontWeight: "bold",
    textDecoration: "none",
    color: "#6f0e0e",
    transition: "color 0.3s, transform 0.3s",
  };

  const logoStyle = {
    height: "50px",
    cursor: "pointer",
  };

  return (
    <nav style={navBarStyle}>
      {/* Logo */}
      <div>
        <Link to="/">
          <img src={logo} alt="Logo" style={logoStyle} />
        </Link>
      </div>

      {/* Navigation Links */}
      <ul style={{ display: "flex", padding: "0", margin: "0" }}>
        {navLinks.map((item) => (
          <li key={item.title} style={navItemStyle}>
            <Link to={item.href} style={navItemStyle}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;