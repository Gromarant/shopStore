const queries =  {
    getPantryById: `
        SELECT pantry.id as "uid", pantry.product_uid as "product", pantry.location_uid as "location", pantry.name, pantry.quantity, pantry.expiration 
        FROM pantry
        WHERE id=$1;`,
    createPantry: `
        INSERT INTO pantry(id, product_uid, location_uid, name, quantity, expiration)
        VALUES
        (uuid_generate_v4(), (SELECT id FROM product WHERE id=$1), (SELECT id FROM location WHERE id=$2), $3, $4, $5);`,
    updatePantry: `
        UPDATE pantry
        SET product_uid=(SELECT id FROM product WHERE id=$2), 
            location_uid=(SELECT id FROM location WHERE id=$3), 
            name=$4, 
            quantity=$5, 
            expiration=$6
        WHERE id=$1;`,
    deletePantry: `
        DELETE FROM pantry
        WHERE id=$1;`
};

module.exports = queries;