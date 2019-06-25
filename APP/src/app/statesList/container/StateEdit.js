import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import * as actions from '../state/actions';
import { NavLink } from 'react-router-dom';
import AddEditState from '../components/AddEditState';
import { bindActionCreators } from 'redux'

class StateEdit extends Component {
  constructor(props) {
    super(props);
    this.updateState = this.updateState.bind(this);
    this.addNewState = this.addNewState.bind(this);
    this.getStateAction = this.getStateAction.bind(this);
  }

  componentDidMount() {
    if (!this.props.records) {
      this.props.actions.fetchStates();
    }
  }

  updateState(state) {
    this.props.actions.updateState(this.props.records, state);
    this.props.history.push("/states");
  }

  addNewState(state) {
    this.props.actions.addNewState(this.props.records, state);
    this.props.history.push("/states");
  }

  getStateAction() {
    let id = this.props.match.params.id;
    let state = null;
    let action = null;
    if(this.props.records){
      if (id) {
        state = this.props.records.filter((state) => {
          return state.id == this.props.match.params.id
        })[0];
        action = this.updateState;
      }
      else {
        state = {
          id: this.props.records[this.props.records.length - 1].id + 1,
          name: "",
          code: ""
        }
        action = this.addNewState;
      }
    }
    return { state, action };
  }

  render() {
    let { state, action } = this.getStateAction();
    if (this.props.records) {
      return <AddEditState state={state} action={action} />;
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
    records: state.states.records
  }
}

export default connect(mapStateToProps,
  mapDispatchToProps)(StateEdit)