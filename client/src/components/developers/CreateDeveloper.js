import React, { Component } from "react";
import axios from "axios/index";
import { Link } from "react-router-dom";

class CreateDeveloper extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            date_created: "",
            short_info : ""
        };
    }
    onChange = e => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    };

    onSubmit = e => {
        e.preventDefault();

        const { name, date_created, short_info } = this.state;

        axios.post("/developers", { name, date_created, short_info }).then(result => {
            this.props.history.push("/developers");
        });
    };

    render() {
        const { name, date_created, short_info } = this.state;
        return (
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Add Developer</h3>
                    </div>
                    <div className="panel-body">
                        <h4>
                            <Link to="/developers">
                                <span className="glyphicon glyphicon-th-list" aria-hidden="true" />{" "}
                                Developers List
                            </Link>
                        </h4>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="isbn">Name:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={name}
                                    onChange={this.onChange}
                                    placeholder="Name"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="isbn">Date created:</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    name="date_created "
                                    value={date_created}
                                    onChange={this.onChange}
                                    placeholder="Date created"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="info">Short info:</label>
                                <textarea
                                    className="form-control"
                                    name="short_info"
                                    value={short_info}
                                    onChange={this.onChange}
                                    placeholder="Short info"
                                />
                            </div>
                            <button type="submit" className="btn btn-default">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateDeveloper;
