import React from 'react';
import { 
  ListItem, 
  ListItemText,
  Typography,
  Divider,
  Button
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const StudyContent = ({ studies, caseNumber }) => {
  
  return (
    <>
      <ListItem>
        <ListItemText>
          <Typography variant='h5'>
            Case{caseNumber + 1}: {studies.title}
          </Typography>
          <p>{studies.detail}</p>
          <Button
            varient='contained'
            color='primary'
            size='small'
          >
            <EditIcon />
          </Button>
          <Button
            varient='contained'
            color='secondary'
            size='small'
          >
            <DeleteIcon />
          </Button>
        </ListItemText>
      </ListItem>
      <Divider component='li' />
    </>
  )
};

export default StudyContent