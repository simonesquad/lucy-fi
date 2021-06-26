import React from 'react'
import Nav from './Nav'

import '../styles/Home.css'

function Home() {
    return (
        <div className="home-container">
            <Nav 
                firstTxt='About'
                firstLink='/about'
                twoTxt='CV'
                twoLink='/cv'
                threeTxt='Contact'
                threeLink='/contact'
            />
            <div className="text">
                <p></p>
            </div>
        </div>
    )
}

export default Home
