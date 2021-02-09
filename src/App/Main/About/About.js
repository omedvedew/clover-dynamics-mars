import React from 'react';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-title">Welcome to Mars Discovering App</div>
            <div className="about-description">
                <p>This Mars Discovering App was developed by Olexii Medvediev as a test-task for employment.</p>
                <p>The usage is very simple and includes only few steps:</p>
                <ol type="1">
                    <li>Select NASA rover in a depending field;</li>
                    <li>Then select rover's camera;</li>
                    <li>Then enter sol (Martian day). Notice that not every sol has photos made by selected rover. If you entered a sol without any photo - browser will let you know, after that you may enter another sol or select another rover;</li>
                    <li>Press "GET PHOTOS" button;</li>
                    <li>Enjoy responsed photos.</li>
                </ol>
                <p className="plp">You can zoom a photo just with a click on it. Zoom out is also on a mouse-click.</p>
                <p>HAVE A GOOD TIME, ENJOY THE APP AND DON'T FORGET TO INVITE ME FOR INTERVIEW!</p>
            </div>
        </div>
    )
}

export default About;