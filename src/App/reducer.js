import orderBy from 'lodash/orderBy';
import sortBy from 'lodash/sortBy';
import isEmpty from 'lodash/isEmpty';

import {
  FETCH_SYSTEMS,
  FETCH_SYSTEMS_SUCCESS,
  FETCH_SYSTEMS_FAILURE,
  SET_ACTIVE_SYSTEM,
  OPEN_MODAL,
  CLOSE_MODAL,
  SORT_SYSTEMS,
  EDIT_ACTIVE_SYSTEM,
  FILTER_SYSTEMS,
} from './const';

const initialState = {
  modalIsOpen: false,
  systems: [],
  filteredSystems: [],
  isFetching: false,
  fetchError: false,
  activeSystem: {
    system_name: '',
    type: 'MAC',
    hdd_capacity: '',
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SYSTEMS:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_SYSTEMS_FAILURE:
      return {
        ...state,
        isFetching: false,
        fetchError: true,
      };
    case FETCH_SYSTEMS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        fetchError: false,
        systems: action.systems,
        filteredSystems: [],
      };
    case SET_ACTIVE_SYSTEM:
      return {
        ...state,
        activeSystem: state.systems.filter((system) => system.id === action.systemId)[0],
      };
    case OPEN_MODAL:
      return {
        ...state,
        modalIsOpen: true,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modalIsOpen: false,
        activeSystem: initialState.activeSystem,
      };
    case SORT_SYSTEMS:
      if (action.key === 'hdd_capacity') {
        return {
          ...state,
          filteredSystems: sortBy(isEmpty(state.filteredSystems) ? state.systems : state.filteredSystems, (obj) => parseInt(obj.hdd_capacity, 10)),
        };
      }
      return {
        ...state,
        filteredSystems: orderBy(isEmpty(state.filteredSystems) ? state.systems : state.filteredSystems, action.key, 'asc'),
      };


    case FILTER_SYSTEMS:
      return {
        ...state,
        filteredSystems: action.key === 'all' ? state.systems : state.systems.filter((system) => system.type === action.key),
      };
    case EDIT_ACTIVE_SYSTEM:
      return {
        ...state,
        activeSystem: {
          ...state.activeSystem,
          [action.key]: action.value,
        },
      };
    default:
      return state;
  }
};
