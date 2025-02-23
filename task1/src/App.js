import React from "react";
import "./App.css";

const FavoriteMovie = () => {
  const movie = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    genre: "Sci-Fi, Thriller",
    description:
      "A thief who enters the dreams of others to steal secrets is given a task to plant an idea into someone's subconscious.",
  };

  return (
    <div className="favorite-movie" style={{ textAlign: "center", padding: "20px" }}>
      <h1>My Favorite Movie</h1>
      <h2>{movie.title}</h2>
      <p><strong>Director:</strong> {movie.director}</p>
      <p><strong>Year:</strong> {movie.year}</p>
      <p><strong>Genre:</strong> {movie.genre}</p>
      <p><strong>Description:</strong> {movie.description}</p>
    </div>
  );
};

export default FavoriteMovie;