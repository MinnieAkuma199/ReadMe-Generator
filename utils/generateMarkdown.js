function licenses() {
  let mit = {
    name: "MIT License",
    badge:
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    link: "(https://opensource.org/licenses/MIT)",
    text: "Copyright (c) [2022] [Kristyn Del Campo-Banrevy]",
  };
  let isc = {
    name: "ISC License",
    badge:
      "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
    link: "(https://opensource.org/licenses/ISC)",
    text: "Copyright (c) [2022] [Kristyn Del Campo-Banrevy]",
  };
  return data;
  console.log(licenses(data));
}

function renderLicenseBadge(license) {
  // return `# ${licenses(license.mit.badge)}`;
  // if (!`${response.}`)
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   return console.log(license.mit.link);
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `# ${license.mit.text}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseSection(data.license)}
${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}
`;
}

renderLicenseBadge();
//exporting to use in index.js
module.exports = {
  generateMarkdown,
  licenses,
};
