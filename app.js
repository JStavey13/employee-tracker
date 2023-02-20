const mysql = require('mysql')
const inquirer = require('inquirer')
const express = require('express')


const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    port: 3306,
    database: 'employee_tracker'
},
console.log(`Connected to the employee_tracker database`))

db.query('SELECT * FROM roles', function (err, roles) {
    console.table(roles);
    if (err) throw err
  });

  