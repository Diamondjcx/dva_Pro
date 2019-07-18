import request from '../utils/request';
export function fetchProduct() {
     return request('/api/products');
}