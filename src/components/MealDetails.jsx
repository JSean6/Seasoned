import React from 'react';

const MealDetails = ({ meal }) => {
  const displayMealInfo = () => {
    return (
      <div>
        <img className="img-fluid meal-img mb-4" src={meal.strMealThumb} alt="" />
        <h4>{meal.strMeal}</h4>
        
        <h5 className="pt-3 pb-2">Ingredients</h5>
        <ul>
          {Object.keys(meal).map((key) => {
            if (key.includes('strIngredient') && meal[key]) {
              const ingredientIndex = key.replace('strIngredient', '');
              const measureKey = `strMeasure${ingredientIndex}`;
              return (
                <li key={key}>
                  {meal[measureKey]}, {meal[key]}
                </li>
              );
            }
            return null;
          })}
        </ul>
      </div>
    );
  };

  return <div>{displayMealInfo()}</div>;
};

export default MealDetails;