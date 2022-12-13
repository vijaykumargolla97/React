import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import Portfolio from "./Portfolio";
import AboutSection from "./AboutSection";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Copy from "./Copy";

import "./styles.css"


function App() {
    return (
        <div>
            <Navbar />
            <Main/>
            <AboutSection/>
            <Portfolio/>
            <ContactUs/>
            <Footer/>
            <Copy/>
        </div>
    );
}

export default App;