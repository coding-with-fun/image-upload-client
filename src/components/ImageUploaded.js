import React, { useContext } from "react";
import ImageUploadedBg from "../assets/imageUploadedBg.png";
import { ImageContext } from "../contexts/ImageContext";

const ImageUploaded = () => {
    const { imageLink } = useContext(ImageContext);

    return (
        <div className="image_uploaded_container">
            <span className="icon">
                <i className="bi bi-check-circle-fill"></i>
            </span>

            <p className="title">Uploaded Successfully!</p>

            <img
                src={ImageUploadedBg}
                alt="Uploaded"
                className="background_image"
            />

            <div className="image_link">
                <p className="link_text">{imageLink}</p>

                <div className="copy_image_button">Copy link</div>
            </div>
        </div>
    );
};

export default ImageUploaded;
