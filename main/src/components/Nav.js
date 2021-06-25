import React from 'react'
import Button from './Button';
import '../styles/Nav.css'

function Nav({ firstTxt, firstLink, twoTxt, twoLink, threeTxt, threeLink }) {
    return (
        <div className='main-nav'>
            <div className='title'>
                <h1>Lucija Fric</h1>
                <h4>UX UNICORN OF THE UNIVERSE</h4>
            </div>
                <div className='buttons'>
                <Button text={firstTxt} link={firstLink} />
                <Button text={twoTxt} link={twoLink} />
                <Button text={threeTxt} link={threeLink} />
                </div>
            
            
        </div>
    )
}

export default Nav
