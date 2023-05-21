import { Link } from "react-router-dom";
export default function  Navbar(){
    return (
        <nav className="display-6 navbar bg-body-tertiary">
            <div className="container">
                <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                   <h1>
                        Antony Injila
                   </h1>
                </Link>
            </div>
        </nav>
    )
}
