import React, { Component } from 'react'
import PropTypes from 'prop-types';

Header.propTypes = {
    click: PropTypes.func,
    userName: PropTypes.string
}


export default function Header(props) {
    return (
        <div>
            <header className="main-header">
                <a href="/" className="logo" onClick={props.click}>
                    <span className="logo-mini"><b>A</b>LT</span>
                    <span className="logo-lg"><b>Admin</b>LTE</span>
                </a>
                <nav className="navbar navbar-static-top">
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            <li className="dropdown user user-menu">
                                <a href="/">
                                    <span className="hidden-xs">{props.userName}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}
