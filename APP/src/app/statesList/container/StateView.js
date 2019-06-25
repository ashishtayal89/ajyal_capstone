import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../state/actions';
import { NavLink } from 'react-router-dom';

class StateView extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.records) {
      this.props.actions.fetchStates();
    }
  }

  render() {
    let state = null;
    if(this.props.records.length > 0){
      state = this.props.records.filter((state) => {
        return state.id == this.props.match.params.id
      });
    }
    if(state){
      return (
        <section className="subState">
          <h1>State View</h1>
          <NavLink to={"/states"}>
            Back to States
          </NavLink>
          <br /> <br />
          <div>
            <label>ID:  <span>{state[0].id}</span> </label> <br /><br />
            <label>Name:  <span>{state[0].name}</span> </label> <br /><br />
            <label>Code:  <span>{state[0].code}</span> </label>
          </div>
        </section>
      );
    }
    else
      return null;

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions : bindActionCreators(actions,dispatch)
  }
  // return {
  //   actions : {
  //     fetchStates: function() {
  //       let actionFn = actions.fetchStates();
  //       dispatch(actionFn);
  //     }
  //   }
  // }
} 

const mapStateToProps = (state) => {
  return {
    records : state.states.records
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(StateView)
