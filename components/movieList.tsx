import React from "react";
import movieCard from "./movieCard";

export default function movieList({movies: Movie, favorites: boolean, toggleFavorite}) {
    if (movies.length === 0)
    {
        return <div>No movies found.</div>;
    }

    return (
        <div className="grid gap-4">
            {movies.map((movie) => (
                <movieCard
                    key={movie.id}
                    movie={movie}
                    isFavorite={!!favorites[movie.id]}
                    toggleFavorite={toggleFavorite}
                />
            ))}
        </div>
    );
}