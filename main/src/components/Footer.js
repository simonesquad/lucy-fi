import React from 'react'
import '../styles/Footer.css';
//icons
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer() {
    return (
        <div className="footer">
            <div className="social-links">
            <a rel="noreferrer" href="https://www.linkedin.com/in/lucija-fric-b8261a158/" target="_blank">
            <LinkedInIcon 
                fontSize="medium" />
            </a>
            </div>
            
        </div>
    )
}

export default Footer
