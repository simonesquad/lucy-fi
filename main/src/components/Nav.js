import React from 'react'

function Nav({ firstTxt, firstLink, twoTxt, twoLink, threeTxt, threeLink }) {
    return (
        <div className='main-nav'>
            <button text={firstTxt} link={firstLink} />
            <button text={twoTxt} link={twoLink} />
            <button text={threeTxt} link={threeLink} />
        </div>
    )
}

export default Nav
