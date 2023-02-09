const mysql = require('mysql')
const inquirer = require('inquirer')

const connection = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    port: 3306,
    database: employee_tracker
})

