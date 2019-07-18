import { fetchProduct } from '../services/product';
export default {
	namespace: 'product',
	state: {
		products: [],
	},
	reducers: {
		'delete'(state, { payload: id }) {
			return state.filter(item => item.id !== id);
		},
		'getData'(state, action){
			const { products } = action.data.data
			return {
				...state,
				products: products
			}
		},
	},
	effects: {
		*fetch(action, { put, call }){
			const products = yield call(fetchProduct);
			yield put({ type: 'getData', data: products });
		}
	},
	// subscriptions: {
	// 	setup({ dispatch, history}) {
	// 		return history.listen(({ pathname }) => {
	// 			if (pathname === "/products") {
	// 				dispatch({ type: 'fetch' });
	// 			}
	// 		});
	// 	}
	// }
};