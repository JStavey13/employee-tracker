// const mysql = require('mysql2')
const inquirer = require('inquirer')



// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'rootroot',
//     port: 3306,
//     database: 'employee_tracker'
// },
// console.log(`Connected to the employee_tracker database`)
// )





const questions = () => {
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    },
    {
      type: 'password',
      message: 'What is your password?',
      name: 'password',
    },
    {
      type: 'password',
      message: 'Re-enter password to confirm:',
      name: 'confirm',
    },
  ])
  .then((response) =>
  //   response.confirm === response.password
        console.log('Success!')
  //     : console.log('You forgot your password already?!')
   );
}

questions()