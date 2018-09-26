import { fetchErrorAction, fetchSystemsAction, fetchSuccessAction } from './actions';

export const fetchSystems = () => async (dispatch) => {
  try {
    dispatch(fetchSystemsAction());
    const systems = await fetch('http://localhost:3000/devices').then((res) => res.json());
    dispatch(fetchSuccessAction(systems));
    return systems;
  } catch (error) {
    return dispatch(fetchErrorAction());
  }
};
