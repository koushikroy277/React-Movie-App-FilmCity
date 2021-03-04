import React from "react";
import { NavLink } from "react-router-dom";
import "../Style/TvShows.scss";
import Items from "../Items";
import SecItems from "../SecItems";
import Nav from "../NavBar";
import { requestTv } from "../Request";
import { Breadcrumbs, Typography } from "@material-ui/core";

export default function TvShows() {
  return (
    <div className="tvShows">
      <Nav />
      <div className="bannerShows">
        <div className="banShowMain">
          <h1>TV Shows</h1>
          <BreadCrumb head="TV Shows" />
        </div>
      </div>
      <Items
        movieLink="/tvShows"
        movieHead="Get on the air"
        isLargeRow={true}
        movieApi={requestTv.fetchGetOnTheAir}
      />
      <Items
        movieLink="/tvShows"
        movieHead="You may like"
        isLargeRow={true}
        movieApi={requestTv.fetchPopular}
      />
      <Items
        movieLink="/tvShows"
        movieHead="Animated Cartoons"
        isLargeRow={true}
        movieApi={requestTv.fetchTopRated}
      />
      <SecItems
        movieLink="/tvShows"
        movieHead="For Girls"
        isLargeRow={true}
        movieApi={requestTv.fetchLatest}
      />
      <SecItems
        movieLink="/tvShows"
        movieHead="For Boys"
        isLargeRow={true}
        movieApi={requestTv.fetchUpcoming}
      />
    </div>
  );
}

export function BreadCrumb(props) {
  return (
    <>
      <div>
        <Breadcrumbs aria-label="breadcrumb" className="breadCrumb">
          <NavLink className="link" to="/">
            Home
          </NavLink>
          <Typography className="text">{props.head}</Typography>
        </Breadcrumbs>
      </div>
    </>
  );
}
