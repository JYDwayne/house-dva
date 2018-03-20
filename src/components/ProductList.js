import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button, Pagination } from 'antd';

//引入翻页服务
// import { requestListFromServer } from '../utils/request';


class ProductList extends Component {
  constructor(args) {
    // console.log(args);
    super(args);
  }
  changePage(currentPage, pageCount) {
    this.props.dispatch({
      type: 'products/getlist',
      payload: 'http://comment.house.ifeng.com/api/comment/list?houseId=39402&type=0&pic=0&index='+currentPage
    })
  }

  testLeatest() {
    this.props.dispatch({
      type: 'products/testTakelatest',
      payload: 'http://comment.house.ifeng.com/api/comment/list?houseId=39402&type=0&pic=0&index=5'
    })
  }

  render() {
    const columns = [{
        title: 'Name',
        dataIndex: 'content',
      }, {
        title: 'Actions',
        render: (text, record) => {
          return (
            <Popconfirm title="Delete?" onConfirm={() => this.props.onDelete(record.id)}>
              <Button>Deleteeee</Button>
            </Popconfirm>
          );
        },
      }];
    return (
        <div>
          <Table
            dataSource={this.props.products}
            loading = { !this.props.isLoad }
            pagination = {
              {
                total: this.props.totalNum,
                defaultPageSize: 10,
                onChange: (page, pageSize) => this.changePage(page, pageSize)
              }
            }
            columns={columns}
            rowKey='id'
          />
          <div onClick={ () => this.testLeatest()}>测试takeLeatast</div>
        </div>
    );
  }
}


// ProductList.propTypes = {
//   onDelete: PropTypes.func.isRequired,
//   products: PropTypes.array.isRequired,
// };

export default ProductList;