import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

export default function Navbar() {

    const [bannerClose, setBannerClose] = useState(false);

    return (

        <nav class="nav">
            <div class="navbar-links">
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#resume">Resume</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <hr id="nav_line" style={{ display: bannerClose ? 'none' : '' }}></hr>
            <div className="banner_content" style={{ display: bannerClose ? 'none' : '' }}>
                <div className="banner_text">
                    Hi there, thanks for visiting my website! I'd love to <a id="connect_link" href="https://www.linkedin.com/in/ronaldogarcia7/" target="_blank">connect</a> with you :)
                </div>
                <button className="banner_close" onClick={() => setBannerClose(!bannerClose)}><FontAwesomeIcon icon={faXmark} /></button>
            </div>
        </nav>
    )
}


