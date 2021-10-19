import React from 'react';


const Expert = (props) => {
    const { name, Price, img, category } = props.expert;
    return (
        <div className="service ">
        <div className="serviceSection">
            <img className="w-100" src={img } alt="" />
            <h2>Name: {name}</h2>
            
            <h4>Trainer at: {category}</h4>
            <p>montly Fee: ${Price}</p>
            <button className="sbutton w-50">Appointment</button>
            </div>
            </div>
    );
};

export default Expert;