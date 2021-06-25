import React from 'react'
import Nav from './Nav';
import EmailForm from './EmailForm';

function Contact() {
    return (
        <div>
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
