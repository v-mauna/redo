import React from 'react';
import './welcome.css'


const greeting = () => {
    let today = new Date()
    let time = today.getHours()
    if(time > 5 && time < 12){
        return `good morning.`
    }else if(time >=12 && time < 18){
        return 'good afternoon.'
    }
    return 'good evening.'
    }

const Welcome = () => {
    return (
        <div>
            <div id = "home">
                <div id = "welcome-page-container">
                    <div className="welcomeHeader">
                            <div >{greeting()}
                            <br/>
                            i'm vanessa, a full stack engineer
                            <br/>
                            based in brooklyn, ny.

                            
                            </div>
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

