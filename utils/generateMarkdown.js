

function renderLicenseBadge(userLicense) {
  if (userLicense !== "none"){
    return `![GitHub license](https://img.shields.io/badge/license-${userLicense}-blue.svg)`
  } return "";
}


function renderLicenseSection (userLicense) {
  if (userLicense !== "none") {
    return (`## License
    This project is licensed under the ${userLicense} license`)
  }
}

function renderLicenseLink (userLicense) {
  if (userLicense !== "none") {
    return ( `\n * [userLicense](#license) \n`)
  } return "";
}




// function to generate markdown for README
function generateMarkdown(data) {
  return `${renderLicenseBadge(data.userLicense)}
  # ${data.projectName}

  ## Description
    ${data.projectDescription}

  ## Table of Contents
* [Installation](#installation)  
* [Usage](#usage)
    ${renderLicenseLink(data.userLicense)}
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


