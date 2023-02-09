DROP DATABASE IF EXISTS employee_tracker;
CREATE DATABASE employee_tracker;

USE employee_tracker;

CREATE TABLE employee_tracker (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  employee_name VARCHAR(40) NOT NULL,
  department VARCHAR(30) NOT NULL,
  employee_role VARCHAR(30) NOT NULL
);
