
// TODO: Create a function to generate markdown for README
function generateMarkdown(readmeArr) {
  return `# ${readmeArr.title}

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

  ## Usage Information

  ## Contribution Guidelines

  ## Test Instructions

  ## License

  ## Questions
`;
}

module.exports = generateMarkdown;
