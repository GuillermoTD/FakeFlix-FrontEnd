import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiKey = import.meta.env.VITE_TMDB_APIKEY;

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/" }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => `movie/popular?api_key=${apiKey}`,
    }),
  }),
});

export const { useGetMoviesQuery } = moviesApi;
