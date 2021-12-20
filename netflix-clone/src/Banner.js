
import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./Banner.css";
import requests from "./Request";

export const Banner = () => {

  const [movie,setMovie] = useState([])

  useEffect(() => {
    async function fectchData(){
      const req = await axios.get(requests.fetchNetflixOriginals)
      setMovie(req.data.results[
        Math.floor(Math.random()*req.data.results.length-1)
      ])
      return req
    }
    
    fectchData()
  }, [])

    const truncateCharacters = (string, num)=>{
        return string?.length > num ? string.substr(0,num-1)+'...': string;
    }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage:
        `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button grey_flex">My List</button>
        </div>
        <div className="banner_description">{truncateCharacters(movie?.overview,150)}
        </div>
      </div>
      <div className="banner_fadebottom"></div>
    </header>
  );
};
