import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchSystems } from './thunks';
import './styles.css';

class App extends Component {

  static propTypes = {
    isFetching: PropTypes.bool,
    fetchError: PropTypes.bool,
    systems: PropTypes.array,
    fetchSystems: PropTypes.func,
  };

  componentDidMount() {
    this.props.fetchSystems();
  }

  render() {
    return (
      <div />

    );
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.app.isFetching,
  fetchError: state.app.fetchError,
  systems: state.app.systems,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSystems: () => dispatch(fetchSystems()),
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
