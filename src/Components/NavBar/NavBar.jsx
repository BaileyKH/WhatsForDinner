import { useState } from "react";
import { useNavigate } from 'react-router-dom'

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import "./NavBar.css";

export const NavBar = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleSearch = (event) => {
        event.preventDefault();
        navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    };

    return (
        <nav className="navbar">
            <div className="nav-items">
                <Link to="/" className="links">
                    Home
                </Link>
                <div className="search-container">
                    <form onSubmit={handleSearch}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="icon"/>
                        <input
                            className="search-input"
                            type="search"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onSubmit={handleSearch}
                        />
                    </form>
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
