import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { searchRecipesByName } from "/src/services/api.js";

import { RecipeCard } from "/src/Components/RecipeCard/RecipeCard.jsx";

export const SearchResults = () => {
    const [recipes, setRecipes] = useState([]);
    const query = new URLSearchParams(useLocation().search).get("q");

    useEffect(() => {
        const fetchRecipes = async () => {
            if (query) {
                try {
                    const results = await searchRecipesByName(query);
                    setRecipes(results);
                } catch (error) {
                    console.error("Error fetching recipes:", error);
                }
            }
        };

        fetchRecipes();
    }, [query]);

    return (
        <div>
            {recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
        </div>
    );
};
