import React from 'react';
import { styles } from './styles';
import { 
  ListItem, 
  ListItemText,
  Typography,
  Divider,
  Button,
  withStyles
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const StudyContent = ({ classes, studies, caseNumber }) => {
  
  return (
    <>
      <ListItem>
        <ListItemText>
          <Typography variant='h5'>
            Case{caseNumber + 1}: {studies.title}
          </Typography>
          <p>{studies.detail}</p>
          <div className={classes.btnCnt}>
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
              className={classes.btnMrg}
            >
              <DeleteIcon />
            </Button>
          </div>
        </ListItemText>
      </ListItem>
      <Divider component='li' />
    </>
  )
};

export default withStyles(styles)(StudyContent)