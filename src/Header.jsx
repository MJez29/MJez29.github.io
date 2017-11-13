import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import "./Header.css";

class Header extends Component {
    render() {
        return (
            <div className="pure-menu pure-menu-horizontal">
                <a href="/" className="pure-menu-heading pure-menu-link">Michal Jez</a>
                <ul className="pure-menu-list">
                    <li className="pure-menu-item">
                        <p className="pure-menu-link">{"{"}</p>
                    </li>
                    <li className="pure-menu-item">
                        <a href="/" className="pure-menu-link">About</a>
                    </li>
                    <li className="pure-menu-item">
                        <a href="/" className="pure-menu-link">Projects</a>
                    </li>
                    <li className="pure-menu-item">
                        <p className="pure-menu-link">{"}"}</p>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Header;