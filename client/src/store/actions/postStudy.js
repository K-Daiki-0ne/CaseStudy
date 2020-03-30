import api from './api';

export const ACTION_TYPES = {
  CREATE:     'CREATE',
  UPDATE:     'UPDATE',
  DELETE:     'DELETE',
  FETCH_ALL:  'FETCH_ALL' 
};

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