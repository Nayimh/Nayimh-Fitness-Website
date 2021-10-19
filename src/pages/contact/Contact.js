import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div id="contact" className="contactContainer my-5">
        <h3 className="text-white "> Contact Us </h3>
        <hr />
        <form id="contact-form">
<div className="form-group">
    <label className="text-white text-start" htmlFor="name">Name</label>
    <input type="text" className="form-control" />
</div>
<div className="form-group">
    <label className="text-white text-start" htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" aria-describedby="emailHelp" />
</div>
<div className="form-group">
    <label className="text-white" htmlFor="message">Message</label>
    <textarea className="form-control" rows="5"></textarea>
<button type="submit" className="sbutton my-1 w-50">Submit</button>
</div>
</form>
        </div>
    );
};

export default Contact;