import React from "react";
import "../Style/MovieGenre.scss";
import ItemGallery from "../ItemGallery";
import NavBar from "../NavBar";
import { requestGenre } from "../Request";
import { BreadCrumb } from "../TV shows/TvShows";

export default function Action() {
  return (
    <>
      <NavBar />
      <div className="actionMovies">
        <div className="banShowMain">
          <h1>Action</h1>
          <BreadCrumb head="Action" />
        </div>
      </div>
      <div>
        <ItemGallery movieApi={requestGenre.fetchAction} movieLink="/action" />
      </div>
    </>
  );
}
