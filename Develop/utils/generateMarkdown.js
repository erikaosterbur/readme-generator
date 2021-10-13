// Function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(data) {
  switch (data) {
    case data = "Apache License 2.0":
      badge = "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
      break;
    case data = "MIT License":
      badge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
      break;
    case data = "Boost Software License 1.0":
      badge = "![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)";
      break;
    case data = "Mozilla Public License 2.0":
      badge = "![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)";
      break;
    case data = "No License":
      badge = '';
  }
  return badge;
};

// Function that returns the license link
// If there is no license, returns an empty string
function renderLicenseLink(badge) {
  licenseLink = (badge === '') ? `` : `
  - [License](#license)
  `
  return licenseLink;
}

// Function that returns the license section of README
// If there is no license, returns an empty string
function renderLicenseSection(data) {
  licenseSection = (badge === '') ? `` : `
  ## License
  ${data}
  `
  return licenseSection
}


// Function to generate markdown for README
function generateMarkdown(data) {

  const badge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(badge);
  const licenseSection = renderLicenseSection(data.license);
  
  return `# ${data.title}

  ${badge}

  ## Description
  ${data.description}


  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#contributions)
  - [Tests](#tests)
  ${licenseLink}
  - [Questions](#questions)


  ## Installation
  ${data.installation}


  ## Usage
  ${data.usage}


  ## Contributions
  ${data.contribution}


  ## Tests
  ${data.test}


  ${licenseSection}

  ## Questions
  Github profile: ${data.github}

  Email me with any questions about my project: ${data.email}
`
;
}

module.exports = generateMarkdown;
