const queries =  {
    getProductById: `
        SELECT products.product_uid, products.productName, products.quantity
        FROM products
        WHERE products.product_uid=$1;`,
    getProducts: `
        SELECT products.product_uid, products.productName, products.contentWeight, products.productBrand, products.quantity
        FROM products
        ORDER BY products.productName;`,
};

module.exports = queries;