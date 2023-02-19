USE employee_tracker;

INSERT INTO departments (id, department_name)
VALUES
    ( 001, "Finance"),
    ( 002, "HR"),
    ( 003, "Accounting"),
    ( 004, "Sales");

INSERT INTO roles (job_title, job_department, job_salary)
VALUES
    ( "finance lead", "Finance", 100000),
    ( "HR associate", "HR", 30000),
    ( "Head of Accounts", "Accounting", 110000),
    ( "Sales Manager", "Sales", 50000);

