import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogs from './components/Blogs.js'
import Home from './components/Home.js'



export default function App(){
    return (
        <>  
            <BrowserRouter>  
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/blogs" element={<Blogs />}/>
                </Routes>
            </BrowserRouter>
        </>
        
    )
}


