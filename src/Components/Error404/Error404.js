import React from 'react'
import './Error404.css'
import wheelLogo from '../Assets/steeringWheel.png'

const Error404 = () => {

    return (
        <div>
            <div className='errorContainer'>
                <div className='error-card'>
                    <img src={wheelLogo} className='wheelLogoError' alt='wheel logo'/>
                    <div className='errorMsg'>
                        <h1>Error 404: Page Not Found</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error404