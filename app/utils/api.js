import axios from 'axios';

const baseURL = 'http://localhost:3001/';
export const fetchProducts = () => axios.get(baseURL + 'data');
export const fetchProduct = (id) => axios.get(baseURL + id);
