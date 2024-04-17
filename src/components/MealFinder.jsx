const useMealFetcher = () => {
    const [meals, setMeals] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
  
    const getMeal = (mealId) => {
      const mealdbAPI = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealId}`;
  
      fetch(mealdbAPI)
        .then((res) => res.json())
        .then((data) => {
          if (data.meals) {
            setMeals(data.meals);
            setErrorMessage('');
          } else {
            setMeals([]);
            setErrorMessage('No meals found');
          }
        })
        .catch((error) => {
          console.error('Error fetching meals:', error);
          setErrorMessage('Error fetching meals. Please try again later.');
        });
    };
  
    return { meals, errorMessage, getMeal };
  };
  
  export default useMealFetcher;