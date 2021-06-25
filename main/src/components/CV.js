import React from 'react'
import Nav from './Nav';

function CV() {
    
    return (
        <div>
            <Nav 
                firstTxt='Home'
                firstLink='/'
                twoTxt='About'
                twoLink='/about'
                threeTxt='Contact'
                threeLink='/contact'
            />
        </div>
    )
}

export default CV
