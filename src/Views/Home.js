import { Movie } from "../Components/Movie"
import { useState, useEffect } from "react"
import { MoviesService } from "../API/movieServices";

export const Home = () => {
   const [movies, setMovies] = useState([])


   const getMovies = async () => {

      const {
         data: { results },
      } = await MoviesService.getMovies();

      setMovies(results);
   };
   
   useEffect(() => {
      getMovies();
   }, []);




   return (

      <div className="container">
         <h1 >
            Filmes mais Populares
         </h1>
         <br>
         </br>
         <div className="row gy-4 ">
            {
               movies.map((movie) => {
                  return (
                     <Movie key={movie.id} item={movie} />
                  )
               })
            }
         </div>

      </div>
   )
}