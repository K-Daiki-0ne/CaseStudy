/**
 * data flow
 * actions/postStudy -> reducers/postStudy
 */

import { ACTION_TYPE } from '../actions/postStudy';

const initialState = {
  list: []
}


export const postStudy = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.FETCH_ALL:
        return {
          ...state,
          list: [...action.payload]
        };
      break;
  
    default:
        return state;
      break;
  }
}