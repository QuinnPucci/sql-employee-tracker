const inquirer = require("inquirer");
const db = require("./db/connection");
const table = require("console.table");

db.connect((err) => {
  if (err) throw err;
  console.log("connected");
  mainQuestion();
});

function mainQuestion() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "main",
        message: "What would you like to do?",
        choices: [
          "View All",
          "Add Employee",
          "View Employees",
          "Add Department",
          "View Departments",
          "Add Role",
          "View Roles",
          "Update Employees Role",
          "Done",
        ],
      },
    ])
    .then((answer) => {
      if (answer.main === "View All") {
        viewAll();
      } else if (answer.main === "Add Employee") {
        addEmployee();
      } else if (answer.main === "View Employees") {
        viewEmployees();
      } else if (answer.main === "Add Department") {
        addDepartment();
      } else if (answer.main === "View Departments") {
        viewDepartments();
      } else if (answer.main === "Add Role") {
        addRole();
      } else if (answer.main === "View Roles") {
        viewRoles();
      } else if (answer.main === "Update Employees Role") {
        update();
      } else {
        db.end();
      }
    });
}