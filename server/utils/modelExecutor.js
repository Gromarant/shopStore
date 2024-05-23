const executeModel = async (modelMethod, req, res) => {
    try {
        let product = await modelMethod;
        res.status(200).json(product);
    }  
    catch (error) {
        console.error(`Error: ${error}`);
        res.status(error.status || 500).json({
        msj: `${error}`
        });
    };
};

module.exports = executeModel;