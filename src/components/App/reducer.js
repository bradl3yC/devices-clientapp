import {
  FETCH_SYSTEMS,
  FETCH_SYSTEMS_SUCCESS,
  FETCH_SYSTEMS_FAILURE,
} from './const';

const initialState = {
  isFetching: false,
  fetchError: false,
  systems: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SYSTEMS:
      return {
        isFetching: true,
      };
    case FETCH_SYSTEMS_FAILURE:
      return {
        isFetching: false,
        fetchError: true,
      };
    case FETCH_SYSTEMS_SUCCESS:
      return {
        isFetching: false,
        fetchError: false,
        systems: action.systems,
      };
    default:
      return state;
  }
};
