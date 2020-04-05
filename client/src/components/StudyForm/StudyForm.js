import React, { useEffect } from 'react';
import { styles } from './styles';
import { useForm } from '../../hook/useForm';
import * as actions from '../../store/actions/postStudy';
import { connect } from 'react-redux';
import { 
  TextField, 
  withStyles, 
  Button 
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import ButterToast, { Cinnamon } from 'butter-toast';

const StudyForm = ({ classes, ...props }) => {
  
  const initValue = {
    title: '',
    detail: '',
  };

  const validate = () => {
    let temp = { ...err }
    temp.title = values.title 
      ? '' 
      : 'This field is required';
    temp.detail = values.detail 
      ? '' 
      : 'This field is required';

    setErr({
      ...temp
    })
    return Object.values(temp).every(x => x === '')
  }

  const { 
    values,
    setValues,
    err,
    setErr,
    handleChange
  } = useForm(initValue)

  const handleSubmit = e => {
    e.preventDefault();

    const onSuccess = () => {
      ButterToast.raise({
        content: <Cinnamon.Crisp 
          title='New Study'
          content='Submit ... OK'
          scheme={Cinnamon.Crisp.SCHEME_BLUE}
          icon={<AssignmentTurnedInIcon />}
        />
      })
    }

    if(validate()) {
      props.createStudy(values, onSuccess);
    } else {
      alert('Send ...No')
    }
  }

  return (
    <div>
    <form 
      autoComplete='off' 
      noValidate 
      className={`${classes.root} ${classes.form}`}
      onSubmit={handleSubmit}
    >
      <TextField 
        name='title'  
        variant='outlined'
        label='Study title'
        fullWidth
        value={values.title}
        onChange={handleChange}
        {...(err.title && { err:true, helperText: err.title })}
      />
      <TextField 
        name='detail'  
        variant='outlined'
        label='Study detail'
        fullWidth
        multiline
        rows={8}
        value={values.detail}
        onChange={handleChange}
        {...(err.detail && { err:true, helperText: err.detail })}
      />
      <Button
        variant='contained'
        color='primary'
        size='large'
        type='submit'
        className={classes.button}
      >
        <SendIcon />
      </Button>
    </form>
    {/* If you want to use this app that you write your name here */}
    <p className={classes.text}>-0ne-</p>
    </div>
  )
};
const mapStateProps = state => ({
  postStudylist: state.postStudy.list
})

const mapActionProps = {
  createStudy: actions.create,
  updateStudy: actions.update
}


export default connect(mapStateProps, mapActionProps)(withStyles(styles)(StudyForm));