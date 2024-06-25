const queries =  {
    getBillById: `
        SELECT bill.id as "uid", bill.store_uid as "store"
        FROM bill
        WHERE id=$1;`,
    createBill: `
        INSERT INTO bill(id, store_uid)
        VALUES
        (uuid_generate_v4(), (SELECT id FROM store WHERE id=$1));`,
    updateBill: `
        UPDATE bill
        SET store_uid=(SELECT id FROM store WHERE id=$2)
        WHERE id=$1;`,
    deleteBill: `
        DELETE FROM bill
        WHERE id=$1;`
};

module.exports = queries;