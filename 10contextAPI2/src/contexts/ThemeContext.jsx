import React from "react";
import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: ()=>{},
    lightTheme: ()=>{},
})
export const ThemeProvider = ({ children, value }) => {
    return (
        <ThemeContext.Provider value={value}>
            {children}  {/* ✅ YAHAN CHILDREN RENDER HONGE */}
        </ThemeContext.Provider>
    )
}

export default function useTheme(){
    return useContext(ThemeContext)
}