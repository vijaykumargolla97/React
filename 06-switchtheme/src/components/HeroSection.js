import React,{useContext} from "react";
import ThemeContext from "../context/ThemeContext";
import AppTheme from "../Colors"
import ThemeTogler from "./ThemeTogler";

const HeroSection = () => {
    const theme = useContext(ThemeContext)[0]
    const currentTheme = AppTheme[theme]

    return (
        <div
        style={{
            padding: "1rem",
            backgroundColor: `${currentTheme.backgroundColor}`,
            color:`${currentTheme.textColor}`
        }}
        >
        <h1>Context API theme toggler</h1>
        <p>This is nice paragraph</p>

        {/* <button onClick={{}}
            style={{
                backgroundColor: "#26ae60",
                padding: "10px 150px",
                fontSize: "20px",
                color: "#fff",
                border: `${currentTheme.border}`
            }}
        >Click Me</button> */}
        <ThemeTogler/>
    </div>
    )
}

export default HeroSection;