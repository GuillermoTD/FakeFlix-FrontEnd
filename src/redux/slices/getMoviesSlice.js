import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import fetchMovies, { fetchMoviesFailure, fetchMoviesSuccess } from "../thunks/fetchMovies";

const initialState = {
  movies: [],
  // loading:false,
  error: null,
};

// const fetchMovies = createAsyncThunk("netflix/movies",async()=>{
//     const data = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=f1e28524b94cb93db1eb770d2075b5ac&language=es-ES&sort_by=popularity.desc&page=1")
//     console.log(data)
// })

const getMoviesSlice = createSlice({
  name: "getMovies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(fetchMoviesSuccess,fetchMovies );
    // // [fetchMoviesFailure]: (state, action) => {
    // //   state.error = action.payload;
    // // },
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      // state.loading = false; // Se establece el estado de carga en false
      state.movies = action.payload; // Se actualizan las películas con el payload
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.loading = false; // Se establece el estado de carga en false
      state.error = action.error.message; // Se establece el mensaje de error
    });
  },
});

// export const { fetchMovies } = getMoviesSlice.actions;

export default getMoviesSlice.reducer;
