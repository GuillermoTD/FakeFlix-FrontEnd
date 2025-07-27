import { configureStore } from "@reduxjs/toolkit";
import getMoviesReducer from "../redux/slices/getMoviesSlice";
import { moviesApi } from "../api/MoviesApi";

const store = configureStore({
  reducer: {
    // getMoviesReducer
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});

export default store;
