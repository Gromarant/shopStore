const queries = {
    createTableZip: `
        CREATE TABLE zip (
            id UUID NOT NULL PRIMARY KEY,
            code INT
        );`,
    createTableCategory: `
        CREATE TABLE category (
            id UUID NOT NULL PRIMARY KEY,
            id_in_store NUMERIC UNIQUE,
            name VARCHAR(50)
        );`,
    createTableBrand: `
        CREATE TABLE brand (
            id UUID NOT NULL PRIMARY KEY,
            name VARCHAR(50) UNIQUE
        );`,
    createTableMeasure: `
        CREATE TABLE measure (
            id UUID NOT NULL PRIMARY KEY,
            name VARCHAR(50) UNIQUE
        );`,
    createTableStore: `
        CREATE TABLE store (
            id UUID NOT NULL PRIMARY KEY,
            zip_uid UUID,
            name VARCHAR(50),
            address VARCHAR(255),
            CONSTRAINT fk_zip 
            FOREIGN KEY(zip_uid) REFERENCES zip(id)
            ON DELETE CASCADE
        );`,
    createTableProduct: `
        CREATE TABLE product (
            id UUID NOT NULL PRIMARY KEY,
            category_uid UUID,
            brand_uid UUID,
            measure_uid UUID,
            store_uid UUID,
            id_in_store NUMERIC,
            codebar VARCHAR(50),
            name VARCHAR(50),
            nickname VARCHAR(255),
            content INT,
            price NUMERIC,
            CONSTRAINT fk_category 
            FOREIGN KEY(category_uid) REFERENCES category(id)
            ON DELETE CASCADE,
            CONSTRAINT fk_brand 
            FOREIGN KEY(brand_uid) REFERENCES brand(id)
            ON DELETE CASCADE,
            CONSTRAINT fk_measure 
            FOREIGN KEY(measure_uid) REFERENCES measure(id)
            ON DELETE CASCADE,
            CONSTRAINT fk_store 
            FOREIGN KEY(store_uid) REFERENCES store(id)
            ON DELETE CASCADE
        );`,
    createTableLocation: `
        CREATE TABLE location (
            id UUID NOT NULL PRIMARY KEY,
            name VARCHAR(320)
        );`,
    createTablePantry: `
        CREATE TABLE pantry (
            id UUID NOT NULL PRIMARY KEY,
            product_uid UUID,
            location_uid UUID,
            name VARCHAR(50),
            quantity INT,
            expiration DATE,
            CONSTRAINT fk_product
            FOREIGN KEY(product_uid) REFERENCES product(id)
            ON DELETE CASCADE,
            CONSTRAINT fk_location
            FOREIGN KEY(location_uid) REFERENCES location(id)
            ON DELETE CASCADE
        );`,
    createTableList: `
        CREATE TABLE list (
            id UUID NOT NULL PRIMARY KEY,
            product_uid UUID,
            CONSTRAINT fk_store
            FOREIGN KEY(product_uid) REFERENCES product(id)
            ON DELETE CASCADE
        );`,
    createTableBill: `
        CREATE TABLE bill (
            id UUID NOT NULL PRIMARY KEY,
            store_uid UUID,
            CONSTRAINT fk_store
            FOREIGN KEY(store_uid) REFERENCES store(id)
            ON DELETE CASCADE
        );`,
    createTableBillItems: `
        CREATE TABLE bill_items (
            id UUID NOT NULL PRIMARY KEY,
            quantity INT,
            bill_uid UUID,
            product_uid UUID,
            CONSTRAINT fk_bill
            FOREIGN KEY(bill_uid) REFERENCES bill(id)
            ON DELETE CASCADE,
            CONSTRAINT fk_product
            FOREIGN KEY(product_uid) REFERENCES product(id)
            ON DELETE CASCADE
        );`,
    createZip: `
        INSERT INTO zip(id, code) 
        VALUES
        ( uuid_generate_v4(), $1);`,
    createCategory: `
        INSERT INTO category (id, id_in_store, name)
        VALUES
        (uuid_generate_v4(), $1, $2);`,
    createMeasure: `
        INSERT INTO measure (id, name)
        VALUES
        (uuid_generate_v4(), $1);`,
    createStore: `
        INSERT INTO store (id, name, address, zip_uid)
        VALUES
        (uuid_generate_v4(), $1, $2, (SELECT id FROM zip WHERE code=$3));`,
};

module.exports = queries;