import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Movie from "./Movie";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=23bffabfa709b9579baf869e0d369bc3&page=1";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=23bffabfa709b9579baf869e0d369bc3&query=";

function AllMovies() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const endpoint = FEATURED_API;
    getMovies(endpoint);
  }, []);

  const landing = () => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  };

  const getMovies = (endpoint) => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        setPage(data.page);
        setMovies(data.results);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(SEARCH_API + search)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
    setSearch("");
  };

  const handleNext = () => {
    let endpoint = "";
    console.log("CurrentPage", page);
    endpoint = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=23bffabfa709b9579baf869e0d369bc3&page=${
      page + 1
    }`;
    getMovies(endpoint);
  };

  const handlePrev = () => {
    let endpoint = "";
    if (page === 1) {
      return getMovies(endpoint);
    }
    endpoint = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=23bffabfa709b9579baf869e0d369bc3&page=${
      page - 1
    }`;
    getMovies(endpoint);
  };

  return (
    <div className="all-movie">
      <header>
        <h1>
          <Link className="link" to="/movie-flex" onClick={landing}>
            <i className="fas fa-video icon"></i> Movie Flex
          </Link>
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
        {movies.length > 1 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
      <div className="page-button">
        <button className="button prev-button" onClick={handlePrev}>
          Prev
        </button>
        <button className="button" onClick={handleNext}>
          Next
        </button>
      </div>
      <footer>All Right Reserved to @Movie-Flex</footer>
    </div>
  );
}

export default AllMovies;
