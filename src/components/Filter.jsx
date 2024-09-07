import React from "react";
import MovieList from "./MovieList";

function Filter({ movies, search, rating }) {
  const filteredMovies = movies.filter((movie) => {
     const searchMatch = movie.title.toLowerCase().includes(search.toLowerCase());
     const ratingMatch = movie.rating >= rating;
     return searchMatch && ratingMatch;
  });
  return (
    <>
      {filteredMovies.length > 0 ? (
        filteredMovies.map((movie) => <MovieList key={movie.id} movie={movie} />)
      ) : (
        <p>No movie found</p>
      )}
    </>
  );
}

export default Filter;
