import React, { createContext } from "react";

export const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
    return <ImageContext.Provider value={{}}>{children}</ImageContext.Provider>;
};
