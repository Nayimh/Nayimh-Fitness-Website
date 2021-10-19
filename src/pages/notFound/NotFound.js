import React from 'react';
import './NotFound.css'
import image from '../../image/notFound/notFound.jpg'
import { Link } from 'react-router-dom';


const NotFound = () => {
    return (
        <div className="notFound">
            <div className="imgContainer">
            <img src={image} alt="" />
            </div>
           <Link to="/home"> <button className="mt-5 btn-secondary">Home</button></Link>
        </div>
    );
};

export default NotFound;