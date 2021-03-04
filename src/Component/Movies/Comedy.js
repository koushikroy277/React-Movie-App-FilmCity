import React from "react";
import "../Style/MovieGenre.scss";
import ItemGallery from "../ItemGallery";
import NavBar from "../NavBar";
import { requestGenre } from "../Request";
import { BreadCrumb } from "../TV shows/TvShows";

export default function Comedy() {
  return (
    <>
      <NavBar />
      <div className="comedyMovies">
        <div className="banShowMain">
          <h1>Comedy</h1>
          <BreadCrumb head="Comedy" />
        </div>
      </div>
      <div>
        <ItemGallery movieApi={requestGenre.fetchComedy} movieLink="/comedy" />
      </div>
    </>
  );
}
