const productFullQuery = `
    SELECT product.id as "uid", product.favorite, category.name as "category", brand.name as "brand", measure.name as "measure", store.name as "store", product.id_in_store as "id", product.codebar as "codebar",  product.name as "name", product.nickname as "nickname", product.content as "content", product.price as "price", product.img as "img"
    FROM product
    LEFT JOIN category ON category.id=product.category_uid
    LEFT JOIN brand ON brand.id=product.brand_uid
    LEFT JOIN measure ON measure.id=product.measure_uid
    LEFT JOIN store ON store.id=product.store_uid
    ORDER BY category
`;

const queries =  {
    getListItems: `
        WITH full_products as (
            ${productFullQuery}
        )
        SELECT full_products.*, list_items.quantity
        FROM list_items
        JOIN full_products ON full_products.uid = list_items.product_uid;`,
    createListItem: `
        INSERT INTO list_items(id, product_uid, quantity)
        VALUES
        (uuid_generate_v4(), (SELECT id FROM product WHERE id=$1), $2);`,
    updateListItem: `
        UPDATE list_items
        SET product_uid=(SELECT id FROM product WHERE id=$2)
            quantity=$3,
        WHERE id=$1;`,
    deleteListItem: `
        DELETE FROM list_items;`
};

module.exports = queries;