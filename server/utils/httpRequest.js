const axios = require('axios');

const httpRequest = async (url) => {
    try {
        const result = await axios.get(url)
                                  .then((response) => response.data);
        return result;
    } catch (err) {
        console.log(err);
        throw err;
    };
};

module.exports = httpRequest;