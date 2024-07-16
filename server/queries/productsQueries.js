const productFullQuery = `
    SELECT product.id as "uid", category.name as "category", brand.name as "brand", measure.name as "measure", store.name as "store", product.id_in_store as "id", product.codebar as "codebar",  product.name as "name", product.nickname as "nickname", product.content as "content", product.price as "price", product.img as "img"
    FROM product
    LEFT JOIN category ON category.id=product.category_uid
    LEFT JOIN brand ON brand.id=product.brand_uid
    LEFT JOIN measure ON measure.id=product.measure_uid
    LEFT JOIN store ON store.id=product.store_uid
    ORDER BY category
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
        SET category_uid=(SELECT id FROM category WHERE id_in_store=$2), 
            brand_ui=(SELECT id FROM brand WHERE name=$3)$3, 
            measure_ui=(SELECT id FROM measure WHERE name=$4), 
            store_ui=(SELECT id FROM store WHERE name=$4 and zip_uid=$5), 
            id_in_stor=$6,
            codebar=$7, 
            name=$8, 
            nicknam=$9, 
            content=$10, 
            price=$11,
            img=$12
        WHERE id=$1;`,
    deleteProduct: `
        DELETE FROM product
        WHERE id=$1;`
};

module.exports = queries;