const queries =  {
    getProductById: `
        SELECT products.product_uid as "uid", products.product_name as "name", products.content_unity as "unity", products.product_brand as "brand", products.quantity as "quantity"
        FROM products
        WHERE products.product_uid=$1;`,
    getProducts: `
        SELECT products.product_uid as "uid", products.product_name as "name", products.content_unity as "unity", products.product_brand as "brand", products.quantity as "quantity"
        FROM products
        ORDER BY products.product_name;`,
    createProduct: `
        INSERT INTO  products(product_uid, product_name, content_unity, product_brand, product_category, quantity)
        VALUES (uuid_generate_v4(), $1, $2, $3, $4, $5);`,
    updateProduct: `
        UPDATE products
        SET product_name = $1,
            content_unity=$2,
            product_brand=$3,
            product_category=$4,
            quantity=$5
        WHERE product_uid=$6;`,
    deleteProduct: `
        DELETE FROM products
        WHERE product_uid= $1
        ON DELETE CASCADE;`
};

module.exports = queries;