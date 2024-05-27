import React from 'react'
import NavBar from '../NavBar/NavBar'
import './Login.css'
import wheelLogo from '../Assets/steeringWheel.png'

const Login = () => {
    return (
        <div>
            <div className='topbar'>
                <div>
                    ff
                </div>
            </div>

            <div className='container'>
                <div className='login-card'>
                    <img src={wheelLogo} className='wheelLogo'  alt='wheel logo'/>
                    <div className='fields'>
                        <div className='username'>
                            <p>Username: </p>
                            <input type='text' className='username-input' value='Username'/>
                        </div>

                        <div className='password'>
                            <p>Password: </p>
                            <input type='text' className='password-input' value='Password'/>
                        </div>

                        <div className='signIn-container'>
                            <button className='signIn-button'>Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login