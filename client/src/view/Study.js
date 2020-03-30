import React from 'react';
import StudyComponent from '../components/StudyComponent';
import { StudyBar } from '../components/StudyBar/StudyBar';
import { Container } from '@material-ui/core';

export const Study = () => {
  return (
    <Container maxWidth="lg">
      <StudyBar />
      <StudyComponent />
    </Container>
  )
}