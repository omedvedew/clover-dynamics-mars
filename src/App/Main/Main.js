import React from 'react';

const Main = () => {
    return (
        <div className="cover-container">
            <div className="cover-overlay">
                <div className="main-container row">
                    <div className="main-col-1">
                        <div className="title">MARS DISCOVERING APP</div>
                        
                        <div className="input-container">
                            
                            <div className="rover-select-container">
                                <h2 className="rover-select-title">Select rover:</h2>
                                <select className="rover-select">
                                    <option value="none"></option>
                                    <option value="curiosity">curiosity</option>
                                    <option value="opportunity">opportunity</option>
                                    <option value="spirit">spirit</option>
                                </select>
                            </div>

                            <div className="camera-select-container">
                                <h2 className="camera-select-title">Select camera:</h2>
                                <select className="camera-select">
                                    <option value="none"></option>
                                    <option value="front">front</option>
                                    <option value="rear">rear</option>
                                    <option value="top">top</option>
                                </select>
                            </div>

                            <div className="sol-select-container">
                                <h2 className="sol-select-title">Enter sol:</h2>
                                <input type="text" className="sol-select"></input>
                            </div>

                            <button className="get-photos-btn">GET PHOTOS</button>

                        </div>
                    </div>
                    <div className="main-col-2">Hello</div>
                </div>
            </div>
        </div>
    )
}

export default Main;