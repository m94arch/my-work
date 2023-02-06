show databases;
create database databaseName;
select database();
use databaseName;
show tables;
desc tableName;
show columns from tableName;
create table tableName (c1 Type ....)
drop database dbName;
drop table tableName;
create table users (
    id BIGINT(16) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    age INT NULL,
    address VARCHAR DEFAULT("UNDEFINED"),
)

INSERT INTO tableName (c1, c2) VALUES (v1, v2);
INSERT INTO tableName (email, name) 
    VALUES ("email-value", "name-value");
    
INSERT INTO tableName (v1, v2);

DELETE FROM tableName;
DELETE FROM tableName WHERE c1 = v1;

UPDATE tableName SET c1 = v1;
UPDATE tableName SET c1 = v1 WHERE c2 = v2;

CREATE TABLE users(
        id BIGINT(16) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
        first_name VARCHAR(50) NOT NULL,
        last_name VARCHAR(50) NOT NULL,
        age INT DEFAULT (0),
        address VARCHAR(50)
    );

INSERT INTO users (first_name, last_name, age, address) VALUES ("Ahmed","Mohammed",30,"Gaza");
INSERT INTO users (first_name, last_name, age, address) VALUES ("Naser","Sami",33,"Gaza");
INSERT INTO users (first_name, last_name, age, address) VALUES ("Sameh","Kamal",30,"Rafah");
INSERT INTO users (first_name, last_name, age, address) VALUES ("Rami","Ahmed",30,"Khanyounis");
INSERT INTO users (first_name, last_name, age, address) VALUES ("Salam","Mostafa",50,"Nosyrat");
INSERT INTO users (first_name, last_name, age, address) VALUES ("Kamel","Mostafa",50,NULL);

select s.id as 'S-ID', s.title as 'S-Title', s.category_id,
       c.id as 'C-ID',c.title as 'C-Title'
from sub_categories s JOIN categories c ON s.category_id = c.id LIMIT 10;

select s.id as 'S-ID', s.title as 'S-Title', s.category_id,
       c.id as 'C-ID',c.title as 'C-Title'
from sub_categories s LEFT JOIN categories c ON s.category_id = c.id LIMIT 10;

select s.id as 'S-ID', s.title as 'S-Title', s.category_id,
       c.id as 'C-ID',c.title as 'C-Title'
from sub_categories s RIGHT JOIN categories c ON s.category_id = c.id LIMIT 10;

ALTER TABLE tableName MODIFY column_name TYPE PROPETIES
ALTER TABLE tableName MODIFY category_id BIGINT(16) UNSIGNED NULL;

select s.id as 'S-ID', s.title as 'S-Title', s.category_id,
       c.id as 'C-ID',c.title as 'C-Title'
from sub_categories s LEFT JOIN categories c ON c.id = s.category_id LIMIT 10;


-----

select s.id as 'S-ID', s.title as 'S-Title', s.category_id,
       c.id as 'C-ID',c.title as 'C-Title'
from sub_categories s RIGHT JOIN categories c ON s.category_id = c.id LIMIT 10;

select s.id as 'S-ID', s.title as 'S-Title', s.category_id,
       c.id as 'C-ID',c.title as 'C-Title'
from categories c RIGHT JOIN sub_categories s ON c.id = s.category_id LIMIT 10;

------

select s.id as 'S-ID', s.title as 'S-Title', s.category_id,
       c.id as 'C-ID',c.title as 'C-Title'
from sub_categories s LEFT JOIN categories c ON s.category_id = c.id LIMIT 10;

select s.id as 'S-ID', s.title as 'S-Title', s.category_id,
       c.id as 'C-ID',c.title as 'C-Title'
from categories c LEFT JOIN sub_categories s ON c.id = s.category_id LIMIT 10;

------

select s.id as 'S-ID', s.title as 'S-Title', s.category_id,
       c.id as 'C-ID',c.title as 'C-Title'
from sub_categories s RIGHT JOIN categories c ON s.category_id = c.id LIMIT 10;

select s.id as 'S-ID', s.title as 'S-Title', s.category_id,
       c.id as 'C-ID',c.title as 'C-Title'
from categories c RIGHT JOIN sub_categories s ON c.id = s.category_id LIMIT 10;

------

select s.id as 'S-ID', s.title as 'S-Title', s.category_id,
       c.id as 'C-ID',c.title as 'C-Title'
from sub_categories s JOIN categories c ON s.category_id = c.id LIMIT 10;

select s.id as 'S-ID', s.title as 'S-Title', s.category_id,
       c.id as 'C-ID',c.title as 'C-Title'
from categories c JOIN sub_categories s ON c.id = s.category_id LIMIT 10;

----

select s.id as 'S-ID', s.title as 'S-Title', s.category_id,
       c.id as 'C-ID',c.title as 'C-Title'
from sub_categories s INNER JOIN categories c ON s.category_id = c.id LIMIT 10;

select s.id as 'S-ID', s.title as 'S-Title', s.category_id,
       c.id as 'C-ID',c.title as 'C-Title'
from categories c INNER JOIN sub_categories s ON c.id = s.category_id LIMIT 10;

-----

select s.id as 'S-ID', s.title as 'S-Title', s.category_id,
       c.id as 'C-ID',c.title as 'C-Title'
from sub_categories s CROSS JOIN categories c ON s.category_id = c.id LIMIT 10;

select s.id as 'S-ID', s.title as 'S-Title', s.category_id,
       c.id as 'C-ID',c.title as 'C-Title'
from categories c CROSS JOIN sub_categories s ON c.id = s.category_id LIMIT 10;

select s.id as 'S-ID', s.title as 'S-Title', s.category_id,
       c.id as 'C-ID',c.title as 'C-Title'
from categories c  OUTER JOIN sub_categories s ON c.id = s.category_id LIMIT 10;
