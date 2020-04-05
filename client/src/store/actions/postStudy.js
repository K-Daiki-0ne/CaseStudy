import api from './api';
import { ACTION_TYPES } from './types'

export const fetchAll = () => dispatch => {
  // get user's all data
  api.studyApi().fetchAll()
    .then(res => {
      dispatch({
        type: ACTION_TYPES.FETCH_ALL,
        payload: res.data
      })
    })
    .catch(err => console.error(err))
};

export const create = (data, onSuccess) => dispatch => {
  api.studyApi().creeate(data)
    .then(res => {
      dispatch({
        type: ACTION_TYPES.CREATE,
        payload: res.data
      });
    });
    .catch(err => console.log('Action create ...Error'));
};