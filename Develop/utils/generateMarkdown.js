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
  if (badge === '') {
    return ``
  } else return `
  - [License](#license)
  `

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  console.log(data)
  if (badge === '') {
      return ``
    } else return `
## License
${data}
        `
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  const badge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
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
