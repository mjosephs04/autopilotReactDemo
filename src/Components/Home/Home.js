import React from 'react'
import './Home.css'
import NavBar from '../NavBar/NavBar'
import robinhoodLogo from '../Assets/Robinhood-logo.png'
import webullLogo from '../Assets/webull-logo.png'
import tdLogo from '../Assets/TD-logo.png'
import fidelityLogo from '../Assets/fidelity-logo.png'
import schwabLogo from '../Assets/schwab-logo.png'

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
                            <h1 className='labels'>Users</h1>
                        </div>
                        <div className='subscription-data'>
                            <p className='user-number'>200</p>
                            <h1 className='labels'>Subscribers</h1>
                        </div>
                        <div className='social-media-data'>
                            <p className='user-number'>500</p>
                            <h1 className='labels'>Followers</h1>
                        </div>
                    </div>
                </div>
            </div>

            <br/>
            <br/>
            <br/>

            <div className='status-container'>
                <div className='status-card'>
                    <p className='status'>Status</p>

                    <div className='data'>
                        <div className='card'>
                            {/*ROBINHOOD*/}
                            <div className='circle'/>
                            <p className='api-data'>Latency: 20ps</p>
                            <p className='api-data'>Response: 200</p>
                            <img src={robinhoodLogo} className='robinhood-logo' alt='robinhood logo'/>
                        </div>

                        <div className='card'>
                            {/*WEBULL*/}
                            <div className='circle' style={{backgroundColor: "#ffc800"}} />
                            <p className='api-data'>Latency: 75ps</p>
                            <p className='api-data'>Response: 200</p>
                            <img src={webullLogo} className='webull-logo'  alt='webull logo'/>
                        </div>

                        <div className='card'>
                            {/*TD AMERITRADE*/}
                            <div className='circle' style={{backgroundColor: "#f62447"}}/>
                            <p className='api-data'>Latency: 200ps</p>
                            <p className='api-data'>Response: 500</p>
                            <img src={tdLogo} className='td-logo'  alt='td ameritrade logo'/>
                        </div>

                        <div className='card'>
                            {/*FIDELITY*/}
                            <div className='circle' style={{backgroundColor: "#969696"}}/>
                            <p className='api-data'>Latency: 0ps</p>
                            <p className='api-data'>Response: 000</p>
                            <img src={fidelityLogo} className='fidelity-logo'  alt='fidelity logo'/>
                        </div>

                        <div className='card'>
                            {/*SCHWAB*/}
                            <div className='circle' style={{backgroundColor: "#969696"}}/>
                            <p className='api-data'>Latency: 0ps</p>
                            <p className='api-data'>Response: 000</p>
                            <img src={schwabLogo} className='schwab-logo'  alt='schwab logo'/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Home