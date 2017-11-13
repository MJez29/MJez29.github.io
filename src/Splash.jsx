import React, { Component } from "react";
import { object, field, operator, comment, string, attr, keyword } from "./Highlight";
import "./Splash.css";

class Splash extends Component {
    render() {
        return (
            <div>
                <div className="jumbo">
                    <h1>{object("Michal Jez")}</h1>
                    <h2>
                        {attr("isPassionate")}() {operator("===")} {keyword("true")}
                    </h2>
                </div>
            </div>
        )
    }
}

export default Splash;