import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

import './Login.css'

const Login = () => {
    const { signInUsingGoogle, handleLogin, handleLoginPassword, handleLoginemail } = useAuth();

  

    const history = useHistory();
    const location = useLocation();
    const redirect_url = location?.state?.from || '/'
 
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
            
    }

    return (
        <div className="loginContainer my-5 py-5">
            
            <div className="contactContainer bg-black mt-5">
            <h3 className="text-white"> Login </h3>
            <hr />
            <form id="contact-form">
    <div className="form-group">
        <label className="text-white" htmlFor="name">Email</label>
        <input onChange={handleLoginemail} type="email" className="form-control" required/>
    </div>
    <div className="form-group">
        <label className="text-white" htmlFor="exampleInputEmail1">Password</label>
        <input onChange={handleLoginPassword} type="password" className="form-control" required />
    </div>
        <p className="message"></p>
    <button onClick={handleLogin} on type="submit" className="btn btn-secondary text-white my-2 w-100">Login</button>
                </form>
               
                <Link to="/register">New User?</Link>
                <br />
                
             
                <div className="text-white">
                    <hr />
                </div>
            <button onClick={handleGoogleSignIn} className="sbutton">Google SignIn</button>
            <br />
            
            </div>
           
        </div>
    );
};

export default Login;