import React from 'react';
import './About.css'
const AboutUs = () => {
    return (
        <div className="my-5 aboutUsContainer">
            <div className="bg  mb-3  w-75 mx-auto">
            <h2 className="text-white">WHO WE ARE</h2>
            <h5 className="w-75 mx-auto text-white">Smart Fit courses and certifications are open to individuals and trainers seeking to improve their health and fitness through effective training and nutritional strategies.</h5>
            </div>
            <div>
            <iframe  className="w-75 video" width="560" height="315" src="https://www.youtube.com/embed/ECxYJcnvyMw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    );
};

export default AboutUs;