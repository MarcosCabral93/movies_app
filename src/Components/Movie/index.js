import { Link } from "react-router-dom"

export const Movie = ({ item }) => {
    
    return (
        <div className="col-lg-3 card">
                <h4>
                    {item.title}
                </h4>
            <img src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`} alt=""></img>
            <div>
                <Link to={`/movie/${item.id}`} class="btn btn-success w-100">+ Info</Link>
            </div>
        </div>)
}