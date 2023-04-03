import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MoviesService } from "../API/movieServices";


export const MovieDetail = () => {
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
            <br />
            <div className="row row-card">
                <div className="col-lg-6">
                    <div>

                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt=""></img>
                    </div>

                </div>
                <div className="col-lg-6">
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
                        {movie.runtime} min
                    </p>

                    <div>
                        <h4>Generos:</h4>
                        {/* <ul>
                            {movie.genres.map((i) => {
                                return (
                                    <li key={i.id}>
                                        {i.name}
                                    </li>
                                )
                            })}
                        </ul> */}
                    </div>

                </div>

            </div>
        </section>
    )
}