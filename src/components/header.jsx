import React from 'react'
import "../css/header.css"
import plusIcon from "/plusIcon.svg"
import { useNavigate } from 'react-router-dom'
import { userContext } from '../context/usercontext'
import { useContext } from 'react'

const Header = () => {
    const navigate = useNavigate()
    const {User} = useContext(userContext)
    return (
        <div className='header-cont bg-white'>
            <div>
                <div className='header-text'>
                    <h2>Grievance Hub</h2>
                </div>
                <div className='add-grievance-cont'>
                    {!User.isAdmin && <div className='add-grievance-button' onClick={()=>navigate("/addGrievance")}>
                        <img src={plusIcon} alt=""/>
                        <p>Add a Grievance</p>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Header