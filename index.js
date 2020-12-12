const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
const writeToFile = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "usernameGithub",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your project's name:",
    name: "projectName",
  },

  {
    type: "input",
    message: "Please write a short description of your project",
    name: "projectDescription",
  },

  {
    type: "list",
    message: "What kind of license should your project have?",
    name: "license",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    message: "What command should be run to install dependencies?",
    name: "dependencies",
  },

  {
    type: "input",
    message: "What command should you run to run tests?",
    name: "tests",
  },
  {
    type: "input",
    message: "What does the user need to know about using the repo?",
    name: "repoKnowledge",
  },
  {
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "contributors",
  },
];

//promptFunction declar
function promptUser() {
  return inquirer.prompt(questions);
}

// function to initialize program
function init() {
  promptUser()
    .then((data) => {
      const readME = generateMarkdown(data);
      return writeToFile("readMe.md", readME);
    })
    .then(() => console.log("readMe file generated succesful !"))
    .catch((err) => console.log(err));
}

// function call to initialize program
init();