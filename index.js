// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');



// TODO: Create an array of questions for user input
const questions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of the project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a short description about the project.'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the required installation instructions for the project?'
        },
        {
            type: 'input',
            name: 'info',
            message: 'Please provide the information needed to know about the repository.'
        },
        {
            type: 'input',
            name: 'guidelines',
            message: 'What does the user need to know about contributing to the repository?'
        },
        {
            type: 'input',
            name: 'test',
            message: 'What is the command in order to run the test?'
        },
        {
            type: 'list',
            name: 'license',
            message: 'What kind of license is used in the project?',
            choices: ['MIT', 'GNU', 'Apache', 'None']
        },
        {
            type: 'input',
            name: 'Github Username',
            message: 'What is your Github Username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your Email address?'
        }
    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
