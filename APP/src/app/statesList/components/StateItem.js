import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Switch, Route, Router } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
class StateItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { item } = this.props;
        return (
            <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.code}</td>
                <td>
                    <NavLink to={"/states/view/" + item.id} className="button" activeClassName="success">
                        View
            </NavLink>
                    <NavLink to={"/states/edit/" + item.id} className="button" activeClassName="success">
                        Edit
            </NavLink>
                </td>
            </tr>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchState: function () {
            dispatch(actions.vie)
        }
    }
}

export default StateItem;