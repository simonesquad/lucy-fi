import emailjs from "emailjs-com";
import React from 'react';
import '../styles/EmailForm.css';

export default function EmailForm() {

    function sendEmail(e) {
        e.preventDefault();
//need to create another email service code here***
    emailjs.sendForm('service_x0xltyg', 'template_kqymnmk', e.target, 'user_jMWnlaeLAc6VuXUX6i7eh')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    }

    return(
        <div>
            <div className="container">
            <form onSubmit={sendEmail}>
            <div className="contents">
                <div className="row pt-5 mx-auto">
                    <div className="col-8 form-group mx-auto">
                        <input type="text" className="form-control" placeholder="Name" name="name" />
                    </div>
                    <div className="col-8 form-group mx-auto">
                        <input type="email" className="form-control" placeholder="Email" name="email" />
                    </div>
                    <div className="col-8 form-group mx-auto">
                        <input type="text" className="form-control" placeholder="Subject" name="subject" />
                    </div>
                    <div className="col-8 form-group mx-auto">
                        <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message here" name="message"></textarea>
                    </div>
                    <div className="col-8 pt-2 mx-auto">
                        <input type="submit" className="btn btn-info" value="Send It"></input>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
    )
}