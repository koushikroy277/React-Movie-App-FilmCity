import React from "react";
import "../Style/MovieGenre.scss";
import ItemGallery from "../ItemGallery";
import NavBar from "../NavBar";
import { requestGenre } from "../Request";
import { BreadCrumb } from "../TV shows/TvShows";

export default function Horror() {
  return (
    <>
      <NavBar />
      <div className="docMovies">
        <div className="banShowMain">
          <h1>Documentaries</h1>
          <BreadCrumb head="Documentaries" />
        </div>
      </div>
      <div>
        <ItemGallery
          movieApi={requestGenre.fetchDocumentaries}
          movieLink="/documentaries"
        />
      </div>
    </>
  );
}
