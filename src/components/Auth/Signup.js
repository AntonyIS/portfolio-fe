import { useState } from "react";



export default function Signup (){
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password1, setPassword1] = useState("")
    const [password2, setPassword2] = useState("")
    const [signupError, setSignupError] = useState("")
    const [userSignedUp, setUserSignedUp] = useState(false)
    

    
    const handleSignup = e => {
       
        e.preventDefault();
        if (!firstname | !lastname | !email | !password1 | !password2){
            console.log("Fill in values!")
        }else if (!password1 !== password2) {
            console.log("Password not the same!")
        }else{
            signupLogic(firstname,lastname,email, password1,password2)
            .then((res)=>{
                if (res.error){
                    setSignupError(res.error)
                    return
                }else{
                    setUserSignedUp(true)
                }
            })
        }
        
    }
   
    return(
        <div className="container-fluid py-5">
            <div className="row">
                <div className="col-sm-12 col-md-4 col-lg-4"></div>
                <div className="col-sm-12 col-md-4 col-lg-4">
                    <div className="card ">
                        <div className="card-header">
                            <h3> Signup </h3>
                        </div>
                        { signupError && 
                             <span className="alert alert-warning">
                                {signupError}
                            </span>
                        }
                        <div className="card-body p-3">
                            <form onSubmit={handleSignup}>
                                <div class="mb-3">
                                    <label for="firstname" class="form-label">First name</label>
                                    <input 
                                        type="text" 
                                        class="form-control" 
                                        id="firstname" 
                                        value={firstname}
                                        onChange={(e) => setFirstname(e.target.value)}
                                    />
                                </div>
                                <div class="mb-3">
                                    <label for="lastname" class="form-label">Last name</label>
                                    <input 
                                        type="text" 
                                        class="form-control" 
                                        id="lastname" 
                                        value={firstname}
                                        onChange={(e) => setLastname(e.target.value)}
                                    />
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email</label>
                                    <input 
                                        type="email" 
                                        class="form-control" 
                                        id="email" 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div class="mb-3">
                                    <label for="password1" class="form-label">Password</label>
                                    <input 
                                        type="password" 
                                        class="form-control" 
                                        id="password2" 
                                        value={password1}
                                        onChange={(e) => setPassword1(e.target.value)}
                                    />
                                </div>
                                <div class="mb-3">
                                    <label for="password2" class="form-label">Confirm Password</label>
                                    <input 
                                        type="password" 
                                        class="form-control" 
                                        id="password2" 
                                        value={password2}
                                        onChange={(e) => setPassword2(e.target.value)}
                                    />
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4"></div>
            </div>
        </div>
    )
}

const signupLogic = async (firstname,lastname,email, password1,password2) => {
    
    try {
        // Make an API call to your server with username and password
        const response = await fetch('http://localhost:8080/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({firstname,lastname,email, password1,password2 }),
        });
       
        if (response.ok) {
            // redirect to login page
            
            return response.json()
        } else {
            // Failed signup
            return response.json()
        }
      } catch (error) {
        console.error('Error during signup:', error);
      }
}