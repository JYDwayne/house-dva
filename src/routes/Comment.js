import React from 'react';
import { connect } from 'dva';

import CommentList from '../components/CommentList';

class Comment extends React.Component  {

  componentWillMount() {

  }

  componentDidMount() {
    this.props.dispatch({
      type: 'comment/getlist',
      payload: 'http://comment.house.ifeng.com/api/comment/list?houseId=39402&type=0&pic=0'
    })
  }

  render() {
    return (
      <CommentList
        data={ this.props.comment }
      />
    )
  }

  componentWillReceiveProps(nextProps) {

  }
}

export default connect( ({comment}) => {
  return {
    comment
  }
})(Comment);