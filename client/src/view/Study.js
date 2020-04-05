import React from 'react';
import StudyComponent from '../components/StudyComponent/StudyComponent';
import { StudyBar } from '../components/StudyBar/StudyBar';
import { Container } from '@material-ui/core';
import ButterToast, { POS_RIGHT,POS_TOP } from 'butter-toast';
export const Study = () => {
  return (
    <Container maxWidth="lg">
      <StudyBar />
      <StudyComponent />
      <ButterToast position={{ vertical: POS_TOP, horizontal: POS_RIGHT }} />
    </Container>
  )
}