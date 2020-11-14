import React, {Component, Fragment, useState} from "react";
import { Link, useHistory } from "react-router-dom";
import "./HomePage.scss";

const HomePage = () => {
    
    const history = useHistory()
    const [url, set_url] = useState("")
    const timesify = () => {
        history.push("/page", {props: url})
    }
    
    return (
        <Fragment>
            <div className="main">
                <div className="header-container">
                    <h1>Don't judge me for what I like to read</h1>
                    <div className="link-field">
                        <div>
                            <div className="input">
                                <input type="text" placeholder="Enter Link" onChange={(e) => set_url(e.target.value)}></input>
                                <button type="button" onClick={timesify}>
                                Hide my shame
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default HomePage;