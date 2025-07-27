import { createAction,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// export const fetchMoviesRequest = createAction('FETCH_MOVIES_REQUEST');
export const fetchMoviesSuccess = createAction('FETCH_MOVIES_SUCCESS');
export const fetchMoviesFailure = createAction('FETCH_MOVIES_FAILURE');

const fetchMovies = createAsyncThunk(
    'fetchMovies',
    async()=>{
        const apiKey = import.meta.env.VITE_TMDB_APIKEY
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

        // dispatch(fetchMoviesRequest())
        
        //fetching code to get the movies
        try {
            const response = await axios.get(url);
            const movies = response.data.results;
            return movies
        } catch (error) {
            console.error(error);
        }
    }
)




export default fetchMovies


