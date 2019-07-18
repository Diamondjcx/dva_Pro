const Mock = require('mockjs');

let db = Mock.mock({
    products: [
        { name: 'dva', id: 1 },
        { name: 'antd', id: 2 },
    ],
});

module.exports = {
	[`GET /api/products`](req, res) {

		res.status(200).json(db);
	},

	[`POST /api/products`](req, res) {

		let user = req.body;
		console.log(req);
		user.id = Mock.mock('@id');
		db.data.push(user);

		res.status(200).json(user);
	}
}


// const Mock = require('mockjs');

// let db = Mock.mock({
// 	'data|3-6': [{
// 		id: '@id',
// 		name: '@name',
// 		'age|18-32': 1
// 	}]
// });

// module.exports = {
// 	[`GET /api/users`](req, res) {

// 		res.status(200).json(db);
// 	},

// 	[`POST /api/users`](req, res) {

// 		let user = req.body;
// 		console.log(req);
// 		user.id = Mock.mock('@id');
// 		db.data.push(user);

// 		res.status(200).json(user);
// 	}
// }