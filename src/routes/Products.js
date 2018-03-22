import React, { Component } from 'react';

import { connect } from 'dva';

import ProductsList from '../components/ProductList';

// const Products = (props) => (
//   <h2>List of Products</h2>
// );

class Products extends Component {
	constructor(args) {
		super(args)
	}

	componentWillMount() {
	    //获取后端数据
	    this.props.dispatch({
	    	type: 'products/getlist',
	    	payload: 'http://comment.house.ifeng.com/api/comment/list?houseId=39402&type=0&pic=0'
	    })
	}


	render() {
		return (
			<div>
				<ProductsList
					onDelete={ (id) => this.handleDelete(id)}
					products={ this.props.products.productsList }
					isLoad={ this.props.products.isLoading }
					totalNum = { this.props.products.totalNum }
					dispatch = { this.props.dispatch }
				/>
			</div>
		)
	}
	handleDelete(id) {
		this.props.dispatch({
	      type: 'products/delete',
	      payload: id,
	  });
	}
}

export default connect(({ products }) =>  {
		return {
			products
		}
})(Products);
