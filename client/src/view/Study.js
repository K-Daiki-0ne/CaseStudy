import React from 'react';
import StudyComponent from '../components/StudyComponent';
import { Provider } from 'react-redux';
import { store } from '../store/state/index';

export const Study = () => {
  return (
    <Provider store={store}>
      <StudyComponent />
    </Provider>
  )
}