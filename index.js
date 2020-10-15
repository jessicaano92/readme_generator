const fs = require("fs"); 
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")





// array of questions for user
const questions = [
    {         //user name
        type: "input",
        message: "What is your name?",
        name: "name"
    },
    {         //user email
        type: "input",
        message: "What is your email?",
        name: "email"
    },
    {         //user Github username
        type: "input",
        message: "What is your Github username?",
        name: "username"
    },
    {       //project name
        type: "input",
        message: "What is your project name?",
        name: "projectName"                                       
      },
      {
        //project description
        type: "input",
        message: "What is your project description?",
        name: "projectDescription"
      },
      {
          //licensing
        type: "checkbox",
        message: "Choose license for project",
        name: "license",
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
      },
      {         //installation
          type: "input",
          message: "What installation will you use?",
          name: "installation"

      },
      {     //usage
          type: "input",
          message: "What are you using it for?",
          name: "usage"
      },
      {     //contribution
          type: "input",
          message: "What will you be contributing?",
          name: "contribution"
      },
      {     //testing
          type: "input",
          message: "What will you be testing?",
          name: "testing"
      },
     

];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// function to initialize program
function init() {
    //where we're triggering inquirer.prompt.
    //going to feed it and give it the questions array
    //.then will tell it to console.log the readme to say its working
    //then writeToFile and feed it 
    inquirer.prompt(questions).then((response) => {
        console.log("writing file");
        writeToFile("practiceReadme.md", generateMarkdown({...response}))
    })
}

// function call to initialize program
init();
