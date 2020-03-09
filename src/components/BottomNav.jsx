import React from 'react';
import {A} from 'hookrouter';
import FootBallIcon from '../assets/icons/ball-icon.png';
import HomeIcon from '../assets/icons/home-icon.png';
import ChatIcon from '../assets/icons/chat-icon.png';
import '../css/bottomNav.css'


function Element (){
    return (
        <div id="bottomNav">
            <ul>
                <li><A href="/"><img src={HomeIcon} alt="home"/></A></li>
                <li><A href="/games"><img src={FootBallIcon} alt="games information"/></A></li>
                <li><A href="/chat"><img src={ChatIcon} alt="chat"/></A></li>
            </ul>
        </div>
    )
}

export default Element;
