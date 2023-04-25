import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogs from './Blogs.js'
import Home from './Home.js'
import Users from './Users.js'



export default function App(){
    return (
        <>  
            <BrowserRouter>  
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/blogs" element={<Blogs />}/>
                    <Route path="/users" element={<Users />}/>
                </Routes>
            </BrowserRouter>
        </>
        
    )
}


