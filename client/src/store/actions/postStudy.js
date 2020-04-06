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
    // .catch(err => console.log(err))

    // .catch(err => console.log('Action fetchAll ...Error'));
};

export const create = (data, onSuccess) => dispatch => {
  api.studyApi().create(data)
    .then(res => {
      dispatch({
        type: ACTION_TYPES.CREATE,
        payload: res.data
      })
      onSuccess()
    });

    // .catch(err => console.log('Action create ...Error'));
};

export const update = (id, data, onSuccess) => dispatch => {
  api.studyApi().update(id, data)
    .then(res => {
      dispatch({
        type: ACTION_TYPES.UPDATE,
        payload: res.data
      })
      onSuccess()
    });
    // .catch(err => console.log('Action update ...Error'));
};

export const remove = (id, onSuccess) => dispatch => {
  api.studyApi().delete(id)
    .then(res => {
      dispatch({
        type: ACTION_TYPES.DELETE,
        payload: id
      })
      onSuccess()
    });
    // .catch(err => console.log('Aciton remove ...Error'));
};