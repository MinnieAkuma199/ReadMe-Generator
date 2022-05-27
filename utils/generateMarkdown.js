let MIT = {
  name: "MIT License",
  badge:
    "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  link: "(https://opensource.org/licenses/MIT)",
  text: "Copyright (c) [2022] [Kristyn Del Campo-Banrevy]",
};
function renderLicenseBadge(license) {
  return console.log(license.MIT.badge);
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseSection(data.license)}
`;
}

renderLicenseBadge();
//exporting to use in index.js
module.exports = generateMarkdown;
