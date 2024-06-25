const queries = require('../queries/productsQueries');
const { executeQuery, httpRequest } = require('../utils');

const product_url = (product_id) => `https://tienda.mercadona.es/api/products/${product_id}/?lang=es&wh=mad1`;

const getProductById = async (id) => httpRequest(product_url(id));

const getProductByMatch = async (pattern) => {
    const result = await executeQuery(queries.getMatchProducts, [pattern]);
    return result.rows;
};

const getProducts = async () => {
    const result = await executeQuery(queries.getProducts);
    return result.rows;
};

const createProduct = async (product) => {
    const { id, name, img, packaging, store, zip, measure, content, categoryId, price, brand, codebar, nickname  } = product;
    const result = await executeQuery(queries.createProduct, [ id, name, img, packaging, store, zip, measure, content, categoryId, price, brand, codebar, nickname]);
    const createdProduct = {
        message: 'Product created',
        data: {
            name,
            brand,
            store,
            category: categoryId
        },
        result: result.rowCount
    };
    return createdProduct;
};

const updateProduct = async (product, productId) => {
    const { categoryId, brand, measure, store, storeId, id_in_stor, codebar, name, nickname, content, price } = product;
    const result = await executeQuery(queries.updateProduct, [productId, categoryId, brand, measure, store, storeId, id_in_stor, codebar, name, nickname, content, price ]);
    const updateProduct = {
        message: `Product with id ${productId} updated`,
        data: {
            name,
            nickname,
            brand,
            price,
            store,
            category: categoryId
        },
        result: result.rowCount
    };
    return updateProduct;
};

const deleteProduct = async (id) => {
    const result = await executeQuery(queries.deleteProduct, [id]);
    const deletedProduct =  {
        message: `Product with id ${id} deleted`,
        result: result.rowCount
    };
    return deletedProduct;
};

module.exports = {
    getProductById,
    getProductByMatch,
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
};