import { connect } from 'react-redux';
import {
  setActiveSystem,
  openModal,
  closeModal,
  sortSystems,
  editActiveSystem,
  filterSystems,
} from './actions';
import { fetchSystems, addOrEditSystem, deleteSystem } from './thunks';
import App from './App';

const mapStateToProps = (state) => ({
  systems: state.app.systems,
  activeSystem: state.app.activeSystem,
  modalIsOpen: state.app.modalIsOpen,
  filteredSystems: state.app.filteredSystems,
  isFetching: state.app.isFetching,
  fetchError: state.app.fetchError,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSystems: () => dispatch(fetchSystems()),
  setActiveSystem: (systemId) => dispatch(setActiveSystem(systemId)),
  openModal: () => dispatch(openModal()),
  closeModal: () => dispatch(closeModal()),
  sortSystems: (key) => dispatch(sortSystems(key)),
  editActiveSystem: (key, value) => dispatch(editActiveSystem(key, value)),
  addOrEditSystem: () => dispatch(addOrEditSystem()),
  filterSystems: (key) => dispatch(filterSystems(key)),
  deleteSystem: (id) => dispatch(deleteSystem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
