function render

//make 3 render functions- link, badge, 
//then template literal for all code 




// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  // ## Title


  //                     this is where different functions will be written for
  //                     each markdown description, licensing, etc. 


  // ## Description



  // ##Licensing



  // ##Installation


  // ##Usage


  // ##Contribution



  // ##Testing



  
`;
}

module.exports = generateMarkdown;
