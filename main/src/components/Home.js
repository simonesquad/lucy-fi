import React from 'react'
import Nav from './Nav'
import Profile from '../assets/Lucy2.jpg';

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
            <div className="home-contents">
                <img src={Profile} alt="Lucija">
                </img>
                <p>Hi! My name is Lucija and I'm a native Croatian who followed her passion for music, psychology, and experience around the world. I'm currently enhancing my training in programming, advanced statistics, and HCI confidently seeking job opportunities in User Experience research and Data Analyst careers. From my diverse experience and psychology background I hold a strong research aptitude, analytical mindset and am adept at working both as a cross-functional team member and individual contributor.</p>
            </div>
        </div>
    )
}

export default Home
