function renderLicenseLink(license) {
  if (license !== "none") {
    return ( `n*[License] (#license)`)
  } return "";
} 

function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg`
  } return "";
}



function renderLicenseSection(license) {

}
//then template literal for all code 




// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  // ## Title


  //                     this is where different functions will be written for
  //                     each markdown description, licensing, etc. 


  // ## Table of Contents




  // ##Licensing



  // ##Installation


  // ##Usage


  // ##Contribution



  // ##Testing



  
`;
}

module.exports = generateMarkdown;
