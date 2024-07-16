import axios from 'axios';

const postList = async(list) => {
    await axios.post(`/api/v1/${import.meta.env.VITE_END_POINT_LIST}`, list);
};

export default {
    postList
};