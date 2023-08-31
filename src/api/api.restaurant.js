import axios from 'axios';
axios.defaults.baseURL = 'https://react-base-http-default-rtdb.firebaseio.com';

const getAllRestaurants = async () => {
  const {data} = await axios.get("/restaurant.json");
  return data;
}

export default getAllRestaurants;


// const fetchAllRestaurants = async () => {


//   //fetch по умолчанию  получает метод GET
//   //fetch - возвращает промис
//   try {
//     const response = await fetch(
//       "https://react-base-http-default-rtdb.firebaseio.com/restaurant.json"
//     );
//     if(!response.ok) {
//       throw new Error('oooooops...')
//     }
//     const cafes = await response.json();
    
//     return cafes;
    
//   } catch(err) {
//     return err.message
//   }
// };

// export default fetchAllRestaurants;
