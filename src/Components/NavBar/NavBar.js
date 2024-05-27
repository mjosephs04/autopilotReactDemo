import React from 'react'
import './NavBar.css'
import autopilotLogo from '../Assets/autopilot-logo.png'
import settingIcon from '../Assets/setting-icon.png'
import {Link} from 'react-router-dom'

function NavBar() {
    return (
        <div className='navbar'>
            <div className='logo-selection'>
                <Link to='/'>
                    <img src={autopilotLogo} className='logo' alt='autopilot logo'/>
                </Link>
            </div>

            <div className='links'>
                <Link to='/'>
                    <p className='home-link'>Home</p>
                </Link>
                <Link to='/users'>
                    <p className='home-link'>Users</p>
                </Link>
                <Link to='/status'>
                    <p className='home-link'>Status</p>
                </Link>

                <p className='home-link'>Analytics</p>
                <p className='home-link'>Incidents</p>
            </div>

            <div className='user'>
            <h1 className='home-link'>USER</h1>
                <Link to='/settings'>
                    <img src={settingIcon} className='setting-icon' alt='settings icon'/>
                </Link>
            </div>

        </div>

    );
}

export default NavBar;