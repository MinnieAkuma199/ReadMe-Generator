const inquirer = require("inquirer");
const fs = require("fs");
// const generateMarkdown = require("./utils/generateMarkdown");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is this project's title?",
      name: "title",
    },
    {
      type: "input",
      message:
        "Motivation for building this project, what problem did it solve?",
      name: "motivation",
    },
    {
      type: "input",
      message: "What did you learn?",
      name: "learn",
    },
    {
      type: "input",
      message: "What are the steps required to install your project?",
      name: "installation",
    },
    {
      type: "input",
      message: "Enter screenshot/gif/video name(screenshot.png)",
      name: "screenshot",
    },
    {
      type: "input",
      message: "Contributing Links to GitHub contributors",
      name: "contributors",
    },
    {
      type: "input",
      message: "Include any tests conducted here",
      name: "tests",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
    {
      type: "checkbox",
      name: "license",
      message: "What licenses are you using?",
      choices: ["MIT", "ISC", "Mozilla"],
    },
  ])
  .then((response) => {
    const template = `# ${response.title}
      
## Description
-${response.motivation}

-${response.learn}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [License](#license)
- [Tests](#tests)
- [Additional Questions](#additional-questions-)

### Installation
${response.installation}


### Usage

    ![alt text](assets/images/${response.screenshot})

### Contributors

**${response.contributors}**

### License



### Tests
${response.tests}

### Additional Questions

**${response.email}**
`;

    fs.writeFile("README.md", template, (err) => {
      err ? console.error(err) : console.log("You did it!");
    });
  });
