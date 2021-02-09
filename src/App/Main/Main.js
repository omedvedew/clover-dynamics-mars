import React from 'react';

import PhotoItems from './PhotoItems/PhotoItems';

const Main = () => {

    function getImgSrc() {
        let roverValue = document.querySelector(".rover-select").value;
        let cameraValue = document.querySelector(".camera-select").value;
        let solValue = document.querySelector(".sol-select").value;

        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${roverValue}/photos?sol=${solValue}&camera=${cameraValue}&api_key=yeFAmp065cqUV0DOhjDNiKUC62OoxQ9CbRJdOo3B`)
        .then(data => data.json())
        .then(json => {
            console.log(json);
          let imageItemCont = document.querySelector(".photo-items-container");
        
            for (const key in json.photos) {
                let image = document.createElement("img");
                image.classList.add("photo-img");
                image.src = json.photos[key].img_src;
                imageItemCont.append(image);
            }

            if (json.photos.length <= 0) {
                alert("There no photos on that sol. Please try another one.");
            }    
        })
    }

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
                                    <option value="curiosity">curiosity</option>
                                    <option value="opportunity">opportunity</option>
                                    <option value="spirit">spirit</option>
                                </select>
                            </div>

                            <div className="camera-select-container">
                                <h2 className="camera-select-title">Select camera:</h2>
                                <select className="camera-select">
                                    <option className="cam-option" value="fhaz">front</option>
                                    <option className="cam-option" value="rhaz">rear</option>
                                    <option className="cam-option" value="navcam">navigation</option>
                                </select>
                            </div>

                            <div className="sol-select-container">
                                <h2 className="sol-select-title">Enter sol:</h2>
                                <input type="text" className="sol-select" defaultValue="1000"></input>
                            </div>

                            <button onClick={getImgSrc} className="get-photos-btn">GET PHOTOS</button>

                        </div>
                    </div>
                    <div className="main-col-2">
                        <PhotoItems/>
                    </div>
                </div>
            </div>
        </div>
    )
};



export default Main;