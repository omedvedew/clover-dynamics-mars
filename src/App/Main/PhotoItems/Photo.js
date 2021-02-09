import React from 'react';

const Photo = (
    {
        image,
    }
) => {
    return (
        <img src={image} className="photo-img"></img>
    )
}

export default Photo;