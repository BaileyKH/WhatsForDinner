const BASE_URL = "https://api.spoonacular.com";
const API_KEY = import.meta.env.VITE_SPOONACULAR_API; 

export const searchRecipesByIngredients = async (ingredients) => {
    const params = new URLSearchParams({
        ingredients: ingredients,
        apiKey: API_KEY,
    });

    try {
        const response = await fetch(`${BASE_URL}/recipes/findByIngredients?${params}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching recipes:', error);
        throw error; 
    }
};