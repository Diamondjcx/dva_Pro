/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';

@connect(({ product }) => ({
	product,
}))

class Products extends Component {
	state = {
		products:[]
	};
	componentDidMount() {
		this.initData();
	}
	handleDelete () {

	}
	initData = () =>{
		const { dispatch } = this.props;
		dispatch({
			type: 'product/fetch'
		});
	}
	render (){
		const { products } = this.props.product; 
		return (
		<div>
			<h2 > List of Products </h2>
			{
				products && products.length && <ProductList onDelete = { this.handleDelete } products = {products }
				/> 

			}
		</div>
		);
	}
}

// eslint-disable-next-line no-undef
export default Products;
// export default connect(({ products }) => ({
// 	products,
// }))(Products);