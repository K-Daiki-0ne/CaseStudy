import React, { useState, useEffect } from 'react';
import { styles } from './styles';
import { TextField, withStyles } from '@material-ui/core';

const initValue = {
  title: '',
  detail: '',
}

const StudyForm = ({ classes, ...props }) => {
  const [values, setValued] = useState({});
  return (
    <form autoComplete='off' noValidate className={classes.root}>
      <TextField 
        name='title'  
        variant='outlined'
        label='Study title'
        fullWidth
        value={values.title}
        className={classes.title}
      />
      <TextField 
        name='detail'  
        variant='outlined'
        label='Study detail'
        fullWidth
        value={values.detail}
        className={classes.detail}
      />
    </form>
  )
};

export default withStyles(styles)(StudyForm);