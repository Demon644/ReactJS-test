import React, { Component } from "react";
import axios from "axios/index";
import { Link } from "react-router-dom";

class CreateGame extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      developer_id: "",
      genre_id: "",
      short_info: "",
      date: ""
    };
  }
  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = e => {
    e.preventDefault();

    const { name, developer_id, genre_id, short_info, date } = this.state;

    axios.post("/games", { name, developer_id, genre_id, short_info, date }).then(result => {
      this.props.history.push("/games");
    });
  };

  render() {
    const { name, developer_id, genre_id, short_info, date } = this.state;
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Add game</h3>
          </div>
          <div className="panel-body">
            <h4>
              <Link to="/games">
                <span className="glyphicon glyphicon-th-list" aria-hidden="true" />{" "}
                Games List
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
                <label htmlFor="isbn">Developer:</label>
                <input
                    type="text"
                    className="form-control"
                    name="developer_id"
                    value={developer_id}
                    onChange={this.onChange}
                    placeholder="Developer"
                />
              </div>
              <div className="form-group">
                <label htmlFor="isbn">Genre:</label>
                <input
                    type="text"
                    className="form-control"
                    name="genre_id"
                    value={genre_id}
                    onChange={this.onChange}
                    placeholder="Genre"
                />
              </div>
              <div className="form-group">
                <label htmlFor="isbn">Date:</label>
                <input
                    type="date"
                    className="form-control"
                    name="date"
                    value={date}
                    onChange={this.onChange}
                    placeholder="Date"
                />
              </div>
              <div className="form-group">
                <label htmlFor="isbn">Date:</label>
                <input
                    type="date"
                    className="form-control"
                    name="date"
                    value={date}
                    onChange={this.onChange}
                    placeholder="Date"
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

export default CreateGame;
