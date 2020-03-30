import React from 'react'
import { AppBar } from '@material-ui/core';
import { Typography } from '@material-ui/core';

export const StudyBar = () => {
  return (
    <AppBar position="static" color="inherit">
      <Typography 
        variant="h2"
        align="center"
      >
        CaseStudy
      </Typography>
    </AppBar>
  )
}