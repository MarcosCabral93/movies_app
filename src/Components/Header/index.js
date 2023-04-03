import { Link } from "react-router-dom"

export const Header = () => {
    return (  
          <header>
  
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active"  to={"/"}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Most popular</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Heroes</a>
                        </li>
           
                    </ul>
                </div>
            </div>
        </nav>
        </header>
    )
}