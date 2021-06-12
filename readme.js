//const creates constant reference to js element.
const fs = require ("fs");
const inquirer = require("inquirer");

const promptUser = () => {
    return inquirer.prompt([
      {
          //Type: input will allow text; name acts as the key to the actual input value; the message is what comes up as the actual prompt for users
        type: 'input',
        name: 'title',
        message: 'What is your README title? (Required)',
        //validate is a Boolean
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('Please enter your title!');
          return false;
        }
      }
    },
    
    { type: 'input',
    name: 'description',
    message: 'What is your README description?',
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('Please enter a description!');
        return false;
      }
    }
  },

 {
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project?',  
    validate: installationInput => {
      if (installationInput) {
        return true;
      } else {
        console.log('Please enter installation instructions!');
        return false;
      }
    }
  },
 {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions for using your application',  
    validate: usageInput => {
      if (usageInput) {
        return true;
      } else {
        console.log('Please enter instructions for using your product!');
        return false;
      }
    }
  },
 {
    type: 'input',
    name: 'screenshot',
    message: 'Provide a path to the image',  
  },

{//Type: checkbox allows users to check true or false of the choices array
  type: 'checkbox',
  name: 'license',
  message: 'What did license(s) do you want to add? (Check all that apply)',
  choices: ['MIT', 'Apache', 'Apache 2', 'GPL', 'BSD', 'compliant']
},

{
  type: 'input',
  name: 'features',
  message: 'List your product features',  
  validate: featuresInput => {
    if (featuresInput) {
      return true;
    } else {
      console.log('Please enter a description!');
      return false;
    }
  }
},
{
  type: 'input',
  name: 'contributing',
  message: 'List any contributors including yourself',  
  validate: contributingInput => {
    if (contributingInput) {
      return true;
    } else {
      console.log('Please enter at least one contributor!');
      return false;
    }
  }
},
{
  type: 'input',
  name: 'tests',
  message: 'Provide a test for your product and instructions on how to run it!',  
  validate: testsInput => {
    if (testsInput) {
      return true;
    } else {
      console.log('Please enter a test!');
      return false;
    }
  }
},
{
  type: 'input',
  name: 'questions',
  message: 'Provide instructions for users with further questions/ instructions on reaching you',  
  validate: featuresInput => {
    if (featuresInput) {
      return true;
    } else {
      console.log('Provide a way for users to reach you for questions!');
      return false;
    }
  }
},

{
  type: 'input',
  name: 'github',
  message: 'What is your github username? For users to reach you',
  validate: githubInput => {
    if (githubInput) {
      return true;
    } else {
      console.log('Provide your github name!');
      return false;
    }
  }
},

{
  type: 'input',
  name: 'email',
  message: 'What is your email addres? For users to reach you',
  validate: emailInput => {
    if (emailInput) {
      return true;
    } else {
      console.log('Provide your email!');
      return false;
    }
  }
},



]).then (answers => { 
  var licenseMD = ""
  if (answers.license = 'MIT') {
    licenseMD = "https://img.shields.io/badge/license-MIT-green"
    
  }
  var data = `# ${answers.title}

## Description 
${answers.description}


## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Features](#features)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
  

## Installation
${answers.installation}

## Usage 
${answers.usage}
![screenshot](${answers.screenshot})

## License
![${answers.license}](${licenseMD})

## Features
${answers.features}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
Github: ${answers.github}
Email: ${answers.email}
${answers.questions}`
        fs.writeFile('README.md', data, 'utf8', function (err, data){
            if(err){
                console.error(err);
                return;
            }
            console.log(data);
        });
    }) 

}
promptUser()