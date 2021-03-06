import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className=" mx-auto footer pt-5 mt-5">
            <div className="mx-auto footerConteiner">
            <div className="info">
            <h4>About Smart Fit</h4>
<p>What Is SmartFit?</p>
                <p>Get Started</p>
                <p>Workouts</p>
                
                <p>FAQ</p>
                <p>Careers</p>
            </div>
            <div className="info">
                <h4>Training</h4>
                <p>Courses Near You</p>
                <p>Certificate Courses</p>
                <p>Certifications</p>
                <p>Online Courses</p>
                <p>Preferred Provider Courses</p>
            </div>
            <div className="info">
                <h4>Community</h4>
            <p>Find a Trainer</p>
            <p>Scholarship Program</p>
            <p>Foundation</p>
            <p>Inclusion</p>
            <p>Local News</p>
                </div>
            </div>
            <br />
            <hr style={{
      borderColor: "white"
    }} />
    <small className="copyrright">┬ęCopyright by Smart Fit</small>
        </div>
    );
};

export default Footer;