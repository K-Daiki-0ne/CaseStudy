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