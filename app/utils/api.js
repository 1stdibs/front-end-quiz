import axios from 'axios';

const baseURL = 'http://localhost:3001/';
export const fetchProducts = (offset, limit) => axios.get(baseURL + 'data', {
    params: {
        start: offset,
        limit: limit
    }
});
export const fetchProduct = (id) => axios.get(`${baseURL}item/${id}/data`);
export const toggleLikeProduct = (id) => axios.post(`${baseURL}item/${id}/data`);
