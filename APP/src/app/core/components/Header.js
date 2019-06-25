import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {NavLink as Link} from 'react-router-dom';

class Header extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="header">
                <Link exact to="/" className="button" activeClassName="success" > Home </Link>
                <Link to="/about" className="button" activeClassName="success" > About </Link>
                <Link to="/contact" className="button" activeClassName="success" > Contact </Link>
                <Link to="/states" className="button" activeClassName="success" > StateList </Link>
            </div>
        )
    }
}

export default Header;