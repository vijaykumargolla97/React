import React, {useContext} from "react";

import ThemeContext from "../context/ThemeContext"

const ThemeTogler = () => {
    const [themeMode, setThemeMode] = useContext(ThemeContext)

    return(
        <div onClick={() => {
            setThemeMode(themeMode === "light" ? "dark": "light")
        }}>
            <span 
            style={{
                backgroundColor: "#26ae60",
                padding: "10px 200px",
                fontSize: "20px",
                color: "#fff",
                border: "2px solid #000"
                
            }}
            >{themeMode === "light" ? "Change Theme": "Change Theme"} </span>
            
        </div>
    )

}


export default ThemeTogler;