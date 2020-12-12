// function to generate markdown for README
function generateMarkdown(data) {
 
  let licenseBadge;

  switch (data.license) {
    case "MIT":
      licenseBadge =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "APACHE 2.0":
      licenseBadge =
        "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "GPL 3.0":
      licenseBadge =
        "[![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)](http://perso.crans.org/besson/LICENSE.html)]";
      break;
    case "BSD 3":
      licenseBadge =
        "[![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)](http://perso.crans.org/besson/LICENSE.html)";
      break;
    case "None":
      licenseBadge = console.log("None");
      break;
  }

  return `# ${data.projectName}
  ${licenseBadge}
  ## Table of contents 
  # [Programmer] (#programmer)
  # [Project Description] (#project description)
  # [License] (#license)
  # [Installation - dependency] (#installation)
  # [Tests] (#tests)
  # [Repository Information] (#repository information)
  # [Contributors] (#contributors)
  ## programmer
  ${data.usernameGithub}
  ${data.email}
  
  ## Project Description
  ${data.projectDescription}
  ## License
  ${data.license}
  ## Installation - dependency
  ${data.dependencies}
  ## Tests
  ${data.tests}
  ## Repository Information 
  ${data.repoKnowledge}
  ## Contributors 
  ${data.contributors}
  ## Questions
  
  If you have any questions about the repo, please contact me directly at ${data.email}.
  You can find more of my work at [${data.usernameGithub}](https://github.com/${data.usernameGithub}).
  `;
}

module.exports = generateMarkdown;