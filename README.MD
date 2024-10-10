## E-Commerce Website Test Suite

This test suite is designed to automate the testing of an e-commerce website's purchase process.

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Project Structure](#structure)
- [Usage](#usage)

## Overview

This test suite is designed to automate the testing of an e-commerce website's purchase process using [Cypress](https://www.cypress.io/), a modern end-to-end testing framework. Cypress provides an easy-to-use interface for writing and running tests in JavaScript, making it suitable for automating web applications.


## Installation:

```npm install cypress --save-dev```


## Project Structure <a name="structure"></a>
The project is organized as follows

``` 
cypress/
e2e/                   Contains test files
features/              Feature files (if using Cypress Cucumber)
support/               Support files for tests
 commands.js           Custom Cypress commands
 e2e.js                Default support file 
scenario.cy.js         Test suite for purchase operations
pages/                 Page objects
 cart-page.js           Cart page object
 contact-page.js        Contact page object
 home-page.js           Home page object
 shopping-page.js       Shopping page object
.gitlab-ci.yml         Sample Gitlab CI config file
cypress.config.js      Cypress configuration file
README.md              This file
```

## Usage
To run the tests, follow these steps

- Open Cypress 
```npx cypress open```
- Running Tests
Select the test suite you want to run ```e2e/scenario.cy.js```
Cypress will open and execute the selected test suite in a browser window.
After the tests are finished, you can view the results in the Cypress interface or the recorded video in the videos folder.