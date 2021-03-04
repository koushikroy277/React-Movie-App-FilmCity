import React from "react";
import { NavLink } from "react-router-dom";
import "./Style/Items.scss";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";

export default function Items(props) {
  const ImgUrl = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = React.useState([]);
  const [load, setLoad] = React.useState(false);

  const fetchMovieApi = async () => {
    const request = await axios.get(props.movieApi);
    setMovies(request.data.results);
    setLoad(true);
  };
  React.useEffect(() => {
    fetchMovieApi();
  }, [props.movieApi]);

  if (!load) {
    return <CircularProgress color="secondary" />;
  } else {
    return (
      <div className="movie">
        <div className="movieHead">{props.movieHead}</div>
        <div className="movieItem">
          {movies.map((data, index) => {
            if (data.poster_path) {
              return (
                <div key={index} className="movieFull">
                  <NavLink
                    to={{
                      pathname: "/modalDes",
                      aboutProps: {
                        data: data,
                        ImgUrl: ImgUrl,
                        movieLink: props.movieLink,
                      },
                    }}
                  >
                    <img
                      src={ImgUrl.concat(data.poster_path)}
                      alt=""
                      className={props.isLargeRow ? "lgImg" : "smImg"}
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
}
