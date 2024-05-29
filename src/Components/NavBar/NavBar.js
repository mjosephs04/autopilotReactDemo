import React, {useEffect, useState} from 'react'
import './NavBar.css'
import autopilotLogo from '../Assets/autopilot-logo.png'
import settingIcon from '../Assets/setting-icon.png'
import {Link, useNavigate} from 'react-router-dom'
import axios from "axios";

function NavBar() {

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const checkLoggedIn = () =>{
        axios({
            url:'http://localhost:4000/isLoggedIn',
            method: "POST",
            data: {
                query:
                    ' {\n' +
                    '     loggedIn{\n' +
                    '     response\n' +
                    ' }\n' +
                    ' }'
            }
        }).then((result) => {
            // console.log(result.data.data.loggedIn.response)
            if(result.data.data.loggedIn.response === false){
                navigate('/error-404')
            }
        }).catch(err =>{
            console.log("error: " + err)
        })
    }

    const getUserName = () => {
        axios({
            url:'http://localhost:4000/isLoggedIn',
            method: "POST",
            data: {
                query:
                    '{\n' +
                    '    getUserName {\n' +
                    '    userName\n' +
                    '}\n' +
                    '}'
            }
        }).then((result) => {
            // console.log(result.data.data.getUserName.userName)
            if(result.data.data.getUserName.userName === ""){
                navigate('/error-404')
            } else{
                setUsername(result.data.data.getUserName.userName)
            }
        }).catch(err =>{
            console.log("error: " + err)
        })
    }

    const logOut = () => {
        axios({
            url:'http://localhost:4000/isLoggedIn',
            method: "POST",
            data: {
                query:
                    'mutation logout{\n' +
                    '    loggingOut\n' +
                    '}'
            }
        }).then((result) => {
            console.log(result)
            if(result.status === 200){
                navigate('/')
            }
        }).catch(err =>{
            console.log("error: " + err)
        })
    }

    useEffect(() => {
        checkLoggedIn();
        getUserName();
    }, []);

    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };

    return (
        <>
            <div className='navbar'>
                <div className='logo-selection'>
                    <Link to='/home'>
                        <img src={autopilotLogo} className='logo' alt='autopilot logo'/>
                    </Link>
                </div>

                <div className='links'>
                    <Link to='/home'>
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

                <div className='user'
                     onMouseEnter={handleMouseEnter}
                     onMouseLeave={handleMouseLeave}>
                    <h1 className='home-link'>{username}</h1>
                    <img src={settingIcon} className='setting-icon' alt='settings icon'/>

                </div>

                {isDropdownVisible && (
                <div className='dropDown-container'
                     onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <div className='dropdown'>
                        <div className='my-account'>My Account</div>
                        <div className='logout'
                            onClick={logOut}>Logout</div>
                    </div>
                </div>
                )}
            </div>

        </>

    )
}

export default NavBar;