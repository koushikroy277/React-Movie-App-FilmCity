import React from "react";
import { NavLink } from "react-router-dom";
import "./Style/ItemGallery.scss";
import axios from "axios";
import ModalDes from "./ModalDes";

export default function ItemGallery(props) {
  const ImgUrl = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = React.useState([]);
  const [enter, setEnter] = React.useState(false);

  const fetchMovieApi = async () => {
    const request = await axios.get(props.movieApi);
    setMovies(request.data.results);
    console.log(request.data.results);
  };
  React.useEffect(() => {
    fetchMovieApi();
  }, [props.movieApi]);

  return (
    <div className="itemGallery">
      <div className="galleryHead">{props.movieHead}</div>
      <div className="galleryElem">
        {movies.map((data, index) => {
          if (data.poster_path) {
            return (
              <div
                key={index}
                className="galleryFull"
                onMouseEnter={() => setEnter(true)}
                onMouseLeave={() => setEnter(false)}
              >
                <NavLink
                  to={{
                    pathname: "/modalDes",
                    aboutProps: {
                      data: data,
                      ImgUrl: ImgUrl,
                      movieLink: props.movieLink
                    },
                  }}
                >
                  <img
                    src={ImgUrl.concat(data.poster_path)}
                    alt="genreMovies"
                  />
                </NavLink>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
