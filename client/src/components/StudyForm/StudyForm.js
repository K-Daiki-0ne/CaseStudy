import React, { useEffect } from 'react';
import { styles } from './styles';
import { useForm } from '../../hook/useForm';
import { 
  TextField, 
  withStyles, 
  Button 
} from '@material-ui/core';

import SendIcon from '@material-ui/icons/Send';

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
    <div>
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
      <Button
        variant='contained'
        color='primary'
        size='large'
        type='submit'
      >
        <SendIcon />
      </Button>
    </form>
    {/* If you want to use this app that you write your name here */}
    <p className={classes.text}>-0ne-</p>
    </div>
  )
};

export default withStyles(styles)(StudyForm);