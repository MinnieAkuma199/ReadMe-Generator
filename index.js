const inquirer = require("inquirer");
const fs = require("fs");
// const generateMarkdown = require("./utils/generateMarkdown");
function licenses(userChoice) {
  //if statement what are you checking for? wrap mit and isc in different if statements
  let mit = {
    name: "MIT License",
    badge:
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    link: "(https://opensource.org/licenses/MIT)",
    text: "Copyright (c) [2022] [Kristyn Del Campo-Banrevy]<br /> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:<br />The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.<br />THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.",
  };
  let isc = {
    name: "ISC License",
    badge:
      "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
    link: "(https://opensource.org/licenses/ISC)",
    text: "Copyright (c) [2022] [Kristyn Del Campo-Banrevy]<br />Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.THE SOFTWARE IS PROVIDED 'AS IS' AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.",
  };
  let mozilla = {
    name: "Mozilla Public License 2.0",
    badge:
      "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    link: "(https://opensource.org/licenses/MPL-2.0)",
    text: "Copyright (c) [2022] [Kristyn Del Campo-Banrevy]<br /> This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.",
  };
  let apache = {
    name: "Apache 2.0 License",
    badge:
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    link: "(https://opensource.org/licenses/Apache-2.0)",
    text: "Copyright [2022] [Kristyn Del Campo-Banrevy]<br />Licensed under the Apache License, Version 2.0 (the 'License'); you may not use this file except in compliance with the License.You may obtain a copy of the License at <br /> http://www.apache.org/licenses/LICENSE-2.0 <br /> Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.",
  };

  if (!`${userChoice}`) {
    return [];
  }
  if (`${userChoice}` === "MIT") {
    return mit;
  }
  if (`${userChoice}` === "ISC") {
    return isc;
  }
  if (`${userChoice}` === "Mozilla 2.0") {
    return mozilla;
  }
  if (`${userChoice}` === "Apache 2.0") {
    return apache;
  }
}

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
      choices: ["MIT", "ISC", "Mozilla 2.0", "Apache 2.0"],
    },
  ])
  .then((response) => {
    const output = licenses(response.license);
    const template = `# ${response.title}
${output.badge}
      
## Description
-${response.motivation}

-${response.learn}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [License](#license)
- [Tests](#tests)
- [Additional Questions](#additional-questions)

### Installation
${response.installation}


### Usage

![alt text](assets/${response.screenshot})

### Contributors

**${response.contributors}**


### Tests
${response.tests}

### Additional Questions

**${response.email}**

### License

${output.name}


${output.text}


`;
    fs.writeFile("README.md", template, (err) => {
      err ? console.error(err) : console.log("You did it!");
    });
  });
