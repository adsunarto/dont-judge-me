import React, {Component, Fragment} from "react";
import { Link } from "react-router-dom"; 
import "./HomePage.scss";

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <div className="main">
                    <h1>Don't judge me for what I like to read</h1>
                    <Link to="/page">
                        <button type="button">
                            Click Here
                        </button>
                    </Link>
                </div>
            </Fragment>
        );
    }
}

export default HomePage;