import React, { useState } from "react";
import ImageUploaded from "./components/ImageUploaded";
import ImageUploader from "./components/ImageUploader";
import ImageUploading from "./components/ImageUploading";

const App = () => {
    const [isImageUploaded, setIsImageUploaded] = useState(false);
    const [isImageUploading, setIsImageUploading] = useState(false);

    return (
        <div className="app">
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
