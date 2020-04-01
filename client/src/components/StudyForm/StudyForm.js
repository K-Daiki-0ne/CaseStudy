import React, { useState, useEffect } from 'react';
import { styles } from './styles';
import { TextField, withStyles } from '@material-ui/core';

const initValue = {
  title: '',
  detail: '',
}

const StudyForm = (props) => {

  const [values, setValued] = useState({});
  return (
    <form autoComplete='off' noValidate>
      <TextField 
        name='title'  
        variant='outlined'
        label='Study title'
        fullWidth
        value={values.title}
      />
      <TextField 
        name='detail'  
        variant='outlined'
        label='Study detail'
        fullWidth
        value={values.detail}
      />
    </form>
  )
};

export default withStyles(styles)(StudyForm);