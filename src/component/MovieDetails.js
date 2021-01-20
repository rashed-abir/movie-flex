import React, { useState, useEffect } from "react";
import MainImage from "./MainImage";
import MovieInfo from './MovieInfo';

const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";
const IMAGE_SIZE = "w1280";

// const FEATURED_API =
//   "https://api.themoviedb.org/3/movie/464052?api_key=23bffabfa709b9579baf869e0d369bc3";

function MovieDetails(props) {
//   const id = props.match.params.movieId;
  const [movies, setMovies] = useState([]);
  const [LoadingForMovie, setLoadingForMovie] = useState(true);

  useEffect(() => {
    let endpointForMovieInfo = `https://api.themoviedb.org/3/movie/464052?api_key=23bffabfa709b9579baf869e0d369bc3`;
    fetchDetailInfo(endpointForMovieInfo);
  }, []);

  const fetchDetailInfo = (endpoint) => {
    fetch(endpoint)
      .then((result) => result.json())
      .then((result) => {
        console.log(result);
        setMovies(result);
        setLoadingForMovie(false);
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div>
      <div>
        {!LoadingForMovie ? (
          <MainImage
            image={`${IMAGE_BASE_URL}${IMAGE_SIZE}/${movies.backdrop_path}`}
            title={movies.original_title}
            text={movies.overview}
          />
        ) : (
          <div>loading...</div>
        )}
      </div>
      <div>
        {!LoadingForMovie ? (
          <MovieInfo movie={movies} />
        ) : (
          <div>loading...</div>
        )}
      </div>
      <footer>All Right Reserved to @Movie-Flex</footer>
    </div>
  );
}

export default MovieDetails;
