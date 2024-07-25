import React, { useContext } from 'react';
import './main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

const Main = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

    return (
        <div className='main'>
            <div className='nav'>
                <p>askIntelli</p>
                <img src={assets.user_icon} alt="User Icon" />
            </div>
            <div className="main-container">

                {!showResult
                    ?
                    <>
                        <div className="greet">
                            <p><span>Hello, Dev</span></p>
                            <p>How can I help you?</p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>Suggest beautiful places to see on an upcoming road trip</p>
                                <img src={assets.compass_icon} alt="Compass Icon" />
                            </div>
                            <div className="card">
                                <p>How to center a div</p>
                                <img src={assets.bulb_icon} alt="Bulb Icon" />
                            </div>
                            <div className="card">
                                <p>What is React JS</p>
                                <img src={assets.message_icon} alt="Message Icon" />
                            </div>
                            <div className="card">
                                <p>Improving our code skills</p>
                                <img src={assets.code_icon} alt="Code Icon" />
                            </div>
                        </div>
                    </> : 
                    <div className='result'>



                    </div>
                }



                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter your prompt' />
                        <div>
                            <img src={assets.gallery_icon} alt="Gallery Icon" />
                            <img src={assets.mic_icon} alt="Mic Icon" />
                            <img onClick={onSent} src={assets.send_icon} alt="Send Icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
