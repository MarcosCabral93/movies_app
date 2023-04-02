import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { MoviesService } from "../API/movieServices";


export const MovieDetail =()=>{
    const params = useParams();
    const [movie, setMovie] = useState({});

    const getMovie = async () => {
        const { data } = await MoviesService.getMovieDetail(params.id);

        setMovie(data);
    };

    useEffect(() => {
        getMovie();
    });

    return (
     <section className="container">
        <h1> {movie.title}</h1>
        <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt=""></img>
        <div>
            <h4>Resumo:</h4>
            <p>
                {movie.overview}
            </p>
            <h4>Lançamento:</h4>
            <p>
                {movie.release_date}
            </p>
            <h4>Duração:</h4>
            <p>
                {movie.runtime}
            </p>
            <ul>
                {/* {movie.genres.map((i)=>{
                    return (
                        <li key={i.id}>
                          {i.name}
                        </li>
                    )
                })} */}
            </ul>
        </div>
     </section>
    )
}