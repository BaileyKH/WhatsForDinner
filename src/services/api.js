const BASE_URL = "https://api.spoonacular.com";
const API_KEY = import.meta.env.VITE_SPOONACULAR_API;

export const searchRecipesByName = async (query) => {
    const params = new URLSearchParams({
        query: query,
        number: 15, 
        apiKey: API_KEY,
        addRecipeInformation: true, 
    });

    try {
        const response = await fetch(`${BASE_URL}/recipes/complexSearch?${params}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.results; 
    } catch (error) {
        console.error('Error fetching recipes:', error);
        throw error;
    }
};
