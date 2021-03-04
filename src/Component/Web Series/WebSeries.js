import React from "react";
import { NavLink } from "react-router-dom";
import "../Style/WebItems.scss";
import ThirdItems from "../ThirdItems";
import NavBar from "../NavBar";
import Items from "../Items";
import { requestWebSeries } from "../Request";
import { Breadcrumbs, Typography } from "@material-ui/core";

export default function WebSeries() {
  return (
    <>
      <NavBar />
      <div>
        <div className="webBanner">
          <div className="webBanHead">
            <h1>Web Series</h1>
            <BreadCrumb />
          </div>
        </div>
        <div className="webGenres">
          <Items
            movieLink="/webSeries"
            movieHead="Murder & Mystery"
            isLargeRow={true}
            movieApi={requestWebSeries.fetchMystery}
          />
          <Items
            movieLink="/webSeries"
            movieHead="Fictional Shows"
            isLargeRow={true}
            movieApi={requestWebSeries.fetchSciFi}
          />
          <Items
            movieLink="/webSeries"
            movieHead="Handpicked shows for you"
            isLargeRow={true}
            movieApi={requestWebSeries.fetchWestern}
          />
        </div>
        <div className="seriesHead">
          <h1>Special Shows</h1>
        </div>
        <div className="webSeries">
          <ThirdItems movieLink="/webSeries" movieApi={requestWebSeries.fetchSimilar} />
          <ThirdItems movieLink="/webSeries" movieApi={requestWebSeries.fetchSimilar2} />
          <ThirdItems movieLink="/webSeries" movieApi={requestWebSeries.fetchSimilar3} />
          <ThirdItems movieLink="/webSeries" movieApi={requestWebSeries.fetchSimilar4} />
          <ThirdItems movieLink="/webSeries" movieApi={requestWebSeries.fetchSimilar5} />
          <ThirdItems movieLink="/webSeries" movieApi={requestWebSeries.fetchSimilar7} />
          <ThirdItems movieLink="/webSeries" movieApi={requestWebSeries.fetchSimilar8} />
          <ThirdItems movieLink="/webSeries" movieApi={requestWebSeries.fetchSimilar9} />
          <ThirdItems movieLink="/webSeries" movieApi={requestWebSeries.fetchSimilar10} />
          <ThirdItems movieLink="/webSeries" movieApi={requestWebSeries.fetchSimilar11} />
          <ThirdItems movieLink="/webSeries" movieApi={requestWebSeries.fetchSimilar12} />
          <ThirdItems movieLink="/webSeries" movieApi={requestWebSeries.fetchSimilar13} />
          <ThirdItems movieLink="/webSeries" movieApi={requestWebSeries.fetchMostWatched} />
          <ThirdItems movieApi={requestWebSeries.fetchLatest} />
        </div>
      </div>
    </>
  );
}

function BreadCrumb() {
  return (
    <>
      <div>
        <Breadcrumbs aria-label="breadcrumb" className="breadCrumb">
          <NavLink className="link" to="/">
            Home
          </NavLink>
          <Typography className="text">Web Series</Typography>
        </Breadcrumbs>
      </div>
    </>
  );
}
