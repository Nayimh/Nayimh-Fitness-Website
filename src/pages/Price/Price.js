import React from 'react';
import { Link } from 'react-router-dom';

const Price = (props) => {
    const { category,Price, img, description,id } = props?.price;
    return (
        <div >
            <div className="service">
            <div className="serviceSection ">
                <img className="w-100" src={img} alt="" />
                <h4>Duration: {category}</h4>
                <p>Package: ${Price}</p>
                    <p>{description}</p>
                    <Link to={`/booking/${id}`}><button  className="sbutton w-50  ">Details</button></Link>
                </div>
                </div>
        </div>
    );
};

export default Price;