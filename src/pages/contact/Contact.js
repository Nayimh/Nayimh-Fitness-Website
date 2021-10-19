import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div id="contact" className="contactContainer my-5">
        <h3 className="text-white"> Contact Us </h3>
        <hr />
        <form id="contact-form">
<div className="form-group">
    <label className="text-white" htmlFor="name">Name</label>
    <input type="text" className="form-control" />
</div>
<div className="form-group">
    <label className="text-white" htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" aria-describedby="emailHelp" />
</div>
<div className="form-group">
    <label className="text-white" htmlFor="message">Message</label>
    <textarea className="form-control" rows="5"></textarea>
</div>
<button type="submit" className="btn btn-secondary my-2 w-50">Submit</button>
</form>
        </div>
    );
};

export default Contact;