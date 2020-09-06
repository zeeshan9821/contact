import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <span style={{margin:"5px"}}>
        <Link to="/" className="btn btn-primary navbar-btn">
          Contact Book
        </Link>
        </span>
        <span>
          <Link to="/contacts/add" className="btn btn-primary navbar-btn">
            Create Contact
          </Link>
          </span>
      </div>
    </nav>
  );
};

export default Navbar;
