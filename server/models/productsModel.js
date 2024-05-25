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
    const { name, unity, brand, category, quantity } = product;
    const result = await executeQuery(queries.createProduct, [ name, unity, brand, category, quantity ]);
    const createdProduct = {
        message: "Product created",
        data: {
            name: product.name,
            unity: product.unity,
            brand: product.brand,
            category: product.category,
            quantity: product.quantity,
        },
        result: result.rowCount
    };
    return createdProduct;
};

const updateProduct = async (product, id) => {
    const { name, unity, brand, category, quantity } = product;
    const result = await executeQuery(queries.updateProduct, [name, unity, brand, category, quantity, id]);
    const updateProduct = {
        message: `Product with id ${id} updated`,
        data: {
            name: product.name,
            unity: product.unity,
            brand: product.brand,
            category: product.category,
            quantity: product.quantity,
        },
        result: result.rowCount
    };
    return updateProduct;
};

const deleteProduct = async (id) => {
    const result = await executeQuery(queries.deleteProduct, [id]);
    const deleteProduct =  {
        message: `Product with id ${id} deleted`,
        data: {
            name: product.name,
            unity: product.weight,
            brand: product.brand
        },
        result: result.rowCount
    };
    return deleteProduct;
};

module.exports = {
    getProductById,
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
};