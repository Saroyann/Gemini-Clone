import React from 'react';
import './main.css';
import { assets } from '../../assets/assets';

const Main = () => {
    return (
        <div className='main'>
            <div className='nav'>
                <p>askIntelli</p>
                <img src={assets.user_icon} />
            </div>
            <div className="main-container">
                <div className="greet">
                    <p><span>Hello, Dev</span></p>
                    <p>How can i help you?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Suggest beautiful places to see on an upcoming road trip</p>
                        <img src={assets.compass_icon} />
                    </div>
                    <div className="card">
                        <p>How to center a div</p>
                        <img src={assets.bulb_icon} />
                    </div>
                    <div className="card">
                        <p>What is React JS</p>
                        <img src={assets.message_icon} />
                    </div>
                    <div className="card">
                        <p>Improving our code skills</p>
                        <img src={assets.code_icon} />
                    </div>
                </div>

                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" placeholder='enter your prompt' />
                        <div>
                            <img src={assets.gallery_icon} />
                            <img src={assets.mic_icon} />
                            <img src={assets.send_icon} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
