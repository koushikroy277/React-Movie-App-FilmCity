import React from "react";
import { NavLink } from "react-router-dom";
import "./Style/WebItems.scss";
import axios from "axios";
import ModalSeries from "./ModalSeries";
import { CircularProgress } from "@material-ui/core";

export default function SecItems(props) {
  const ImgUrl = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = React.useState([]);
  const [load, setLoad] = React.useState(false);

  const fetchMovieApi = async () => {
    const request = await axios.get(props.movieApi);
    setMovies([request.data]);
    setLoad(true);
  };

  React.useEffect(() => {
    fetchMovieApi();
  }, [props.movieApi]);

  if (!load) {
    return <CircularProgress color="secondary" />;
  } else {
    return (
      <>
        <div className="secWebItems">
          {movies.map((data) => {
            if (data.poster_path) {
              return (
                <div className="webItems">
                  <NavLink
                    to={{
                      pathname: "/modalSeries",
                      aboutProps: {
                        data: data,
                        ImgUrl: ImgUrl,
                        movieLink: props.movieLink,
                      },
                    }}
                  >
                    <img src={ImgUrl.concat(data.poster_path)} alt="series" />
                  </NavLink>
                </div>
              );
            }
          })}
        </div>
      </>
    );
  }
}
