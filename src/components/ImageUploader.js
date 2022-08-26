import React from "react";
import ImageUploaderBG from "../assets/imageUploaderBg.svg";

const ImageUploader = () => {
    return (
        <div className="image_uploader_container">
            <p className="title">Upload your image</p>

            <p className="subtitle_one">File should be Jpeg or Png</p>

            <div className="input_container">
                <img className="input_bg" src={ImageUploaderBG} alt="Upload" />

                <div className="input_text">Drag & Drop your image here</div>
            </div>

            <p className="subtitle_two">or</p>

            <div className="submit_image_upload">Choose a file</div>
        </div>
    );
};

export default ImageUploader;
