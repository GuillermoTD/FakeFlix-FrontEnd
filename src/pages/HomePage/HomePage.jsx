import {
  Home,
  Home_Header,
  Home_Header__Navigation,
  Home_Header__Options,
} from "./HomePageStyle";
import { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import { Bell, ChevronDown, Import, Search } from "lucide-react";
import MainMoviesBox from "../../components/MainMoviesBox/MainMoviesBox";
// import { useDispatch, useSelector } from "react-redux";
// import fetchMovies from "../../redux/thunks/fetchMovies";
import { moviesApi, useGetMoviesQuery } from "../../api/MoviesApi";

const HomePage = () => {
  // const moviesFetched = useSelector((state) => state);
  // const dispatch = useDispatch();
  const {data,error,isLoading} = useGetMoviesQuery()
  // console.log(useGetMoviesQuery());
  console.log(data)

  // useEffect(() => {
  //   dispatch(fetchMovies());
  // }, []);

  return (
    <Home>
      <Home_Header>
        <Home_Header__Navigation>
          <h2 className="Logo">Fakeflix</h2>
          <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>My List</li>
          </ul>
        </Home_Header__Navigation>

        <Home_Header__Options>
          <Search strokeWidth={1} />
          <Bell strokeWidth={1} />
          <ChevronDown strokeWidth={1} />
        </Home_Header__Options>
      </Home_Header>

      <Hero movie={data?.results[1]}/>

      <MainMoviesBox movies={data?.results}/>
    </Home>
  );
};

export default HomePage;
