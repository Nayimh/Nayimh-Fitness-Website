import React from 'react';
import { Link } from 'react-router-dom';
import initializeAuthentication from '../../../Firebase/firebaseInit';
import useAuth from '../../../Hooks/useAuth';

import './Signpu.css'

initializeAuthentication();

const Register = () => {
    const { handleEmail, handlePassword, handleRegister } = useAuth();
    return (
        <div className="registerConteiner">
            <div className="contactContainer mt-5">
            <h3> Register </h3>
            <hr />
            <form id="contact-form">
    
    <div className="form-group">
        <label htmlFor="name">Email</label>
        <input onChange={handleEmail} type="email" className="form-control" required />
    </div>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Password</label>
        <input onChange={handlePassword} type="password" className="form-control" required />
    </div>
   
    <button onClick={handleRegister} type="submit" className="btn btn-success text-white my-2 w-100">Register</button>
                </form>
                <br />
                <Link to="/login">Already regestered</Link>
            </div>
            
        </div>
    );
};

export default Register;