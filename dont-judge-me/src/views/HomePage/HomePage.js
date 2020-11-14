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
                <h1>Don't judge me for what I like to read</h1>
                <input type="text" onChange={(e) => set_url(e.target.value)}></input>
                {url}
                <button type="button" onClick={timesify}>
                    Click Here
                </button>
            </div>
        </Fragment>
    );
}

export default HomePage;