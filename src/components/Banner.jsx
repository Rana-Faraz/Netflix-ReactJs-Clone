import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "../api/axios";
import requests from "../api/request";
import "./Banner.css";

function Banner() {
  const [movies, setMovies] = useState([]);

  const fetchData = async () => {
    const fetch = await axios.get(requests.fetchNetflixOriginals);
    setMovies(
      fetch.data.results[
        Math.floor(Math.random() * fetch.data.results.length - 1)
      ]
    );
    return fetch;
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(movies);

  const desc = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movies?.backdrop_path}")`,
      }}
    >
      <div className="banner__content">
        <h1 className="banner__title">
          {movies?.name || movies?.title || movies?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__desc">{desc(movies?.overview, 150)}</h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
