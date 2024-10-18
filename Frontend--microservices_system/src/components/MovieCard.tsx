import { ArrowRightIcon } from "@heroicons/react/20/solid"
import { useEffect, useState } from "react";

export interface MovieInfo {
    movieId?: string;
    title: string;
    genres: string;
}

export default function MovieCard({title, genres}:MovieInfo) {
    // const [movieInfo, setMovieInfo] = useState<MovieInfo | null>(null);
    // const fetchMovie = async () => {
    //     try {
    //         const response = await fetch("http://127.0.0.1:8001/movie/2", {
    //             method: "GET",
    //             headers: { "Content-Type": "application/json" }
    //         });

    //         if (!response.ok) {
    //             console.error("Failed to fetch movie details ")
    //         } else {
    //             const data = await response.json();
    //             setMovieInfo(data);
    //         }
    //     } catch (error) {
    //         console.error("Error fetching movie details: ", error);
    //     }

    // }

    // useEffect(() => {
    //     fetchMovie();
    // },[])
    return (

        <div className="w-[180px] h-[315px] bg-white border border-gray-200 rounded-lg shadow">
            <div className="p-5">
                    <h3>{ title }</h3>
                    <p>{ genres }</p>
            </div>
        </div>

    )
}