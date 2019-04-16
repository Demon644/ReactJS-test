import React, { Component } from "react";
import axios from "axios/index";
import { Link } from "react-router-dom";

class EditGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: {}
    };
  }

  componentDidMount() {
    axios.get("/games/" + this.props.match.params.id).then(res => {
      this.setState({ games: res.data });
      console.log(this.state.games);
    });
  }

  onChange = e => {
    const state = this.state.games;
    state[e.target.name] = e.target.value;
    this.setState({ games: state });
  };

  onSubmit = e => {
    e.preventDefault();

    const { name, developer_id, genre_id, short_info, date } = this.state.games;

    axios
      .put("/games/" + this.props.match.params.id, { name, developer_id, genre_id, short_info, date })
      .then(result => {
        this.props.history.push("/show/" + this.props.match.params.id);
      });
  };

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">EDIT Game</h3>
          </div>
          <div className="panel-body">
            <h4>
              <Link to={`/games/show/${this.state.games.id}`}>
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
                  value={this.state.games.name}
                  onChange={this.onChange}
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="developer">Developer:</label>
                <input
                  type="text"
                  className="form-control"
                  name="developer_id"
                  value={this.state.games.developer_id}
                  onChange={this.onChange}
                  placeholder="Developer"
                />
              </div>
              <div className="form-group">
                <label htmlFor="genre">Genre:</label>
                <input
                    type="text"
                    className="form-control"
                    name="genre_id"
                    value={this.state.games.genre_id}
                    onChange={this.onChange}
                    placeholder="Genre"
                />
              </div>
              <div class="form-group">
                <label htmlFor="author">Date:</label>
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  value={this.state.games.date}
                  onChange={this.onChange}
                  placeholder="Date"
                />
              </div>
              <div className="form-group">
                <label htmlFor="info">Short info:</label>
                <textarea
                    className="form-control"
                    name="short_info"
                    value={this.state.games.short_info}
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

export default EditGame;
