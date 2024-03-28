import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { searchRecipesByIngredients } from '../services/api';

const useQuery = () => new URLSearchParams(useLocation().search);

export const SearchResults = () => {

    const [results, setResults] = useState([]);
    const query = useQuery();
    const searchQuery = query.get('q');

    useEffect(() => {
        const fetchData = async () => {
            if (searchQuery) {
                try {
                    const data = await searchRecipesByIngredients(searchQuery);
                    setResults(data);
                } catch (error) {
                    console.error("Error fetching search results:", error);
                }
            }
        };

        fetchData();
    }, [searchQuery]);

    return(
        <div>
            {results.map((results, index) => (
                <div key={index}>
                    <h3>{results.title}</h3>
                </div>
            ))}
        </div>
    );
}