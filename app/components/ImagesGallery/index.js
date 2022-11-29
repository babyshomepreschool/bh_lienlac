import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from 'prop-types';


function ImagesGallery({ albumURL }){
    const [images, setImages] = useState(null);
    const getAlbumId = (URL) => {
        return URL ? URL.split('gl/')[1] : null
    }

    useEffect(() => {
        let shouldCancel = false;
        const call = async () => {
            let id = getAlbumId(albumURL)
            const response = await axios.get(
                `https://google-photos-album-demo2.glitch.me/${id}`
            );
            if (!shouldCancel && response.data && response.data.length > 0) {
                setImages(
                    response.data.map(url => ({
                        original: `${url}=w1024`,
                        thumbnail: `${url}=w100`
                    }))
                );
            }
        };
        call();
        return () => (shouldCancel = true);
    }, []);
    if (images) {
        return (
            <div>
                {images.map(image => (
                    <img
                        key={image.original}
                        src={image.thumbnail}
                        alt=''
                        width='100px' height='100px'
                        referrerPolicy="false"
                    />
                ))}
            </div>
        )
    } else {
        return null
    }
};

ImagesGallery.propTypes = {
    albumURL: PropTypes.string
}

export default ImagesGallery

