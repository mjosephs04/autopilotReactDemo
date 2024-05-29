import React from 'react'
import NavBar from '../NavBar/NavBar'
import './Users.css'


const Users = () => {

    return(
        <div>
            <NavBar/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className='table-container'>
                <div className='table-card'>
                    <h1 className='user-data'>User Data Here</h1>
                    <p style={{alignContent: "center", textAlign: "center"}}>Search, and Sort functionality</p>
                </div>
            </div>
        </div>
    )
}

export default Users