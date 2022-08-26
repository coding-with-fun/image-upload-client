import React, { useState } from "react";
import ImageUploaded from "./components/ImageUploaded";
import ImageUploader from "./components/ImageUploader";
import ImageUploading from "./components/ImageUploading";

const App = () => {
    const [isImageUploaded, setIsImageUploaded] = useState(true);
    const [isImageUploading, setIsImageUploading] = useState(true);

    return (
        <div className="app container">
            {isImageUploaded ? (
                <ImageUploaded />
            ) : isImageUploading ? (
                <ImageUploading setIsImageUploaded={setIsImageUploaded} />
            ) : (
                <ImageUploader setIsImageUploading={setIsImageUploading} />
            )}
        </div>
    );
};

export default App;
