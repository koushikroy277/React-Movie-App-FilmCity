import React from "react";
import "../Style/MovieGenre.scss";
import ItemGallery from "../ItemGallery";
import NavBar from "../NavBar";
import { requestGenre } from "../Request";
import { BreadCrumb } from "../TV shows/TvShows";

export default function Romance() {
  return (
    <>
      <NavBar />
      <div className="romMovies">
        <div className="banShowMain">
          <h1>Romantic</h1>
          <BreadCrumb head="Romantic Movies" />
        </div>
      </div>
      <div>
        <ItemGallery
          movieApi={requestGenre.fetchRomance}
          movieLink="/romance"
        />
      </div>
    </>
  );
}
