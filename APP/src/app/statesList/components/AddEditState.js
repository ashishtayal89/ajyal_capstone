import React, { Component } from "react";
import PropTypes from "prop-types";
import * as ActionTypes from '../state/action-types';
import { NavLink } from 'react-router-dom';

class StateAdd extends Component {

    constructor(props) {
        super(props);
        this.saveToState = this.saveToState.bind(this);
        this.state = this.props.state;
    }
    saveToState(se) {
        let value = se.target.value;
        let key = se.target.id;
        let state = { ...this.state };
        state[key] = value;
        this.setState(Object.assign({}, state));
    }
    render() {
        let state = this.state;
        return (
            <section className="subState">
                <h1>State Edit</h1>
                <NavLink to={"/states"}>
                    Back to States
                </NavLink>
                <br /> <br />
                <div>
                    <table className="halfScreen">
                        <tbody>
                            <tr>
                                <td>ID:</td>
                                <td>{state.id}</td>
                            </tr>
                            <tr>
                                <td>Name:</td>
                                <td><input type="text" className="inputText" id="name" value={state.name} onChange={this.saveToState}></input></td>
                            </tr>
                            <tr>
                                <td>Code:</td>
                                <td><input type="text" className="inputText" id="code" value={state.code} onChange={this.saveToState}></input></td>
                            </tr>
                            <tr>
                                <td className="center" colSpan="2"><a className="button center noPadding" onClick={() => { this.props.action(this.state) }}>Save</a></td>
                            </tr>
                        </tbody>
                    </table>
                    {/* <label>ID: <span>{state.id}</span> </label>  <br /><br />
                    <label>Name:  <span><input type="text" className="inputText" id="name" value={state.name} onChange={this.saveToState}></input></span> </label> <br /><br />
                    <label>Code:  <span><input type="text" className="inputText" id="code" value={state.code} onChange={this.saveToState}></input></span> </label> <br /><br />
                    <a className="button" onClick={() => { this.props.action(this.state) }}>Save</a> */}
                </div>

            </section>
        )
    }
}
export default StateAdd;