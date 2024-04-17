// import React, { useState } from 'react';

// function RecipeFinder() {
//     const [meals, setMeals] = useState([]);
//     const [errorMessage, setErrorMessage] = useState('');
  
//     const getMeal = (mealId) => {
//       const mealdbAPI = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealId}`;
  
//       fetch(mealdbAPI)
//         .then((res) => res.json())
//         .then((data) => {
//           if (data.meals) {
//             setMeals(data.meals);
//             setErrorMessage('');
//           } else {
//             setMeals([]);
//             setErrorMessage('No meals found');
//           }
//         })
//         .catch((error) => {
//           console.error('Error fetching meals:', error);
//           setErrorMessage('Error fetching meals. Please try again later.');
//         });
//     };
  
//     const mealDetails = (mealId) => {
//       // Implement your logic for displaying meal details here
//       const mealDetailAPI = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  
//       fetch(mealDetailAPI)
//         .then((res) => res.json())
//         .then((data) => {
//           if (data.meals) {
//             const meal = data.meals[0];
//             displayMealInfo(meal);
//           } else {
//             console.error('No meal details found');
//           }
//         })
//         .catch((error) => {
//           console.error('Error fetching meal details:', error);
//         });
//     };
  
//     const displayMealInfo = (meal) => {
//       // Display meal details logic
//       const mealDetailsDiv = document.getElementById('mealDetails');
//       mealDetailsDiv.innerHTML = `
//         <img class="img-fluid meal-img mb-4" src="${meal.strMealThumb}" alt="">
//         <h4>${meal.strMeal}</h4>
        
//         <h5 class="pt-3 pb-2">Ingredients</h5>
//         <ul>
//           <li>${meal.strMeasure1}, ${meal.strIngredient1}</li>
//           <li>${meal.strMeasure2}, ${meal.strIngredient2}</li>
//           <li>${meal.strMeasure3}, ${meal.strIngredient3}</li>
//           <li>${meal.strMeasure4}, ${meal.strIngredient4}</li>
//           <li>${meal.strMeasure5}, ${meal.strIngredient5}</li>
//           <li>${meal.strMeasure6}, ${meal.strIngredient6}</li>
//         </ul>
//       `;
//     };
  
//     return (
//       <div>
//         <input
//           type="text"
//           placeholder="Search for meals..."
//           onChange={(e) => getMeal(e.target.value)}
//         />
//         {errorMessage && <p>{errorMessage}</p>}
//         <div id="meals" className="row">
//           {meals.map((meal) => (
//             <div key={meal.idMeal} className="col-md-3">
//               <div
//                 className="border meal-title text-center h-100"
//                 onClick={() => mealDetails(meal.idMeal)}
//                 data-bs-toggle="modal"
//                 data-bs-target="#exampleModal"
//               >
//                 <img className="img-fluid meal-img" src={meal.strMealThumb} alt="" />
//                 <h4 className="h5 py-4 px-2 mb-0">{meal.strMeal}</h4>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div id="mealDetails"></div>
//       </div>
//     );
//   }
  
//   export default RecipeFinder;