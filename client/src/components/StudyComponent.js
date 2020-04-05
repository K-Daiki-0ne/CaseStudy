import React, { useEffect } from 'react';
import StudyForm from './StudyForm/StudyForm';
import StudyContent from './StudyContent/StudyContent';
import { styles } from './styles';
import { connect } from 'react-redux';
import * as actions from '../store/actions/postStudy';
import { 
  Grid, 
  Paper, 
  withStyles, 
  List 
} from '@material-ui/core';

const StudyComponent = ({ classes, ...props }) => {

  useEffect(() => {
    props.fetchAllPostStudy()
  }, []);

  const AllStudy = props.postStudylist.map((contents, index) => {
    return (
      <StudyContent key={index} studies={contents} caseNumber={index}/>
    )
  })

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
            {AllStudy}
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