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
    case ACTION_TYPES.CREATE:
      return {
        ...state,
        list: [...state.list, action.payload]
      };
    case ACTION_TYPES.UPDATE:
      return {
        ...state,
        list: state.list.map(x => x._id != action.payload._id
          ? action.payload
          : x
        )
      }
  
    default:
        return state;
  };
};