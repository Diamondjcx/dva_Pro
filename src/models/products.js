export default {
	namespace: 'products',
	state: [],
	reducers: {
		'delete'(state, { payload: id }) {
			return state.filter(item => item.id !== id);
		},
	},
};

// import { fetchUsers } from '../services/user';

// export default {
// 	namespace: 'user',
// 	state: {
// 		list: [],
// 	},
// 	reducers: {
// 		save(state, action) {
// 			return {
// 				...state,
// 				list: action.data,
// 			};
// 		},
// 	},
// 	effects: {
// 		* fetch(action, { put, call }) {
// 			const users = yield put(fetchUsers, action.data);
// 			yield put({ type: 'save', data: users });
// 		},
// 	},
// 	subscriptions: {
// 		setup({ dispatch, history }) {
// 			return history.listen(({ pathname }) => {
// 				if (pathname === '/user') {
// 					dispatch({ type: 'fetch' });
// 				}
// 			});
// 		},
// 	},
// }