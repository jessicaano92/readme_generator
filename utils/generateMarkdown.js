
//pseudocode for homework

//1. Ask all the questions- repo, etc.
//2. Start generating the README file
      //what item of the readme file am i writing (subheading, link)
      //call that function and pass in the data it needs, will get back markdown code
      //add markdown code to the README file



// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Title





  ## Description



  ##Licensing



  ##Installation


  ##Usage


  ##Contribution



  ##Testing



  
`;
}

module.exports = generateMarkdown;
