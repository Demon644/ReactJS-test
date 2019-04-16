import React, { Component } from "react";
import axios from "axios/index";
import { Link } from "react-router-dom";

class EditDeveloper extends Component {
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

    onChange = e => {
        const state = this.state.developers;
        state[e.target.name] = e.target.value;
        this.setState({ developers: state });
    };

    onSubmit = e => {
        e.preventDefault();

        const { name, date_created, short_info } = this.state.developers;

        axios
            .put("/developers/" + this.props.match.params.id, { name, date_created, short_info})
            .then(result => {
                this.props.history.push("/show/" + this.props.match.params.id);
            });
    };

    render() {
        return (
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Edit developer</h3>
                    </div>
                    <div className="panel-body">
                        <h4>
                            <Link to={`/developers/show/${this.state.developers.id}`}>
                                <span className="glyphicon glyphicon-eye-open" aria-hidden="true" />{" "}
                                Go back
                            </Link>
                        </h4>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={this.state.developers.name}
                                    onChange={this.onChange}
                                    placeholder="Name"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="dateCreated">Date created:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="date_created"
                                    value={this.state.developers.date_created}
                                    onChange={this.onChange}
                                    placeholder="Date created"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="info">Short info:</label>
                                <textarea
                                    className="form-control"
                                    name="short_info"
                                    value={this.state.developers.short_info}
                                    onChange={this.onChange}
                                    placeholder="Short info"
                                />
                            </div>
                            <button type="submit" className="btn btn-default">
                                Update
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditDeveloper;
