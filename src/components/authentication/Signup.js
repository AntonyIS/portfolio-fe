import { useState } from "react";
import { useNavigate } from 'react-router-dom';



export default function Signup (){
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password1, setPassword1] = useState("")
    const [password2, setPassword2] = useState("")
    const [signupErrorMessage, setSignupErrorMessage] = useState("")
    const [serverErrorMessage, setServerErrorMessage] = useState("")
    const [passwordNotSame, setPasswordNotSame] = useState(false)
    const navigate = useNavigate()
    
    
    const handleSignup = e => {
        
        e.preventDefault();

        if (!firstname | !lastname | !email | !password1 | !password2){
            setSignupErrorMessage("")
            setPasswordNotSame(false)
            setServerErrorMessage("Please fill all inputs")
            return
        }else if (password1 === password2) {
            signupLogic(firstname,lastname,email, password1)
            .then((res)=>{
                if (res === undefined ){
                    setSignupErrorMessage("")
                    setPasswordNotSame(false)
                    setServerErrorMessage("Server not responding!")
                    return
                }
                else if (res.error){
                    setPasswordNotSame(false)
                    setServerErrorMessage("")
                    setSignupErrorMessage(res.error)
                    return
                }else{
                    setPasswordNotSame(false)
                    navigate("/login")

                }
            })
        }else{

            setSignupErrorMessage("")
            setServerErrorMessage("")
            setPasswordNotSame(true)
            return

        }
        
    }
   
   
    return(
        <div className="container-fluid py-5">
            <div className="row">
                <div className="col-sm-12 col-md-4 col-lg-4"></div>
                <div className="col-sm-12 col-md-4 col-lg-4">
                { serverErrorMessage && 
                        <div className="alert alert-danger">
                            <span>
                                {serverErrorMessage}
                            </span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-database-x" viewBox="0 0 16 16">
                                    <path d="M12.096 6.223A4.92 4.92 0 0 0 13 5.698V7c0 .289-.213.654-.753 1.007a4.493 4.493 0 0 1 1.753.25V4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16c.536 0 1.058-.034 1.555-.097a4.525 4.525 0 0 1-.813-.927C8.5 14.992 8.252 15 8 15c-1.464 0-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13h.027a4.552 4.552 0 0 1 0-1H8c-1.464 0-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10c.262 0 .52-.008.774-.024a4.525 4.525 0 0 1 1.102-1.132C9.298 8.944 8.666 9 8 9c-1.464 0-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777ZM3 4c0-.374.356-.875 1.318-1.313C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4Z"/>
                                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-.646-4.854.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708Z"/>
                                </svg>
                            </span>
                        </div>
                    }
                    { signupErrorMessage && 
                        <div className="alert alert-danger">
                            <span>
                                {signupErrorMessage}
                            </span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-database-x" viewBox="0 0 16 16">
                                    <path d="M12.096 6.223A4.92 4.92 0 0 0 13 5.698V7c0 .289-.213.654-.753 1.007a4.493 4.493 0 0 1 1.753.25V4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16c.536 0 1.058-.034 1.555-.097a4.525 4.525 0 0 1-.813-.927C8.5 14.992 8.252 15 8 15c-1.464 0-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13h.027a4.552 4.552 0 0 1 0-1H8c-1.464 0-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10c.262 0 .52-.008.774-.024a4.525 4.525 0 0 1 1.102-1.132C9.298 8.944 8.666 9 8 9c-1.464 0-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777ZM3 4c0-.374.356-.875 1.318-1.313C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4Z"/>
                                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-.646-4.854.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708Z"/>
                                </svg>
                            </span>
                        </div>
                    }
                    <div className="card ">
                        <div className="card-header">
                            <h3> Signup </h3>
                        </div>
                       
                        <div className="card-body p-3">
                            <form onSubmit={handleSignup}>
                                <div className="mb-3">
                                    <label for="firstname" className="form-label">First name</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="firstname" 
                                        value={firstname}
                                        onChange={(e) => setFirstname(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label for="lastname" className="form-label">Last name</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="lastname" 
                                        value={lastname}
                                        onChange={(e) => setLastname(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label for="email" className="form-label">Email</label>
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        id="email" 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label for="password1" className="form-label">Password</label>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        id="password1" 
                                        value={password1}
                                        onChange={(e) => setPassword1(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label for="password2" className="form-label">Confirm Password</label>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        id="password2" 
                                        value={password2}
                                        onChange={(e) => setPassword2(e.target.value)}
                                    />
                                    {passwordNotSame && 
                                        <div id="emailHelp" className="form-text text-danger">Passwords do not match !</div>
                                    }
                                    
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4"></div>
            </div>
        </div>
    )
}

const signupLogic = async (firstname,lastname,email, password) => {
    
    try {
        // Make an API call to your server with username and password
        const response = await fetch('http://localhost:8080/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({firstname,lastname,email, password }),
        });
       
        return response.json()

      } catch (error) {
        console.error('Error during signup:', error);
      }
}