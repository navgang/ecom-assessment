import { use, useCallback, useEffect, useMemo, useState } from "react"; 
import { debounce } from "@/util/debounce";

type Movie = {
  id: number;
  title: string;
  genre: string;
  duration: number; // in minutes
  rating: number; // out of 10
  year: number;
};

export default function Page() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filter, setFilter] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [genre, setGenre] = useState('All');
  const [sort, setSort] = useState('rating');
  const [favorite, setFavorite] = useState<Record<number, boolean>>();
};

useEffect( () => {
  fetch("/movies.json").then((res) => res.json())
  .then((data: Movie[] => {
    setMovies(data);
  }))
});