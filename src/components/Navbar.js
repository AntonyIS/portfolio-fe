import { Link } from "react-router-dom";
export default function  Navbar(){
    const  isAuthenticated = !!localStorage.getItem('accessToken')
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link to="/" style={{ color: 'inherit', fontSize:"1.8rem", textDecoration: 'inherit'}}>
                    <span className="navbar-brand" href="#">Antony Injila</span>
                </Link>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                           
                        </li>
                    </ul>
                    <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                        {/* {
                            isAuthenticated ? (
                                <li className="nav-item">
                                    <Link to="/api/v1/logout" style={{ marginRight:"10px",color:"black", fontSize:"1.1rem", textDecoration: 'inherit'}}>
                                        Logout
                                    </Link>
                                </li>
                            ) : (
                                <li className="nav-item">
                                    <Link to="/api/v1/login" style={{ marginRight:"10px",color:"black", fontSize:"1.1rem", textDecoration: 'inherit'}}>
                                        Login
                                    </Link>
                                </li>
                            )
                        }
                         */}

                        {/* <li className="nav-item">
                            <Link to="/signup" style={{ marginRight:"10px",color:"black", fontSize:"1.1rem", textDecoration: 'inherit'}}>
                                Signup 
                            </Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link to="/logout" style={{ marginRight:"10px",color:"black", fontSize:"1.1rem", textDecoration: 'inherit'}}>
                                Logout
                            </Link>
                        </li> */}
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}
