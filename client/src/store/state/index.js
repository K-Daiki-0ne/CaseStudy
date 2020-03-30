import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from '../reducers/index';

export const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    
    // If this code is nothing that I can't use chrome redux-devtools
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

  )
)