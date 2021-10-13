// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data === "Apache License 2.0") {
    badge = "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)"
  }
  else if (data === "MIT License") {
    badge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
  }
  else if (data === "Boost Software License 1.0") {
    badge = "![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)"
  }
  else if (data === "Mozilla Public License 2.0") {
    badge = "![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)"
  }
  else {badge = ''}

  return badge;

};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
    if (data === "Apache License 2.0") {
      licenseLink = "https://opensource.org/licenses/Apache-2.0"
    }
    else if (data === "MIT License") {
      licenseLink = "https://opensource.org/licenses/MIT"
    }
    else if (data === "Boost Software License 1.0") {
      licenseLink = "https://www.boost.org/LICENSE_1_0.txt"
    }
    else if (data === "Mozilla Public License 2.0") {
      licenseLink = "https://opensource.org/licenses/MPL-2.0"
    }
    else {licenseLink = ''}

    return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  const badge = renderLicenseBadge(data);
  const licenseLink = renderLicenseLink(data);
  if (badge === '') {
      return `No License`
    } else
        return `
        ${data}: ${licenseLink}
    
        ## Badges
        ${badge}
        `
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  const licenseSection = renderLicenseSection(data.license);
  

  return `# ${data.title}

  ## Description
  ${data.description}


  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)


  ## Installation
  ${data.installation}


  ## Usage
  ${data.usage}


  ## Contributions
  ${data.contribution}


  ## Tests
  ${data.test}


  ## License
  ${licenseSection}

  ## Questions
  Github profile: ${data.github}

  Email me with any questions about my project: ${data.email}
`
;
}

module.exports = generateMarkdown;
