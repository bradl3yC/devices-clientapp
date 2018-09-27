import { fetchErrorAction, fetchSystemsAction, fetchSuccessAction, closeModal } from './actions';

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

export const addOrEditSystem = () => async (dispatch, getState) => {
  try {
    const state = getState();
    const url = state.app.activeSystem.id ? `http://localhost:3000/devices/${state.app.activeSystem.id}` : 'http://localhost:3000/devices/';
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    const options = {
      method: state.app.activeSystem.id ? 'PUT' : 'POST',
      headers,
      body: JSON.stringify(state.app.activeSystem),
    };
    await fetch(url, options);
    await dispatch(fetchSystems());
    return dispatch(closeModal());
  } catch (error) {
    return dispatch(fetchErrorAction());
  }
};

export const deleteSystem = (id) => async (dispatch) => {
  try {
    const url = `http://localhost:3000/devices/${id}`;
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    const options = {
      method: 'DELETE',
      headers,
    };
    await fetch(url, options);
    await dispatch(fetchSystems());
    return dispatch(closeModal());
  } catch (error) {
    return dispatch(fetchErrorAction());
  }
};
