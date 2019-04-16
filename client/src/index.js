import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import EditGame from "./components/games/EditGame";
import CreateGame from "./components/games/CreateGame";
import ShowGame from "./components/games/ShowGame";
import EditDeveloper from "./components/developers/EditDeveloper";
import CreateDeveloper from "./components/developers/CreateDeveloper";
import ShowDeveloper from "./components/developers/ShowDeveloper";
import { Developers, Games } from './App';
import * as serviceWorker from './serviceWorker';
import AppHeader from "./common/AppHeader";


ReactDOM.render(
    <Router>
        <div>
            {/*
            <Route exact path="/(games|developers)/" component={AppHeader}/>
            */}
            <Route exact path="/**" component={AppHeader}/>

            <Route exact path="/developers" component={Developers}/>
            <Route path="/developers/edit/:id" component={EditDeveloper} />
            <Route path="/developers/create" component={CreateDeveloper} />
            <Route path="/developers/show/:id" component={ShowDeveloper} />

            <Route exact path="/games" component={Games} />
            <Route path="/games/edit/:id" component={EditGame} />
            <Route path="/games/create" component={CreateGame} />
            <Route path="/games/show/:id" component={ShowGame} />
        </div>
    </Router>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
