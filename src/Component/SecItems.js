import React from "react";
import { NavLink } from "react-router-dom";
import "./Style/SecItems.scss";
import axios from "axios";
import ModalShows from "./ModalShows";
import { CircularProgress } from "@material-ui/core";

export default function SecItems(props) {
  const [movies, setMovies] = React.useState([]);
  const [load, setLoad] = React.useState(false);

  const fetchMovieApi = async () => {
    const request = await axios.get(props.movieApi);
    setMovies(request.data);
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
        <div className="tvShowHead">
          <h1>{props.movieHead}</h1>
        </div>
        <div className="secItems">
          {movies.map((data) => {
            if (data.show.image) {
              return (
                <div className="secItemChild">
                  <NavLink
                    to={{
                      pathname: "/modalShows",
                      aboutProps: {
                        data: data.show,
                        movieLink: props.movieLink,
                      },
                    }}
                  >
                    <img
                      src={data.show.image?.original || data.show.image?.medium}
                      alt="shows"
                    />
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
