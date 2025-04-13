import React from 'react'
import "../css/header.css"
import plusIcon from "/plusIcon.svg"

const Header = () => {
    return (
        <div className='header-cont bg-white'>
            <div>
                <div className='header-text'>
                    <h2>Grievance Hub</h2>
                </div>
                <div className='add-grievance-cont'>
                    <div className='add-grievance-button'>
                        <img src={plusIcon} alt=""/>
                        <p>Add a Grievance</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header