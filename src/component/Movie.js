import React from "react";
import { Link } from "react-router-dom";

const IMAGE_API = "http://image.tmdb.org/t/p/w1280";
// const FEATURED_API =
//   "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=23bffabfa709b9579baf869e0d369bc3&page=1";

function Movie({ id, title, poster_path, overview, vote_average }) {
  
  const setVoteClass = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };

  return (
    <>
      <div className="movie">
        <Link to={`/movie/${id}`}>
          <img src={IMAGE_API + poster_path} alt={title} />
        </Link>
        <div className="movie-info">
          <Link className="link" to={`/movie/${id}`}><h3>{title}</h3></Link>
          <span className={`tag ${setVoteClass(vote_average)}`}>
            {vote_average}
          </span>
        </div>
      </div>
    </>
  );
}

export default Movie;
