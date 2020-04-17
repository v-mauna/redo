import React from 'react';
import './welcome.css'


const greeting = () => {
    let today = new Date()
    let time = today.getHours()
    if(time > 5 && time < 12){
        return `hi and good morning.`
    }else if(time >=12 && time < 18){
        return 'hi and good afternoon.'
    }
    return 'hi and good evening.'
    }

const Welcome = () => {
    return (
        <div>
            <div id = "home">
                <div id = "welcome-page-container">
                    <div className="welcomeHeader">
                            <div className ="typeWrite">{greeting()}</div>
                            <p className='welcome'> Welcome</p>
                        </div>
                        <div className = "bottom">
                        </div>
                    </div>
                </div>
            
            <div>
            </div>
            </div>
    );
};

export default Welcome;

