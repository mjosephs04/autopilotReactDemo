import React, {useEffect, useState} from 'react'
import './Login.css'
import wheelLogo from '../Assets/steeringWheel.png'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    const verifyCredentials = () =>{

        // console.log(username)
        // console.log(password)
        axios({
            url:'http://localhost:4000/authentication',
            method: "POST",
            data: {
                query:
                    '{\n' +
                    '  verify(username: "' + username + '"' +
                    ', password: "' + password +
                    '") {\n' +
                    '    response\n' +
                    '  }\n' +
                    '}\n'
            }
        }).then((result) => {
            // console.log(result.data.data.verify.response)
            if(result.data.data.verify.response === true){
                navigate('/home')
            }else{
                alert("Username or Password not valid")
                // navigate('/login-error')
            }
        }).catch(err =>{
            console.log("error: " + err)
        })

    }
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
            if(result.data.data.loggedIn.response === true){
                navigate('/home')
            }
        }).catch(err =>{
            console.log("error: " + err)
        })
    }

    useEffect(() => {
        checkLoggedIn();
    }, []);


    return (
        <div>
            <div className='container'>
                <div className='login-card'>
                    <img src={wheelLogo} className='wheelLogo' alt='wheel logo'/>
                    <div className='fields'>
                        <div className='username'>
                            <p>Username: </p>
                            <input type='text'
                                   className='username-input'
                                   placeholder="Username"
                                   onChange={evt => setUsername(evt.target.value)}/>
                        </div>

                        <div className='password'>
                            <p>Password: </p>
                            <input type='text'
                                   className='password-input'
                                   placeholder="Password"
                                   onChange={evt => setPassword(evt.target.value)}/>
                        </div>

                        <div className='signIn-container'>
                            <button className='signIn-button' onClick={verifyCredentials}>Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login