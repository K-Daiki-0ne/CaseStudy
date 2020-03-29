export const ACTION_TYPES = {
  CREATE:     'CREATE',
  UPDATE:     'UPDATE',
  DELETE:     'DELETE',
  FETCH_ALL:  'FETCH_ALL' 
};

export const fetchAll = () => dispatch => {
  // get user's all data
  dispatch({
    type: ACTION_TYPES.FETCH_ALL,
    payload: []
  })
}