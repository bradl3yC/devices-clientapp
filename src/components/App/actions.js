import {
  FETCH_SYSTEMS,
  FETCH_SYSTEMS_SUCCESS,
  FETCH_SYSTEMS_FAILURE,
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
