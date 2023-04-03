import { Link } from "react-router-dom"

export const Movie = ({ item }) => {

    return (
        <div className="col-lg-3 align-middle justify-content-center">
        
                <div>
                    <h5>
                        {item.title}
                    </h5>
                </div>
                <div>
                    <Link to={`/movie/${item.id}`} className="btn">
                        <img src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`} alt=""></img></Link>
                </div>
        </div>)
}