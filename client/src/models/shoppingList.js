import axios from 'axios';

const postList = async(list) => {
    await axios.post(`/api/v1/${import.meta.env.VITE_END_POINT_LIST}`, list);
};

const getListItems = async() => {
    const { data: response } = await axios.get(`/api/v1/${import.meta.env.VITE_END_POINT_LIST}`);
    return response;
};

export default {
    postList,
    getListItems
};