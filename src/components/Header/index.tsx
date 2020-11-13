import React from 'react'
import imgLogo from '../../assets/logopng.png'

import './styles.css'

function Header(){
    return (
        <div className="content-header">
            <div className="content-logo">
                <img src={imgLogo} alt="logo-main"/>
                <h1>Squad Management Tool</h1>
            </div>

            <div className="content-login">
                <p><strong>John Due</strong></p>
                <span><strong>JD</strong></span>
            </div>
        </div>
    );
}

export default Header;