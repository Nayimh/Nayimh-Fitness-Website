import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Booking.css'
const Booking = () => {
    const { serviceId } = useParams();

    const [details, setDetails] = useState([]);
    const [detail, setDetail] = useState({});
   

    useEffect(() => {
        fetch('/Services.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, []);

    useEffect(() => {
        const foundDetails = details.find(detail => detail.id === parseInt(serviceId))
        setDetail(foundDetails)
    }, [details]);


    return (
        <div id="booking" className="bookingContainer mt-5 pt-5">
            <h2> Booking Id No: {serviceId} </h2>
            <div className="detailCards my-5 ">
                <div className="detailsSection">
                    <img className="image" src={detail?.img} alt="" />
                    <h4>Name: {detail?.category}</h4>
                    <p>Price: {detail?.Price}</p>
                    <p>{detail?.description}</p>
                   <Link to="/home#services"> <button className="sbutton w-50">Go Back</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Booking;
