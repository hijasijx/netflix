import React from "react";

export function MovieCard({ movie }) {
  return (
    <div>
      <h3>{movie.title}</h3>
      <p>{movie.overview}</p>
      {/* Add any additional movie details you want to display */}
    </div>
  );
}
