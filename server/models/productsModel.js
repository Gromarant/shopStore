const queries = require('../queries/productsQueries');
const executeQuery = require('../utils/queryExecutor');

const getProductById = async (id) => {
    const result = await executeQuery(queries.getProductById, [id]);
    return result.rows[0];
};

const getProducts = async () => {
    const result = await executeQuery(queries.getProducts);
    return result.rows;
};

const createProduct = async (product) => {
    const { name, weight, brand, category, quantity } = product;
    const result = await executeQuery(queries.createProduct, [ name, weight, brand, category, quantity ]);
    const createdProduct = {
        message: "Product created",
        data: {
            name: product.name,
            weight: product.weight,
            brand: product.brand,
            category: product.category,
            quantity: product.quantity,
        },
        result: result.rowCount
    };
    return createdProduct;
};

const updateProduct = async (product, productId) => {
    const { name, weight, brand, category, quantity } = product;
    const result= await executeQuery(queries.updateProduct, [name, weight, brand, category, quantity, productId])
    const updateProduct = {
        message: `Product with id ${productId} updated`,
        data: {
            name: product.name,
            weight: product.weight,
            brand: product.brand,
            category: product.category,
            quantity: product.quantity,
        },
        result: result.rowCount
    };
    return updateProduct;
};

module.exports = {
    getProductById,
    getProducts,
    createProduct,
    updateProduct
};