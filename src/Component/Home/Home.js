import React from "react";
import Items from "../Items";
import Nav from "../NavBar";
import Banner from './Banner';
import { requestMovie } from "../Request";

export default function Home() {

  return (
    <>
      <Nav />
      <Banner movieApi={requestMovie.fetchBanner} />
      <Items
      movieLink = "/" 
      movieHead = "Originals"
      isLargeRow={true}
      movieApi = {requestMovie.fetchNowPlaying} />
      <Items
      movieLink = "/" 
      movieHead = "Trending"
      movieApi = {requestMovie.fetchTrending} />
      <Items
      movieLink = "/" 
      movieHead = "Popular"
      movieApi = {requestMovie.fetchPopular} />
      <Items
      movieLink = "/" 
      movieHead = "Top rated"
      movieApi = {requestMovie.fetchTopRated} />
      <Items
      movieLink = "/" 
      movieHead = "Epic Thriller"
      movieApi = {requestMovie.fetchSimilar} />
      <Items
      movieLink = "/" 
      movieHead = "Recommended"
      movieApi = {requestMovie.fetchSimilar2} />
      
    </>
  );
}
