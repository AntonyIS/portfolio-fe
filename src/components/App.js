import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home.js'
import Navbar from "./Navbar.js";


export default function App(){

    return (
        <>  
            <BrowserRouter>  
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
            </Routes>
            </BrowserRouter>
        </>
        
    )
}


