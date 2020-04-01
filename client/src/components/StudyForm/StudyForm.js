import React, { useEffect } from 'react';
import { styles } from './styles';
import { TextField, withStyles } from '@material-ui/core';
import { useForm } from '../../hook/useForm';

const initValue = {
  title: '',
  detail: '',
}

const StudyForm = ({ classes, ...props }) => {

  const { 
    values,
    setValues,
    handleChange
  } = useForm(initValue)

  return (
    <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`}>
      <TextField 
        name='title'  
        variant='outlined'
        label='Study title'
        fullWidth
        value={values.title}
        onChange={handleChange}
      />
      <TextField 
        name='detail'  
        variant='outlined'
        label='Study detail'
        fullWidth
        multiline
        rows={6}
        value={values.detail}
        onChange={handleChange}
      />
    </form>
  )
};

export default withStyles(styles)(StudyForm);