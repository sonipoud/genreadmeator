
// TODO: Create a function to generate markdown for README
function renderLicenseBadge(readmeArr){
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
  * [Installation Instructions](#installation-instructions)
  * [Usage Information](#usage-information)
  * [Contribution Guidelines](#contribution-guidelines)
  * [Test Instructions](#test-instructions)
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

  Please see the video link for the README generator: [Link]()
`;
}

module.exports = generateMarkdown;
