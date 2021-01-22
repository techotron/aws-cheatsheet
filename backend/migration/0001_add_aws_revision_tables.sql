CREATE TABLE IF NOT EXISTS category_types(
    category_type_id INT PRIMARY KEY,
    category_type_name VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS categories(
    category_id INT PRIMARY KEY,
    type_id INT NOT NULL,
    category_title VARCHAR(50) NOT NULL,
    category_name VARCHAR(50) NOT NULL,
    CONSTRAINT fk_type_in_category_types FOREIGN KEY(type_id) REFERENCES category_types(category_type_id)
);

CREATE TABLE IF NOT EXISTS sub_categories(
    sub_category_id INT PRIMARY KEY,
    category_id INT NOT NULL,
    sub_category_name VARCHAR(50) UNIQUE NOT NULL,
    sub_category_title VARCHAR(50) UNIQUE NOT NULL,
    sub_category_icon VARCHAR(20) NOT NULL,
    sub_items INT[],
    CONSTRAINT fk_subcategory_in_category FOREIGN KEY(category_id) REFERENCES categories(category_id)
);

CREATE TABLE IF NOT EXISTS sub_items(
    sub_item_id INT PRIMARY KEY,
    sub_item_name VARCHAR(30),
    sub_item_title VARCHAR(30),
    sub_item_isEnabled BOOLEAN NOT NULL
);

CREATE TABLE IF NOT EXISTS summaries(
    summary_id INT PRIMARY KEY,
    summary TEXT NOT NULL,
    CONSTRAINT fk_subcategory_in_subcategory FOREIGN KEY(summary_id) REFERENCES sub_categories(sub_category_id)
);
