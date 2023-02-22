const mysql = require('mysql2')
const inquirer = require('inquirer')



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


    inquirer.prompt([
      {
      type: "list",
      name: "choices",
      message: "Make a selection",
      choices: [
        "view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role", "cancel"
      ],
    }
  ])

    .then((selected) => {
      console.log(selected)
       switch (selected.choices) {
        case "view all departments":
            viewDepartments()
            break;
        case "view all roles": 
            viewRoles()
            break;
        case "view all employees": 
            viewEmployees()
            break;
        case "add a department": 
            addDepartment()
            break;
        case "add a role": 
            addRole()
            break;
        case "add an employee": 
            addEmployee()
            break
      //   case "update an employee role": updateRole() 
       }
    })
   }

  const viewDepartments = () => {
    db.query('SELECT * FROM departments', function (err, results) {
      if(err) throw err;
      console.table(results);
      
      questions()
  })
  }

  const viewRoles = () => {
    db.query('SELECT * FROM roles', function (err, results) {
      if(err) throw err;
      console.table(results);
      
      questions()
  })
  }

  const viewEmployees = () => {
    db.query('SELECT * FROM employees', function (err, results) {
      console.table(results);
      
      questions()
  })
  }

const addDepartment = () => {

  inquirer
  .prompt([
    {
      type: 'input',
      message: 'What department would you like to add?',
      name: 'departmentName',
    },

  ])
  .then((answers) => {
  db.query('INSERT INTO departments(department_name) VALUES(?)',
  answers.departmentName, function (err, results) {
    console.table(results);
    
    questions()
  })  
});
}


const addRole = () => {
  inquirer.prompt([
    {
      type: "input",
      name: "job_title",
      message: "What is the title of the job?"
    },
    {
      type: "input",
      name: "job_department",
      message: "What is the department?"
    },
    {
      type: "input",
      name: "job_salary",
      message: "What is the salary?"
    }
  ]).then(answers=>{
    db.query(`INSERT INTO ROLES (job_title, job_department, job_salary) VALUES (?,?,?)`, [answers.job_title, answers.job_department, answers.job_salary] ,function (err, results) {
      if (err) throw err;
      
      console.table(results);
      questions()
    });
  });
}


const addEmployee = () => {
  inquirer.prompt([
    {
      type: "input",
      name: "first_name",
      message: "First Name:"
    },
    {
      type: "input",
      name: "last_name",
      message: "Last Name:"
    },
    {
      type: "input",
      name: "role_id",
      message: "role_id:"
    },
    {
      type: "input",
      name: "manager_id",
      message: "Manager ID:"
    },

  ]).then(answers=>{
    db.query(`INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`, [answers.first_name, answers.last_name, answers.role_id, answers.manager_id] ,function (err, results) {
      if (err) throw err;
      
      console.table(results);
      questions()
    });
  });
}





// const updateRole = () => {
//   db.query('SELECT * FROM departments', function (err, results) {
//     console.log(results);
// })
// }




  questions()