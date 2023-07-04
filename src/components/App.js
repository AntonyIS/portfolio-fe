import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogs from './Blogs.js'
import Home from './Home.js'
// import Users from './Users.js'
// import Login from './Login.js'
// import Logout from './Logout.js'
// import Signup from './Auth/Signup.js'
import Navbar from "./Navbar.js";


export default function App(){
    
    return (
        <>  
            <BrowserRouter>  
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                {/* <Route path="/blogs" element={<Blogs />}/>
                <Route path="/users" element={<Users />}/>
                <Route path="/signup" element={<Signup />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/logout" element={<Logout />}/> */}
            </Routes>
            </BrowserRouter>
        </>
        
    )
}


