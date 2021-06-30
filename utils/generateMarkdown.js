
// TODO: Create a function to generate markdown for README
function renderLicenseBadge(readmeArr){
  console.log(readmeArr.license);
  if (readmeArr.license === 'MIT'){
    return `![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)`
  }
};

function generateMarkdown(readmeArr) {
  return `# ${readmeArr.title}

  ${renderLicenseBadge(readmeArr)}

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
  For further license information: [Click Here](https://choosealicense.com/licenses/mit/)

  ## Questions
  If you have any questions, 
  you can find me at https://github.com/${readmeArr.github}
  you can also reach me via email at ${readmeArr.email}
`;
}

module.exports = generateMarkdown;
