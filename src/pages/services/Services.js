import React, { useEffect, useState } from 'react';
import Service from '../service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('Services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);


    return (
        <div className="mb-5 mt-5 " id="services">
            <p className="mb-5 Paragraph bg-black text-white p-5">Want to be healthy and have a perfect body? SMART FIT is the right decision for you! It will create your personal training program and balance your diet so you could get the
                shape of your dream shortly!</p>
            <h1>Our Services</h1>
            <h4 className="text-black">TAKE YOUR TRAINING TO THE NEXT LEVEL</h4>
            
            <div className="container">
               
            {
                services.map(service => <Service
                    key={service.category}
                    service={service}
                ></Service>)
            }
           </div>
        </div>
    );
};

export default Services;