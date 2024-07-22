import axios from 'axios';

const getProducts = async() => {
    const { data: response } = await axios.get('/api/v1/products');
    return response;
};

const updateProduct = async(id, product) => {
    await axios.put(`/api/v1/products/${id}`, product);
}

export default {
    getProducts,
    updateProduct
};