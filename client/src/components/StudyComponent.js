import React, { useEffect } from 'react';
import { StudyForm } from './StudyForm/StudyForm';
import { styles } from './styles';
import { connect } from 'react-redux';
import * as actions from '../store/actions/postStudy';
import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core';
import { List } from '@material-ui/core';

const StudyComponent = ({ classes, ...props }) => {
  // const [, setstate] = useState(initialState)

  useEffect(() => {
    props.fetchAllPostStudy()
  }, []);

  const AllStudy = props.postStudylist.map((contents, index) => {
    console.log(index)
    return (
      // <StudyContent key={index} studyContent={contents} />
      <p key={index}>Hello World</p>
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