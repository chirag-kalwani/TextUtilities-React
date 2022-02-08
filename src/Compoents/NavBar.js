import React from 'react';
import PropTypes from 'prop-types';

// import {Link} from "react-router-dom";

function NavBar(props) {
    const changeTextColor = () => {
        if (props.mode === 'dark')
            return 'light'
        return 'dark'
    }
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            {/*<li className="nav-item">*/}
                            {/*    <a className="nav-link" href="/">{props.aboutText}</a>*/}
                            {/*</li>*/}
                        </ul>
                        <form className="d-flex">
                            <div className="form-check form-switch">
                                <input className="form-check-input" onClick={props.toggleMode} type="checkbox"
                                       role="switch"
                                       id="flexSwitchCheckDefault"/>
                                <label className={`form-check-label text-${changeTextColor()}`}
                                       htmlFor="flexSwitchCheckDefault">Change Theme</label>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

NavBar.prototype = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}
NavBar.defaultProps = {
    title: 'No Title',
    aboutText: 'About'
}
export default NavBar