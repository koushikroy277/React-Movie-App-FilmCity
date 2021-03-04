import React from "react";
import { useLocation, NavLink } from "react-router-dom";
import "./Style/ModalDes.scss";
import NavBar from "./NavBar";
import { FaTimes } from "react-icons/fa";
import { CircularProgress } from "@material-ui/core";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import axios from "axios";

const opts = {
  width: "700",
  height: "400",
};

function onReady(event) {
  event.target.pauseVideo();
}

export default function ModalSeries(props) {
  let location = useLocation();
  const passData = props.location.aboutProps?.data;
  const passImgUrl = props.location.aboutProps?.ImgUrl;
  const passLink = props.location.aboutProps?.movieLink;

  const [trailerUrl, setTrailerUrl] = React.useState("");
  const [cast, setCast] = React.useState([]);
  const [genres, setGenres] = React.useState([]);
  const [load, setLoad] = React.useState(false);

  const genreUrl = `https://api.themoviedb.org/3/movie/${passData?.id}?api_key=a10bba2275d48493fb1ccea0de820ebc&language=en-US`;

  const castUrl = `
  https://api.themoviedb.org/3/movie/${passData?.id}/credits?api_key=a10bba2275d48493fb1ccea0de820ebc&language=en-US`;
  // 69050
  const fetchMovieApi = async () => {
    const request = await axios.get(castUrl);
    const reqGenre = await axios.get(genreUrl);
    setGenres(reqGenre.data.genres);
    setCast(request.data.cast);
    setLoad(true)
  };
  React.useEffect(() => {
    fetchMovieApi();
  }, []);

  const handleTrailer = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      setTrailerUrl(
        movieTrailer(movie?.name || movie?.title || "")
          .then((url) => {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
          })
          .catch((error) => console.log(error))
      );
    }
  };

  if (!load) {
    return <CircularProgress color="secondary" />;
  } else {
    return (
      <>
        <NavBar />
        <div className="movieModal">
          <div className="backLink">
            <NavLink className="link" to={passLink}>
              Back
            </NavLink>
          </div>
          <img src={passImgUrl?.concat(passData?.poster_path)} alt="" />
          <div className="modalList">
            <h1>{passData?.title || passData?.name}</h1>
            <p>{passData?.overview}</p>
            <div className="modalCast">
              <p>Cast:</p>
              <p>{cast[0]?.name},</p>
              <p>{cast[1]?.name},</p>
              <p>{cast[2]?.name},</p>
              <p>{cast[3]?.name},</p>
              <p>{cast[4]?.name}</p>
            </div>
            <div className="modalGenres">
              <p>Genres:</p>
              <p>{genres[0]?.name},</p>
              <p>{genres[1]?.name},</p>
              <p>{genres[2]?.name}</p>
            </div>
            <button onClick={() => handleTrailer(passData)}>
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
      </>
    );
  }
}
