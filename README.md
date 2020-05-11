# Advance linting setup (Automated way)

This project explains some advance setup of linting using husky and lint-staged.

![GIF](https://github.com/harshmons/eslint-prettier-vscode-react-advance-setup/blob/master/Integrated_With_ESLint%2CPrettier_And_Jest.gif)

Which means, now when we commit any code then below things will be run automatically -
- ESLint to test against all the defined rules under `.eslintrc` file
- Prettier to format the code as per the configuration defined in `.prettierrc` file
- Jest to rull all the related test cases
- Finally if any changes made by ESLint and Prettier and then file again gets staged 


Added `.editorconfig` file as well to maintain the code consistency across the different IDE's
![GIF](https://github.com/harshmons/eslint-prettier-vscode-react-advance-setup/blob/master/EditorConfig.gif)

For detailed description of the code please refer my blog https://medium.com/@harshverma04111989/automated-code-linting-and-testing-a3fb0416756c
