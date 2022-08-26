import React, { createContext, useState } from "react";

export const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
    const [imageLink, setImageLink] = useState(
        "kaskjasjajsjakaskjasjajsjakaskjasjajsjakaskjasjajsjakaskjasjajsjakaskjasjajsjakaskjasjajsjakaskjasjajsja"
    );

    const handleImageUpload = () => {
        setImageLink("");
    };

    return (
        <ImageContext.Provider
            value={{
                imageLink,

                handleImageUpload,
            }}
        >
            {children}
        </ImageContext.Provider>
    );
};
