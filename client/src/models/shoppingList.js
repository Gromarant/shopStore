import axios from 'axios';

const baseUrl = `/api/v1/${import.meta.env.VITE_END_POINT_LIST}`;

const postList = async(list) => await axios.post(baseUrl, list);

const getListItems = async() => {
    const { data: response } = await axios.get(baseUrl);
    return response;
};

const updateListItems = async(products) => {
    const { data: response } =  await axios.put(baseUrl, products);
    return response;
};

export default {
    postList,
    getListItems,
    updateListItems
};