import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <nav>
      <Link to="/planets">
        <button
          style={{
            color: pathname === "/planets" ? "#ae57ff" : "rgb(219, 211, 255)",
          }}
        >
          Planets
        </button>
      </Link>
      <Link to="/people">
        <button
          style={{
            color: pathname === "/people" ? "#ae57ff" : "rgb(219, 211, 255)",
          }}
        >
          People
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
