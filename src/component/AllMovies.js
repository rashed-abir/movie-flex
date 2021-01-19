import React, { useEffect, useState } from "react";
import { Link } from'react-router-dom';
import Movie from "./Movie";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=23bffabfa709b9579baf869e0d369bc3&page=";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=23bffabfa709b9579baf869e0d369bc3&query=";

function AllMovies() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(SEARCH_API + search)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
    setSearch("");
  };

  return (
    <>
      <header>
        <h1>
          <Link className="link" to="/"><i className="fas fa-video icon"></i> Movie Flex</Link>
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="search"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </form>
      </header>
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </>
  );
}

export default AllMovies;
