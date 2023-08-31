import axios from "axios";
axios.defaults.baseURL = "https://react-base-http-default-rtdb.firebaseio.com"

const getAllMeals = async () =>{
  const {data} = await axios.get("/meal.json");
  
  return data;
}

export default getAllMeals;

// const fetchAllMeals = async () => {
//   const response = await fetch(
//     "https://react-base-http-default-rtdb.firebaseio.com/meal.json"
//   );

//   const meals = await response.json();
//   // console.log(meals);
//   return meals
// //   console.log(responseData);
// };

// export default fetchAllMeals;
