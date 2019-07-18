
// export default 
// {
// 	'GET /api/products': {
// 		products: [
// 			{ name: 'dva', id: 1 },
// 			{ name: 'antd', id: 2 },
// 		],
// 	},
// }
const fs=require('fs');
const path=require('path');
const mockPath=path.join(__dirname+'/mock');

const mock={};
fs.readdirSync(mockPath).forEach(file=>{

    Object.assign(mock,require('./mock/'+file));
});

module.exports=mock;