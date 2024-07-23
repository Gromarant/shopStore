const productFullQuery = `
    SELECT product.id as "uid", product.favorite, category.name as "category", brand.name as "brand", measure.name as "measure", store.name as "store", product.id_in_store as "id", product.codebar as "codebar",  product.name as "name", product.nickname as "nickname", product.content as "content", product.price as "price", product.img as "img"
    FROM product
    LEFT JOIN category ON category.id=product.category_uid
    LEFT JOIN brand ON brand.id=product.brand_uid
    LEFT JOIN measure ON measure.id=product.measure_uid
    LEFT JOIN store ON store.id=product.store_uid
    ORDER BY category, product.name
`;

const queries =  {
    getProductById: `
        ${productFullQuery}
        WHERE id=$1;`,
    getMatchProducts: `
        ${productFullQuery}
        WHERE name ILIKE $1
        OR nickname ILIKE $2;`,
    getProducts: ` 
        ${productFullQuery};
        `,
    createProduct: `
        INSERT INTO  product(id, id_in_store, name, img, packaging, store_ui, measure_ui, content, category_uid,price, brand_ui, codebar, nickname)
        VALUES 
        (uuid_generate_v4(), $1, $2, $3, $4, (SELECT id FROM store WHERE name=$5 and zip_uid=$6), (SELECT id FROM measure WHERE name=$7), $8, (SELECT id FROM category WHERE id_in_store=$9), $10, (SELECT id FROM brand WHERE name=$11), $12, $13);`,
    updateProduct: `
        UPDATE product
        SET category_uid=(SELECT id FROM category WHERE name=$2), 
            measure_uid=(SELECT id FROM measure WHERE name=$3), 
            store_uid=(SELECT id FROM store WHERE name=$4), 
            id_in_store=$5,
            codebar=$6, 
            name=$7, 
            nickname=$8, 
            content=$9, 
            price=$10,
            img=$11,
            favorite=$12
        WHERE id=$1;`,
        updateProductsPrice: `
        UPDATE product
        SET price=$2
        WHERE id_in_store=$1;`,
    deleteProduct: `
        DELETE FROM product
        WHERE id=$1;`
};

module.exports = queries;