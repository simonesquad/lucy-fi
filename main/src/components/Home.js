import React from 'react'
import Nav from './Nav'

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
            
        </div>
    )
}

export default Home
