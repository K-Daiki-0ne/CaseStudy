/**
 * data flow
 * actions/postStudy -> reducers/postStudy
 */

import { ACTION_TYPES } from '../actions/types';

const initialState = {
  list: []
}


export const postStudy = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL:
        return {
          ...state,
          list: [...action.payload]
        };
      // break;
  
    default:
        return state;
      // break;
  }
}