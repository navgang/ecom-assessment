"use client";
import {formatDuration} from '../util/formatDuration';
import React from "react";

type Movie = {
    id: number;
    title: string;
    genre: string;
    duration: number; // in minutes
    rating: number; // out of 10
    year: number;
};

export default function movieCard({
    movie,
    isFavorite,
    toggleFavorite,
}: {
    movie: Movie;
    isFavorite: boolean;
    toggleFavorite: (id: number) => void;
}) {
    return (
        <div 
            tabIndex={0}
            className="border p-4 flex justify between items-start"
        >   
         <div>
            <h2 className="font-bold text-lg">{movie.title}</h2>
            <p>{movie.year}</p>
            <p>{movie.rating}</p>
            <p>{movie.genre}</p>
            <p>{formatDuration(movie.duration)}</p>
         </div>
         <button
            aria-label={'Favorite for ${movie.title}'}
            onClick={() => toggleFavorite(movie.id)}
            className='text-xl'
         >
        </button>        
        </div>

    );
}