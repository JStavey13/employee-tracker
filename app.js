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
console.log(`Connected to the employee_tracker database`)
)

// db.query(`SELECT * FROM ?? WHERE ?? > ?`, [`roles`, `id`, 1],
// (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     console.table(result);
// });

  const questions = () => {
    inquirer.prompt({
      type: "list",
      name: "choices",
      message: "Make a selection",
      choices: [
        "view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role", "cancel"
      ],
    })
  }