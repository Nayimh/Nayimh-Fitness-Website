import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

import './Login.css'

const Login = () => {
    const { signInUsingGoogle, handleLogin, handleLoginPassword, handleLoginemail } = useAuth();
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
                <br /> <br />
            <button onClick={signInUsingGoogle} className="sbutton">Google SignIn</button>
            <br />
            
            </div>
           
        </div>
    );
};

export default Login;