// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user input
const questions = [
    {
        type:'input',
        message:'What is the title of your project?',
        name:'title'
    },
    {
        type:'input',
        message:'Provide a short description explaining the what, why, and how of your project.',
        name:'description',
    },
    {
        type:'input',
        message:'What are the steps required to install your project?',
        name:'installation',
    },
    {
        type:'input',
        message:'Provide instructions and examples for use.',
        name:'usage',
    },
    {
        type:'list',
        message:'Which license would you like to use?',
        name:'license',
        choices:['Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'Mozilla Public License 2.0', 'No License']
    },
    {
        type:'input',
        message:'What are the contribution guidelines for your project?',
        name:'contribution',
    },
    {
        type:'input',
        message:'Provide instructions on how to run tests',
        name:'test',
    },
    {
        type:'input',
        message:'What is your GitHub URL?',
        name:'github',
    },
    {
        type:'input',
        message:'What is your email address?',
        name:'email',
    },
];

// Function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(responses => {
            const finalReadMe = generateMarkdown(responses)
            fs.writeFile("testREADME.md", finalReadMe, err => {
                err ? console.log("Error found, try again") : ("Success!")
                })
        })
       
}

// Function call to initialize app
init();
