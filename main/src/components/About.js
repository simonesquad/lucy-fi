import React from 'react'
import Nav from './Nav';
import SlowMotionVideoIcon from '@material-ui/icons/SlowMotionVideo';
import '../styles/About.css';
// import ReactPlayer from "react-player";

function About() {
    return (
        <div className="about-container">
            <Nav 
                firstTxt='Home'
                firstLink='/'
                twoTxt='CV'
                twoLink='/cv'
                threeTxt='Contact'
                threeLink='/contact'
            />
            {/* <ReactPlayer 
                url="https://www.facebook.com/lucija.lee/videos/10216512053729484/"
                controls
            /> */}
            <div className="video-link">
            <a rel="noreferrer" href="https://www.facebook.com/lucija.lee/videos/10216512053729484/" target="_blank">
            <SlowMotionVideoIcon 
                fontSize="large"/>
            </a>
            <h4>Interview with Red Light Radio</h4>
            </div>
        </div>
    )
}

export default About
