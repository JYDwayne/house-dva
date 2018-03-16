import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button } from 'antd';

class ProductList extends Component {
  constructor(args) {
    super(args);
  }

  //加载结束
  // loadingDown() {
  //   this.setState({
  //     isLoading: false
  //   })
  // }

  render() {
    console.log(this.props);
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
      <Table
        dataSource={this.props.products}
        loading = { !this.props.isLoad }
        columns={columns}
        rowKey='id'
      />
    );
  }
}


// ProductList.propTypes = {
//   onDelete: PropTypes.func.isRequired,
//   products: PropTypes.array.isRequired,
// };

export default ProductList;