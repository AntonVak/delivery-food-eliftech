import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { cartReducer } from './cart/cartSlice';
import { mealsReducer } from './meals/mealsSlice';
import { restaurantsReducer } from './restaurants/restaurantsSlice';


const persistConfig = {
    key: 'mealShop',
    storage,
    whitelist: ['cart']
  };

  const rootReducer = combineReducers({
    restaurants: restaurantsReducer,
    meals: mealsReducer,
    cart: cartReducer,
  });

  const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);


// const store = configureStore({
//     reducer: {
//         restaurants: restaurantsReducer,
//         meals: mealsReducer,
//     },
// })

// export default store;