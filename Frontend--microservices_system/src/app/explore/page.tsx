'use client';
import MovieCard, {MovieInfo} from "@/components/MovieCard";
import { useEffect, useState } from "react";

export default function ExploreMovies() {
    const [movies, setMovies] = useState<MovieInfo[]>([]);
    const [page, setPage] = useState(0);
    const [hasMore, setHasMore] = useState(true);

    const fetchMovies = async (page: number) => {
        const limit = 20;
        const res = await fetch(`/api/movies?limit=${limit}&offset=${page * limit}`);
        const data = await res.json();
        setMovies(prev => [...movies, ...data.movies]);
        if (data.movies < limit) setHasMore(false);
    };

    useEffect(() => {
        fetchMovies(page);
    }, [page]);
    
    const loadMore = () => setPage(prevPage => prevPage + 1)

    return (
        <div>
            <h1>Movies</h1>
            <div className="flex flex-wrap">
                { movies.map(movie => (<MovieCard key={ movie.movieId } title={ movie.title } genres={ movie.genres } />))}
            </div>
            { hasMore && (
                <button onClick={ loadMore } className="load-more-btn">
                    Load More
                </button>
            )}
            
        </div>
    )
}