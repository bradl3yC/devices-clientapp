import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import {
  Wrapper,
  Sort,
  Button,
  ModifySystemModal,
  SystemTypeFilter,
  SystemSort,
  SystemsTable,
} from './components';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.handleFilter = this.handleFilter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.systemOnClick = this.systemOnClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchSystems();
  }

  systemOnClick(id) {
    this.props.setActiveSystem(id);
    this.props.openModal();
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addOrEditSystem();
  }

  handleFilter(event) {
    event.preventDefault();
    this.props.filterSystems(event.target.value);
  }

  render() {
    const { systems, modalIsOpen, filteredSystems, editActiveSystem, deleteSystem, closeModal, activeSystem } = this.props;
    const systemsToDisplay = isEmpty(filteredSystems) ? systems : filteredSystems;
    return (
      <Wrapper>
        <SystemsTable systemsToDisplay={systemsToDisplay} systemOnClick={this.systemOnClick} deleteSystem={deleteSystem}/>
        <Sort>
          <SystemTypeFilter handleFilter={this.handleFilter} />
          <SystemSort sortBy={this.props.sortSystems} />
          <Button onClick={() => this.props.openModal()}>Add System</Button>
        </Sort>
        <ModifySystemModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          handleSubmit={this.handleSubmit}
          editActiveSystem={editActiveSystem}
          activeSystem={activeSystem}
        />
      </Wrapper>

    );
  }
}

App.propTypes = {
  systems: PropTypes.array,
  fetchSystems: PropTypes.func,
  setActiveSystem: PropTypes.func,
  activeSystem: PropTypes.object,
  modalIsOpen: PropTypes.bool,
  closeModal: PropTypes.func,
  openModal: PropTypes.func,
  sortSystems: PropTypes.func,
  editActiveSystem: PropTypes.func,
  addOrEditSystem: PropTypes.func,
  filteredSystems: PropTypes.array,
  filterSystems: PropTypes.func,
  deleteSystem: PropTypes.func,
};
