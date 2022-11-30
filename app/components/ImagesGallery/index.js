import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { MDBCardImage, MDBCol } from 'mdb-react-ui-kit';

function ImagesGallery({ albumURL }) {
  const [images, setImages] = useState(null);
  const getAlbumId = URL => (URL ? URL.split('gl/')[1] : '');

  useEffect(() => {
    let shouldCancel = false;
    const call = async () => {
      const id = getAlbumId(albumURL);
      const response = await axios.get(
        `https://google-photos-album-demo2.glitch.me/${id}`,
      );
      if (!shouldCancel && response.data && response.data.length > 0) {
        setImages(
          [
            {
              original: `${response.data[0]}=w1024`,
              thumbnail: `${response.data[0]}=s1024-c`,
            },
            {
              original: `${response.data[1]}=w1024`,
              thumbnail: `${response.data[1]}=s1024-c`,
            },
            {
              original: `${response.data[2]}=w1024`,
              thumbnail: `${response.data[2]}=s1024-c`,
            },
          ]
        );
      }
    };
    call();
    return () => (shouldCancel = true);
  }, []);
  if (images) {
    return (
      <>
        {images.map(image => (
          <MDBCol className="mb-2" key={image.original}>
            <MDBCardImage src={image.thumbnail}
              alt="image 1" className="w-100 rounded-3" referrerPolicy='false'/>
          </MDBCol>
        ))}
      </>
    );
  }
  return null;
}

ImagesGallery.propTypes = {
  albumURL: PropTypes.string,
};

export default ImagesGallery;
