import axios from 'axios';

const getProducts = async() => {
    const { data: response } = await axios.get('/api/v1/products');
    return response;
};

export default {
    getProducts
};