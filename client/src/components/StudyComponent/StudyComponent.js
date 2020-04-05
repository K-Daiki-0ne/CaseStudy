import React, { useEffect } from 'react';
import StudyForm from '../StudyForm/StudyForm';
// import StudyContent from './StudyContent/StudyContent';
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

  useEffect(() => {
    props.fetchAllPostStudy()
  }, []);

  // const AllStudy = props.postStudylist.map((contents, index) => {
  //   return (
  //     <StudyContent key={index} studies={contents} caseNumber={index}/>
  //   )
  // })

  return (
    <Grid container>
      <Grid item xs={5}>
        <Paper className={classes.paper}>
          <StudyForm />
        </Paper>
      </Grid>
      <Grid item xs={7}>
        <Paper className={classes.paper}>
          <List>
            {
              props.postStudylist.map((studies, index) => {
                return (
                  <>
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