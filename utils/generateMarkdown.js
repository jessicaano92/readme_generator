

function renderLicenseBadge(userLicense) {
    return `![GitHub license](https://img.shields.io/badge/license-${userLicense}-blue.svg)`
  
}


//then template literal for all code 




// function to generate markdown for README
function generateMarkdown(data) {
  return `${renderLicenseBadge(data.userLicense)}
  # ${data.projectName}

  ## Description
    ${data.projectDescription}

  ## Table of Contents
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

  ## Installation
    ${data.installation}

  ## Usage
    ${data.usage}

  ## License
    This project is licensed under the
  ${data.userLicense} license.

  ## Contributing
    ${data.contribution}

  ## Tests
    ${data.testing}

  ## Questions
    Please contact ${data.email} for any questions

  
    


`;
}

module.exports = generateMarkdown;


