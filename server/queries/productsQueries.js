const queries =  {
    getProductById: `
        SELECT products.product_uid, products.productName, products.quantity
        FROM products
        WHERE products.product_uid=$1;`,
    getProducts: `
        SELECT products.product_uid, products.productName, products.contentWeight, products.productBrand, products.quantity
        FROM products
        ORDER BY products.productName;`,
    createProduct: `
        INSERT INTO  products(product_uid, productName, contentWeight, productBrand, productCategory, quantity)
        VALUES (uuid_generate_v4(), $1, $2, $3, $4, $5);`
};

module.exports = queries;