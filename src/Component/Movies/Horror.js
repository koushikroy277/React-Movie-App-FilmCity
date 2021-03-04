import React from "react";
import { NavLink } from "react-router-dom";
import "../Style/MovieGenre.scss";
import ItemGallery from "../ItemGallery";
import NavBar from "../NavBar";
import { requestGenre } from "../Request";
import { BreadCrumb } from "../TV shows/TvShows";

export default function Horror() {
  return (
    <>
      <NavBar />
      <div className="horrorMovies">
        <div className="banShowMain">
          <h1>Horror</h1>
          <BreadCrumb head="Horror Movies" />
        </div>
      </div>

      <div>
        <ItemGallery movieApi={requestGenre.fetchHorror} movieLink="/horror" />
      </div>
    </>
  );
}
