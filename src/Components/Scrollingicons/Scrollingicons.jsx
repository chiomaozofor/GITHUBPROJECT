import React from 'react';
import { FaSpotify,  FaNewspaper, FaAmericanSignLanguageInterpreting, FaFortAwesome,  FaInfo } from 'react-icons/fa';
import './Scrollingicons.css';
import { SiMercedes } from "react-icons/si";
import { SiDuolingo } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";
import { SiVodafone } from "react-icons/si";


const ScrollingIcons = () => {
    return (
        <div className="marquee">
            <div className="marquee-content">
                <FaSpotify size={50} />
                <SiVodafone size={50} />
                <FaShopify size={50} />
                <FaFigma size={50}/>
                <SiDuolingo  size={50}/>
                <FaNewspaper size={50} />
                <FaAmericanSignLanguageInterpreting size={50} />
                <FaFortAwesome size={50} />
                < SiMercedes size={50} />
                <FaInfo size={50} />
            </div>
        </div>
    );
};

export default ScrollingIcons;