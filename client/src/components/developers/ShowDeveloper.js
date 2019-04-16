import React, { Component } from "react";
import axios from "axios/index";
import { Link } from "react-router-dom";

class ShowDeveloper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            developers: {}
        };
    }

    componentDidMount() {
        axios.get("/developers/" + this.props.match.params.id).then(res => {
            this.setState({ developers: res.data });
            console.log(this.state.developers);
        });
    }

    delete(id) {
        console.log(id);
        axios.delete("/developers/" + id).then(result => {
            this.props.history.push("/developers");
        });
    }

    render() {
        return (
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Developer Details</h3>
                    </div>
                    <div className="panel-body">
                        <h4>
                            <Link to="/developers">
                                <span className="glyphicon glyphicon-th-list" aria-hidden="true" />{" "}
                                Developers List
                            </Link>
                        </h4>
                        <dl>
                            <dt>Name:</dt>
                            <dd>{this.state.developers.name}</dd>
                            <dt>Date created:</dt>
                            <dd>{this.state.developers.date_created}</dd>
                            <dt>Short info:</dt>
                            <dd>{this.state.developers.short_info}</dd>
                        </dl>
                        <Link to={`/developers/edit/${this.state.developers.id}`} className="btn btn-success">
                            Edit
                        </Link>
                        <button
                            onClick={this.delete.bind(this, this.state.developers.id)}
                            className="btn btn-danger"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShowDeveloper;
