import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Blogs from './future/Blogs.js'
import Home from './Home.js'
// import Users from './Users.js'
import Login from './authentication/Login'
import Logout from './authentication/Logout'

// import Signup from './Auth/Signup.js'
import Navbar from "./Navbar.js";


export default function App(){
    const  isAuthenticated = !!localStorage.getItem('accessToken')
    
    return (
        <>  
            <BrowserRouter>  
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                {/* <Route path="/blogs" element={<Blogs />}/>
                <Route path="/users" element={<Users />}/>
                <Route path="/signup" element={<Signup />}/> */}
                {
                    isAuthenticated ? (
                        
                        <Route path="/api/v1/logout" element={<Logout />}/>
                    ) : (
                        // Handle logout
                        <Route path="/api/v1/login" element={<Login />}/>
                    )
                }
               
            </Routes>
            </BrowserRouter>
        </>
        
    )
}


