import React from "react";
import "../Style/Banner.scss";
import axios from "axios";
import { FaTimes } from "react-icons/fa";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const opts = {
  width: "700",
  height: "400",
  playerVars: {
    autoplay: 1,
  },
};

function onReady(event) {
  event.target.pauseVideo();
}

export default function Banner(props) {
  const ImgUrl = "https://image.tmdb.org/t/p/original/";

  const [movies, setMovies] = React.useState([]);
  const [trailerUrl, setTrailerUrl] = React.useState("");

  React.useEffect(() => {
    async function fetchMovieApi() {
      const request = await axios.get(props.movieApi);
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchMovieApi();
  }, []);

  const handleTrailer = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      setTrailerUrl(
        movieTrailer(movie?.title || movie?.name || "")
          .then((url) => {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
          })
          .catch((error) => console.log(error))
      );
    }
  };

  return (
    <div className="bannerMain">
      <div className="bannerSlide">
        <img src={ImgUrl.concat(movies?.backdrop_path)} alt="First slide" />

        <div className="bannerCapt">
          <h1>{movies?.title}</h1>
          <p>{movies?.overview}</p>
          <button className="bannerBtn" onClick={() => handleTrailer(movies)}>
            Play Trailer
          </button>
        </div>
        <div className="modalTrailer">
          {trailerUrl && (
            <div className="modalYt">
              <button onClick={() => setTrailerUrl("")}>
                <FaTimes size={18} />
              </button>
              <div className="ytVideo">
                <YouTube videoId={trailerUrl} opts={opts} onReady={onReady} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
