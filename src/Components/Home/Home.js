import React from 'react'
import './Home.css'
import NavBar from '../NavBar/NavBar'

const Home = () => {
    return (
        <div>
            <NavBar/>

            <br/>
            <br/>
            <br/>


            <div className='growth-container'>
                <div className='growth-card'>

                    <p className='growth'>Growth</p>

                    <div className='data'>
                        <div className='user-data'>
                            <p className='user-number'>999</p>
                            <h1>Users</h1>
                        </div>
                        <div className='subscription-data'>
                            <p className='user-number'>200</p>
                            <h1>Subscribers</h1>
                        </div>
                        <div className='social-media-data'>
                            <p className='user-number'>500</p>
                            <h1>Followers</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home