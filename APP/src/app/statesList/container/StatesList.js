import React, { Component, PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as actions from "../state/actions";
import StateItem from "../components/StateItem";
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';


class StateList extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.records) {
      this.props.actions.fetchStates();
    }
  }

  render() {
    let states = this.props.records;
    if (states) {
      return (
        <section>
          <h1>States                     
            <NavLink to={"/states/edit/"} className="button label right" activeClassName="success">
              Add
            </NavLink>
          </h1>
          <div>
            <table>
              <tbody>
                <tr><th>ID</th><th>Name</th><th>Code</th><th>Actions</th></tr>
                <tr><td></td><td></td><td></td>
                  <td>

                  </td>
                </tr>
                {
                  states.map(item => (
                    <StateItem item={item} key={item.id} />
                  ))
                }
              </tbody>
            </table>
          </div>
        </section>
      );
    }
    else {
      return null;
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
  // return {
  //    fetchStates: function() {
  //        let actionFn = actions.fetchStates();
  //        dispatch(actionFn);
  //    }
  // }
}

const mapStateToProps = (state) => {
  console.log("map state : ", state);
  return {
    records: state.states.records
  }
}

export default connect(mapStateToProps,
  mapDispatchToProps)(StateList)
