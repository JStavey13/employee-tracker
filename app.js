const mysql = require('mysql')
const inquirer = require('inquirer')
const express = require('express')


const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    port: 3306,
    database: 'employee_tracker'
})

db.query('SELECT * FROM roles', function (err, roles) {
    console.table(roles);
    if (err) throw err
  });

  