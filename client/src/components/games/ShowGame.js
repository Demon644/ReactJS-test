import React, { Component } from "react";
import axios from "axios/index";
import { Link } from "react-router-dom";

class ShowGame extends Component {
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

  delete(id) {
    console.log(id);
    axios.delete("/games/" + id).then(result => {
      this.props.history.push("/games");
    });
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Game Details</h3>
          </div>
          <div className="panel-body">
            <h4>
              <Link to="/games">
                <span className="glyphicon glyphicon-th-list" aria-hidden="true" />{" "}
                Games List
              </Link>
            </h4>
            <dl>
              <dt>Name:</dt>
              <dd>{this.state.games.name}</dd>
              <dt>Developer:</dt>
              <dd>{this.state.games.developer_id}</dd>
              <dt>Genre:</dt>
              <dd>{this.state.games.genre_id}</dd>
              <dt>Date:</dt>
              <dd>{this.state.games.date}</dd>
              <dt>Short info:</dt>
              <dd>{this.state.games.short_info}</dd>
            </dl>
            <Link to={`/games/edit/${this.state.games.id}`} class="btn btn-success">
              Edit
            </Link>
            <button
              onClick={this.delete.bind(this, this.state.games.id)}
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

export default ShowGame;
