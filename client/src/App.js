import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Games extends Component {

    constructor(props) {
        super(props);
        this.state = {
            games: []
        };
    }

    componentDidMount() {
        axios.get('/games')
            .then(res => {
                this.setState({ games: res.data });
                console.log(this.state.games);
            });
    }

    render() {
        return (
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading d-flex justify-content-center">
                        <h3 className="panel-title">
                            Games Database
                        </h3>
                    </div>
                    <div className="panel-body">
                        <h4><Link to="/games/create">Add game</Link></h4>
                        <div className="row d-flex justify-content-between">
                        {this.state.games.map(c =>
                                <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{c.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{c.genre_id}</h6>
                                    <Link className="card-link" to={`/games/show/${c.id}`}>More info</Link>
                                    <Link className="card-link" to={`/games/show/${c.id}`}>About Developer</Link> {/*Send to /developer/show*/}
                                </div>
                            </div>
                            </div>
                        )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class Developers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            developers: []
        };
    }

    componentDidMount() {
        axios.get('/developers')
            .then(res => {
                this.setState({ developers: res.data });
                console.log(this.state.developers);
            });
    }

    render() {
        return (
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            Developers Database
                        </h3>
                    </div>
                    <div className="panel-body">
                        <h4><Link to="/developers/create">Add developer</Link></h4>
                        <div className="row">
                            {this.state.developers.map(c =>
                                <div className="col-sm-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">{c.name}</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">{c.date_created}</h6>
                                            <Link className="card-link" to={`/developers/show/${c.id}`}>More info</Link>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export {
    Developers,
    Games
}