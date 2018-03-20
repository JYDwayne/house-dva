import React from 'react';
import { connect } from 'dva';

import CommentList from '../components/CommentList';

class Comment extends React.Component  {

  componentDidMount() {
      //获取后端数据
      this.props.dispatch({
        type: 'comment/getlist',
        payload: 'http://comment.house.ifeng.com/api/comment/list?houseId=39402&type=0&pic=0'
      })
  }

  render() {
    console.log(this.props.comment);
    return (
      <CommentList
        data={ this.props.comment }
      />
    )
  }

  // methods
}

export default connect( ({comment}) => {
  // console.log(comment);
  return {
    comment
  }
})(Comment);