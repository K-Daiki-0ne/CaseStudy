import React from 'react';
import { 
  ListItem, 
  ListItemText,
  Typography,
  Divider
} from '@material-ui/core';

export const StudyContent = ({ studies, caseNumber }) => {
  
  return (
    <>
      <ListItem>
        <ListItemText>
          <Typography variant='h5'>
            Case{caseNumber + 1}: {studies.title}
          </Typography>
          <p>{studies.detail}</p>
        </ListItemText>
      </ListItem>
      <Divider component='li' />
    </>
  )
}