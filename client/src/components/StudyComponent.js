import React, { useEffect } from 'react';
import { StudyForm } from './StudyForm/StudyForm';
import { connect } from 'react-redux';
import * as actions from '../store/actions/postStudy';
import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';

const StudyComponent = (props) => {
  // const [, setstate] = useState(initialState)

  useEffect(() => {
    props.fetchAllPostStudy()
  }, []);

  return (
    <Grid container>
      <Grid item xs={5}>
        <Paper>
          <StudyForm />
        </Paper>
      </Grid>
      <Grid item xs={7}>
        <Paper>
          <div>
            list of post
          </div>
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

export default connect(mapStateProps, mapActionProps)(StudyComponent);