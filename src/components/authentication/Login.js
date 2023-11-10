import {useState} from "react"
import PropTypes from 'prop-types';

async function loginUser(credentials) {
    return fetch("http://127.0.0.1:8081/api/v1/login", {
        method : 'POST',
        headers : {'Content-Type': 'application/json'},
        body : JSON.stringify(credentials)
    })
    .then(data => data.json())
}
function setUserToken (userToken) {
    sessionStorage.setItem('token', JSON.stringify(userToken))
}


export default function Login({ setToken }) {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [responseError, setResponseError] = useState()
    

    const handleSubmit = async e => {
        e.preventDefault();

        if (!email || !password) {
            setResponseError("Please enter both email and password")
            return
        }
        let token = await loginUser({email, password});
       
        if (token.error) {
            setResponseError(token.error)
            return
        }
        setUserToken(token.accessToken)
        setToken(token.accessToken)  
    }

    return(
      
        <div className="container py-5">
            <div className="row">
                <div className="col-sm-12 col-md-3 col-lg-3"></div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    { responseError && 
                        <div className="alert alert-danger">
                            <span>
                                {responseError}
                            </span>
                        </div>
                    }
        
                    
                    <div className="card ">
                        <div className="card-header">
                            <div className="row">
                                <div className="col-3 dis">
                                    <h5>Login</h5>
                                </div>
                            </div>
                        </div>
                       
                       
                        <div className="card-body p-3">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label for="email" className="form-label">Email</label>
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        placeholder=""
                                        value={email}
                                        id="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label for="password" className="form-label">Password</label>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        id="password" 
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-3 col-lg-3"></div>
            </div>
        </div>
    )
}


Login.propTypes = {
setToken: PropTypes.func.isRequired
}