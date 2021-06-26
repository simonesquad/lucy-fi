import React from 'react'
import Nav from './Nav';
import EmailForm from './EmailForm';
import '../styles/Contact.css';

function Contact() {
    return (
        <div className="contact-container">
            <Nav 
                firstTxt='Home'
                firstLink='/'
                twoTxt='About'
                twoLink='/about'
                threeTxt='Cv'
                threeLink='/cv'
            />
           <EmailForm 
           /> 
        </div>
    )
}

export default Contact
