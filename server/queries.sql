CREATE TABLE users (
    user_uid UUID NOT NULL PRIMARY KEY,
    email VARCHAR(320) NOT NULL UNIQUE,
    firstName VARCHAR(50),
    lastName VARCHAR(50),
    phone VARCHAR(10),
    country VARCHAR(30),
    city VARCHAR(50),
    zip VARCHAR(5),
    address VARCHAR(255)
);

CREATE TABLE orders (
    order_uid UUID NOT NULL PRIMARY KEY,
    userName VARCHAR(50),
    toCountry VARCHAR(30),
    tocity VARCHAR(50),
    toZip VARCHAR(5),
    toAddress VARCHAR(255),
    FOREIGN KEY(user_Uid) REFERENCES users(user_Uid)
);

CREATE TABLE products (
    product_uid UUID NOT NULL PRIMARY KEY,
    productName VARCHAR(50),
    contentWeight VARCHAR(50),
    productBrand VARCHAR(50),
    productCategory VARCHAR(50),
    quantity INT
);

CREATE TABLE order_items (
    order_items_id UUID NOT NULL PRIMARY KEY,
    quantity INT,
    price NUMERIC,
    FOREIGN KEY(order_uid) REFERENCES orders(order_uid),
    FOREIGN KEY(product_uid) REFERENCES products(product_uid)
);

INSERT INTO users(user_uid, email, firstName, lastName, phone, country, city, zip, address ) 
VALUES
(uuid_generate_v4(), 'marian0203@gmail.com', 'Marian', 'Rodriguez', '685304669', 'Spain', 'Madrid', '28030', 'Albufera avenue' ),
(uuid_generate_v4(), 'luis1703@gmail.com', 'Luis', 'Rodriguez', '4128885782', 'Venezuela', 'Valencia', '2001', 'Bolivar avenue' ),
(uuid_generate_v4(), 'Migue2408@gmail.com', 'Mig', 'Macho', '655951159', 'Spain', 'Madrid', '28030', 'Albufera avenue' ),
(uuid_generate_v4(), 'Vick1207@gmail.com', 'Vicky', 'Macho', '65555555', 'Spain', 'Madrid', '28030', 'Albufera avenue' );

INSERT INTO products(product_uid, productName, contentWeight, productBrand, productCategory, quantity)
VALUES
(uuid_generate_v4(), 'Toothpaste', '150g', 'Colgate', 'Personal Care', 500),
(uuid_generate_v4(), 'Smartphone', '200g', 'Samsung', 'Electronics', 100),
(uuid_generate_v4(), 'Apples', '1kg', 'Local Farm', 'Produce', 300),
(uuid_generate_v4(), 'Canned Soup', '400g', 'Campbell''s', 'Canned Goods', 120),
(uuid_generate_v4(), 'Dish Soap', '500ml', 'Palmolive', 'Household', 80),
(uuid_generate_v4(), 'Pet Food', '1.5kg', 'Purina', 'Pet Supplies', 200),
(uuid_generate_v4(), 'Bread', '500g', 'Wonder Bread', 'Bakery', 250),
(uuid_generate_v4(), 'Backpack', '800g', 'North Face', 'Accessories', 80),
(uuid_generate_v4(), 'Shampoo', '250ml', 'Pantene', 'Personal Care', 300),
(uuid_generate_v4(), 'Wireless Earbuds', '50g', 'Sony', 'Electronics', 50),
(uuid_generate_v4(), 'Running Shoes', '300g', 'Nike', 'Footwear', 200),
(uuid_generate_v4(), 'Sandals', '400g', 'Birkenstock', 'Footwear', 150),
(uuid_generate_v4(), 'Blue Jeans', '600g', 'Levi''s', 'Apparel', 150),
(uuid_generate_v4(), 'T-Shirts', '200g', 'H&M', 'Apparel', 200),
(uuid_generate_v4(), 'Bananas', '1 bunch', 'Local Farm', 'Produce', 400),
(uuid_generate_v4(), 'Canned Tuna', '200g', 'Starkist', 'Canned Goods', 80),
(uuid_generate_v4(), 'Laundry Detergent', '2.5L', 'Tide', 'Household', 100),
(uuid_generate_v4(), 'Dog Food', '2kg', 'Pedigree', 'Pet Supplies', 200),
(uuid_generate_v4(), 'Cat Litter', '5kg', 'Arm & Hammer', 'Pet Supplies', 150);