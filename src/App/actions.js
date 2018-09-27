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


export const fetchErrorAction = () => (
  { type: FETCH_SYSTEMS_FAILURE }
);

export const fetchSystemsAction = () => (
  { type: FETCH_SYSTEMS }
);

export const fetchSuccessAction = (systems) => (
  { systems, type: FETCH_SYSTEMS_SUCCESS }
);

export const setActiveSystem = (systemId) => (
  { systemId, type: SET_ACTIVE_SYSTEM }
);

export const openModal = () => (
  { type: OPEN_MODAL }
);

export const closeModal = () => (
  { type: CLOSE_MODAL }
);

export const sortSystems = (key) => (
  { key, type: SORT_SYSTEMS }
);

export const editActiveSystem = (key, value) => (
  { key, value, type: EDIT_ACTIVE_SYSTEM }
);

export const filterSystems = (key) => (
  { key, type: FILTER_SYSTEMS }
);

