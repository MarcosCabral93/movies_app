import { Movie } from "../../Components/Movie"

export const Home = () => {
    return (
        <div className="container">
            <div className="row gy-4 ">

                <div className="col-lg-3 card">
                   <Movie/>
                </div>
                <div className="col-lg-3 card">
                   <Movie/>
                </div>
                <div className="col-lg-3 card">
                   <Movie/>
                </div>
                <div className="col-lg-3 card">
                   <Movie/>
                </div>
                <div className="col-lg-3 card">
                   <Movie/>
                </div>
            </div>

        </div>
    )
}