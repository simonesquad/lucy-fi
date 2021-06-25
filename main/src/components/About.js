import React from 'react'
import Nav from './Nav';

function About() {
    return (
        <div>
            <Nav 
                firstTxt='Home'
                firstLink='/'
                twoTxt='CV'
                twoLink='/cv'
                threeTxt='Contact'
                threeLink='/contact'
            />
            
        </div>
    )
}

export default About
