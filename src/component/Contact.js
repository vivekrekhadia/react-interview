//used Emailjs for getting the email without backend
import emailjs from 'emailjs-com'
import React from 'react'
import "./Contact.css"

const Contact = () => {
    const sendEmail=(e)=>{
    
        e.preventDefault();
        emailjs.sendForm('service_vhs66yf','template_oigupfl',e.target,'user_vj9WKYOdw6KkvxlqiKdZD').then(r=>{console.log(r)}).catch(err=>{console.log(err)})

    }
    return (
        <div className="container border">
            <h1>Contact Us</h1>
            <form className="row" onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="name" placeholder="Enter your name" className="form-control" autoFocus/>

                <label>Age</label>
                <input type="number" name="user_age" min="25" max="45" placeholder="Enter your age" className="form-control"/>

                <label>Email</label>
                <input type="email" name="user_email" placeholder="Enter Email" className="form-control"/>

                <label>Message</label>
                <textarea name="message" rows="4" className="form-control"/>
                <input type="submit" value="send" className="form-control btn btn-primary"/>
            </form>
        </div>

    
    );
}

export default Contact;