import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { 
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { categoriesReducer } from "./reducers/categories";
import { categoryReducer } from "./reducers/category";
import { recipeReducer } from "./reducers/recipe";
import { areaReducer } from "./reducers/area";
import { randomReducer } from "./reducers/random";
import { ingridientReducer } from "./reducers/ingridient";


const persistConfig = {
    key: 'root',
    storage,
  }


  const rootReducer = combineReducers({
    categories: categoriesReducer,
    category: categoryReducer,
    recipe: recipeReducer,
    area: areaReducer,
    random: randomReducer,
    ingridient: ingridientReducer,
    
  })

  const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  });
  
  
  export const persistor = persistStore(store);

