import React, { useState, useEffect } from 'react';
import { styles } from './styles';
import { TextField, withStyles } from '@material-ui/core';

const initValue = {
  title: '',
  detail: '',
}

const StudyForm = ({ classes, ...props }) => {
  const [values, setValues] = useState({});

  const handleChange = e => {
    const { naem, value } = e.target;
    setValues({
      ...value,
      [name]: value
    })

  };


  return (
    <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`}>
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
        multiline
        rows={6}
        value={values.detail}
      />
    </form>
  )
};

export default withStyles(styles)(StudyForm);