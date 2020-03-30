import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/postStudy';

const StudyComponent = (props) => {
  // const [, setstate] = useState(initialState)

  useEffect(() => {
    props.fetchAllPostStudy()
  }, []);

  return (
    <div>From CaseStudy</div>
  )
}

const mapStateProps = state => ({
  postStudylist: state.postStudy.list
})

const mapActionProps = {
  fetchAllPostStudy: actions.fetchAll
}

export default connect(mapStateProps, mapActionProps)(StudyComponent);