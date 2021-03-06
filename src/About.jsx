import React, { Component } from "react";
import { object, field, operator, comment, string, attr } from "./Highlight";

class About extends Component {
    render() {
        return (
            <div className="tab">
                <h1>
                    {object("MichalJez")}.{field("about")} {operator("=")} {"{"}
                </h1>
                <div className="tab tab-right">
                    <h2>
                        {attr("desc")}: {string("`")}
                            <div className="tab justify">
                                {string(`
                                    Hey, I'm Michal! I fell in love with programming in high school and haven't
                                    stopped coding since then. Feel free to check out anything I've made!
                                    I'm currently in my 1A term of software engineering at the University of Waterloo
                                    where I spend my free time playing ping pong, watching hockey and hanging out
                                    with friends.
                                `)}
                            </div>
                        {string("`")},
                    </h2>
                    <div className="pure-g">
                        <div className="pure-u-1 pure-u-md-1-2">
                            <h2>
                                {attr("languages")}: [
                                <div className="tab">
                                    {string(`"Javascript"`)},
                                    &nbsp;&nbsp;
                                    {comment("//")}&nbsp;{comment("8/10")}

                                    <br/>

                                    {string(`"Java"`)},
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    {comment(`//`)}&nbsp;{comment("6/10")}

                                    <br/>

                                    {string(`"C#"`)},
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    {comment("//")}&nbsp;{comment("6/10")}
                                    <br/>

                                    {string(`"C++`)},
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    {comment("//")}&nbsp;{comment("7/10")}
                                    <br/>

                                    {string(`"C"`)},
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    {comment("//")}&nbsp;{comment("7/10")}
                                    
                                    <br/>
                                    {string(`"Python"`)},
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    {comment("//")}&nbsp;{comment("9/10")}

                                    <br/>
                                    {string(`"Typescript"`)}
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    {comment("//")}&nbsp;{comment("8/10")}
                                    <br/>
                                </div>
                                ],
                            </h2>
                        </div>
                        <div className="pure-u-1 pure-u-md-1-2">
                            <h2>
                            {attr("frameworks")}: [
                                <div className="tab">
                                    {string(`"Node.js"`)}
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    {comment("// 7/10")}

                                    <br/>

                                    {string(`"Express.js"`)},
                                    &nbsp;&nbsp;
                                    {comment("// 7/10")}

                                    <br/>

                                    {string(`"Git"`)},
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    {comment("// 5/10")}

                                    <br/>

                                    {string(`"Unity3D"`)},
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    {comment("// 6/10")}

                                    <br/>

                                    {string(`"Angular.js"`)},
                                    &nbsp;&nbsp;
                                    {comment("// 7/10")}

                                    <br/>

                                    {string(`"React.js"`)}
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    {comment("// 4/10")}

                                    <br/>

                                    {string(`"Yelp API`)},
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    {comment("// 9/10")}
                                    <br/>
                                </div>
                                ]
                            </h2>
                        </div>
                    </div>
                </div>
                <h1>{"}"}</h1>
            </div>
        )
    }
}

export default About;