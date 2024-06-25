const queries =  {
    getListItemById: `
        SELECT list_items.id as "uid", list_items.product_uid as "product"
        FROM list_items
        WHERE id=$1;`,
    createListItem: `
        INSERT INTO list_items(id, product_uid)
        VALUES
        (uuid_generate_v4(), (SELECT id FROM product WHERE id=$1));`,
    updateListItem: `
        UPDATE list_items
        SET product_uid=(SELECT id FROM product WHERE id=$2)
        WHERE id=$1;`,
    deleteListItem: `
        DELETE FROM list_items
        WHERE id=$1;`
};

module.exports = queries;