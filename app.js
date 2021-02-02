const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = [];
const html = render(employees);

console.log("Welcome to Teambuilder");

const initialize = [
  {
    type: 'confirm',
    name: 'init',
    message: 'Please confirm that you are a Manager and that you are ready to build your team'
  },
]

const manager = [
  {
    type: 'input',
    name: 'name',
    message: 'Please enter your name ',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your email address',
  },
  {
    type: 'input',
    name: 'ID',
    message: 'Please enter your employee ID',
  },
  {
    type: 'input',
    name: 'officeNum',
    message: 'Please enter your office number',
  },
];

const empType = [{
  type: "list",
  choices: ["intern", "engineer", "no more employees"],
  name: "empType",
  message: "Please select if you would like to add an intern, engineer, or if you are done adding team members at this time",
},
]

const engineer = [{
  type: 'input',
  name: 'name',
  message: 'Name of engineer: ',
},
{
  type: 'input',
  name: 'email',
  message: 'Please enter the email of the engineer',
},
{
  type: 'input',
  name: 'ID',
  message: 'Please enter the ID of employee: ',
},
{
  type: 'input',
  name: 'github',
  message: 'Please enter the github user name of the engineer:',
},
];

const intern = [{

  type: 'input',
  name: 'name',
  message: 'Please enter the name of the Intern: ',
},
{
  type: 'input',
  name: 'ID',
  message: 'Please enter the ID of the Intern: ',
},
{
  type: 'input',
  name: 'email',
  message: 'Please enter the email address of the Intern',
},
{
  type: 'input',
  name: 'school',
  message: 'Please enter the school that the Intern attends ',
},
];

inquirer.prompt(initialize).then(response => {
  if (response.init === true) {
    initManager();
  } else {
    if (response.init === false)
      console.log("Please come back later")
  }
});

// Manager
const initManager = () => {
  inquirer.prompt(manager).then(response => {
    console.log(response);
    employees.push(new Manager(
      response.name, 
      response.id, 
      response.email, 
      response.officeNumber));
    addEmployee();
  });
};

// Engineer
const initEngineer = () => {
  inquirer.prompt(engineer).then(response => {
    console.log(response);
    employees.push(new Engineer(
      response.name, 
      response.id, 
      response.email, 
      response.github));
    addEmployee();
  });
};

// Intern
const initIntern = () => {
  inquirer.prompt(intern).then(response => {
    console.log(response);
    employees.push(new Intern(response.name, response.id, response.email, response.school));
    addEmployee();
  });
};

// write file - it only writes file to terminal but does not output in a new file 
const writeToFile = () => {
  console.log(html)
  fs.writeFile(outputPath, html, function(err) {
     if(err) { 
       console.log(err); 
     }
     else {
       console.log("New team had been created. Success!");
     }
   })
};


// Add employee loop
const addEmployee = () => {
  inquirer.prompt(empType).then(response => {
    switch (response.empType) {
      case "engineer":
        initEngineer();
        break;
      case "intern":
        initIntern();
        break;
      case "no more employees":
        writeToFile();
        console.log("Your Team has been built")
        break;
      default:
        return;
    }
  });
};

