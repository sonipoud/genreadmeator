// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const readmeArr = [];



// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
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
            name: 'github',
            message: 'What is your Github Username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your Email address?'
        }
    ]).then(readmeArr => writeToFile('./README.md', generateMarkdown(readmeArr)));

    function writeToFile(fileName, data) {
        fs.writeFileSync(fileName, data, function(err) {
            if (err) throw err;
            console.log('README file is generated');
        })
    }
};

// Function call to initialize app
questions();
