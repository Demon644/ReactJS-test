import React, { Component } from "react";
import { Link } from 'react-router-dom';

class NavDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false
        };
    }
    showDropdown(e) {
        e.preventDefault();
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }
    render() {
        const classDropdownMenu = 'dropdown-menu' + (this.state.isToggleOn ? ' show' : '')
        return (
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown"
                   aria-haspopup="true" aria-expanded="false"
                   onClick={(e) => {this.showDropdown(e)}}>
                    {this.props.name}
                </a>
                <div className={classDropdownMenu} aria-labelledby="navbarDropdown">
                    {this.props.children}
                </div>
            </li>
        )
    }
}
class AppHeader extends Component {

    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow mb-2">
                    <ul className="navbar-nav">
                        <li>
                            <h1 className="navbar-brand">Database</h1>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                            <NavDropdown name="Menu">
                                <Link className="dropdown-item" to="/games">Games</Link>
                                <Link className="dropdown-item" to="/developers">Developers</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="About">About</Link>
                            </NavDropdown>
                    </ul>
            </nav>
        );
    }
}
export default AppHeader;
