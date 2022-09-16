import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Row.css";
import axios from "../api/axios";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original";

  const fetchData = async () => {
    const fetch = await axios.get(fetchUrl).catch((e) => console.log(e));

    setMovies(fetch.data.results);
    console.log(fetch.data.results);
    return fetch;
  };

  useEffect(() => {
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h1 className="row__title">{title}</h1>
      <div className="row__posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <>
                <img
                  className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                  src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.title}
                />
              </>
            )
        )}
      </div>
    </div>
  );
}

export default Row;
