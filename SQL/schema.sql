DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Shirt', 'Clothing', 2.75, 10),
  ('Pants', 'Clothing', 4.50, 10),
  ('The Matrix', 'Movies', 10, 5),
  ('Terminator 2', 'Movies', 10, 5),
  ('The Avengers', 'Movies', 10, 5),
  ('Washer', 'Appliances', 200, 2),
  ('Dryer', 'Appliances', 200, 2),
  ('Rake', 'Garden', 12.25, 5),
  ('Trowel', 'Garden', 5.75, 5),
  ('Milk', 'Grocery', 2, 10);

SELECT * FROM products;