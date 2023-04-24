import { Link } from "react-router-dom";
export default function  Navbar(){
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container">
                <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                    <span className="navbar-brand mb-0 h1">Antony Injila</span>
                </Link>
            </div>
        </nav>
    )
}
