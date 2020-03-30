import React from 'react';
import { Study } from './view/Study';
import { Provider } from 'react-redux';
import { store } from './store/state/index';

export const App = () => {
  return (
    <Provider store={store}>
      <Study />
    </Provider>
  )
}