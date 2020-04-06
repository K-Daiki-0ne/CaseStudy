import React, { useState, useEffect } from 'react';
import StudyForm from '../StudyForm/StudyForm';
import { styles } from './styles';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/postStudy';
import { 
  Grid, 
  Paper, 
  withStyles, 
  List,
  ListItem, 
  ListItemText,
  Typography,
  Divider,
  Button,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';


const StudyComponent = ({ classes, ...props }) => {
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    props.fetchAllPostStudy()
  }, []);

  return (
    <Grid container>
      <Grid item xs={5}>
        <Paper className={classes.paper}>
          <StudyForm {...{currentId, setCurrentId}} />
        </Paper>
      </Grid>
      <Grid item xs={7}>
        <Paper className={classes.paper}>
          <List>
            {
              props.postStudylist.map((studies, index) => {
                return (
                  <React.Fragment key={index}>
                    <ListItem>
                      <ListItemText>
                        <Typography variant='h5'>
                          Case{index + 1}: {studies.title}
                        </Typography>
                        <p>{studies.detail}</p>
                        <div className={classes.btnCnt}>
                          <Button
                            varient='contained'
                            color='primary'
                            size='small'
                            onClick={() => setCurrentId(studies._id)}
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
                  </React.Fragment>
                )
              })
            }
          </List>
        </Paper>
      </Grid>
    </Grid>
  )
}

const mapStateProps = state => ({
  postStudylist: state.postStudy.list
})

const mapActionProps = {
  fetchAllPostStudy: actions.fetchAll
}

export default connect(mapStateProps, mapActionProps)(withStyles(styles)(StudyComponent));