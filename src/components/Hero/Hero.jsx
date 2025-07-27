import { HeroBody } from "./HeroStyles";
import testImage from "../../assets/images/testImage.jpg";

const Hero = ({ movie }) => {
  console.log("log hero ");
  console.log(movie);

  return (
    <HeroBody>
      <div className="Hero__Image" style={{ objectFit: "cover" }}>
        <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt="" />
      </div>
      <div className="Hero__MovieDescription">
        <h3>{movie?.original_title}</h3>
        <p>{movie?.overview}</p>
        <div className="Hero_MovieDescription__Buttons">
          <button>Play</button>
          <button>More Info</button>
        </div>
      </div>
    </HeroBody>
  );
};

export default Hero;
