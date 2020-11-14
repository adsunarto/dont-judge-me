import React from 'react';
// eslint-disable-next-line
import {BrowserRouter, Link, Switch, Route} from "react-router-dom";
import './App.scss';
import HomePage from "./views/HomePage/HomePage";
import TestPage from "./views/OtherPage/NYT";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={HomePage}/>
          <Route exact={true} path="/page" component={TestPage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
