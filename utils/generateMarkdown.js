
// TODO: Create a function to generate markdown for README
function generateMarkdown(readmeArr) {
  return `# ${readmeArr.title}

  //license

  ## Description
  ${readmeArr.description}

  ## Table of Contents
  * [Installation Instructions](#installation)
  * [Usage Information](#info)
  * [Contribution Guidelines](#guidelines)
  * [Test Instructions](#test)
  * [License](#license)
  * [Questions](#questions)
  
  ## Installation Instructions
  ${readmeArr.installation}

  ## Usage Information
  ${readmeArr.info}

  ## Contribution Guidelines
  ${readmeArr.guidelines}

  ## Test Instructions
  ${readmeArr.test}

  ## License
  ${readmeArr.license}

  ## Questions
  If you have any questions, 
  you can find me at https://github.com/${readmeArr.github}
  you can also reach me via email at ${readmeArr.email}
`;
}

module.exports = generateMarkdown;
