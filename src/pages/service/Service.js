import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { category, img, Price, description, id } = props?.service;
    return (
        <div >
            <div className="service">
            <div className="serviceSection ">
                <img className="w-100" src={img} alt="" />
                <h4>Name: {category}</h4>
                <p>Price: ${Price}</p>
                    <p>{description}</p>
                    <Link to={`/booking/${id}`}><button  className="sbutton w-50  ">Details</button></Link>
                </div>
                </div>
        </div>
    );
};

export default Service;