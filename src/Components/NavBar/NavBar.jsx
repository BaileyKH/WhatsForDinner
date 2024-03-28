import React from "react";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import "./NavBar.css";

export const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="nav-items">
                <Link to="/" className="links">
                    Home
                </Link>
                <div className="search-container">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="icon"/>
                    <input
                        className="search-input"
                        type="search"
                        placeholder="Search"
                    />
                </div>
                <Link to="/recipedetails" className="links">
                    Recipe Page
                </Link>
                <Link to="/dietaryrestrictions" className="links">
                    Dietary Restrictions
                </Link>
            </div>
        </nav>
    );
};
