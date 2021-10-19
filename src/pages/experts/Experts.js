
import React, { useEffect, useState } from 'react';
import Expert from '../expert/Expert';
import './Experts.css'


const Experts = () => {
    const [experts, setExperts] = useState([]);

    useEffect(() => {
        fetch('trainer.json')
            .then(res => res.json())
            .then(data => setExperts(data))
    } , [])

    return (
        <div id="trainer" className="my-5 pt-5 expert-section">
            <div className="heading w-75 mx-auto">
            <h2 className="mt-5">Our Trainer</h2>
            <p className="text-white">We will create your personal training program and balance your diet so you could get the
shape of your dream shortly!</p>
            </div>
            <div className=" container my-5">
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;