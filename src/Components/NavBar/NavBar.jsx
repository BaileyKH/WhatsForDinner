import { useState } from "react";
import { useNavigate } from 'react-router-dom'

import { searchRecipesByName } from "/src/services/api.js";


import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import "./NavBar.css";

export const NavBar = () => {

    const [query, setQuery] = useState('');
    const [recipes, setRecipes] = useState([]);
    const navigate = useNavigate();

    const handleSearch = async (event) => {
        event.preventDefault();
        navigate(`/search?q=${encodeURIComponent(query)}`);
        try {
            const results = await searchRecipesByName(query);
            setRecipes(results);
          } catch (error) {
            console.error('Error searching recipes:', error);
          }
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
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
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
