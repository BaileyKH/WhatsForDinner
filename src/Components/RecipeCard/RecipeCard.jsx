import "./RecipeCard.css";

export const RecipeCard = ({ recipe }) => {
    return (
        <div className="main-recipe-container">
            <div className="inner-recipe-container">
                <h2>{recipe.title}</h2>
                <img
                    src={recipe.image}
                    alt={recipe.title}
                />
                <p>Cook Time: {recipe.readyInMinutes} minutes</p>
            </div>
        </div>
    );
};
