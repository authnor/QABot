# QABot

## Pre-requisites

1.	Cypress is installed in your machine. If not yet installed, please find the following instructions for Cypress installation
https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements

## Steps to deploy the automated UI test
1.	Install custom command cy-view to run tests on various viewport sizes

###Installation
$ npm i --save-dev cy-view

2.	Under the folder cypress/support/ copy the file navigatepage.js
3.	Copy the following values in cypress.json file within env section<br>
    "loginEmail": "robomail@yopmail.com",<br>
    "password": "123pass",  <br>
    "newName": "Maria",<br>
    "surname": "Marton",<br>
    "invalidPassword": "pass123",<br>
    "invalidName": "Maria123",<br>
    "oldName": "Lucy"<br>

Sample cypress.json would look like this (disregard the values inside db section and projectId)
{
  "env": {
    "db": {
      "userName": "dev",
      "password": "Pa55word",
      "server": "10.30.113.31",
      "options": {
        "database": "Test_PayVu",
        "encrypt": false,
        "rowCollectionOnRequestCompletion": true
      }
    },
    "loginEmail": "robomail@yopmail.com",
    "password": "123pass",  
    "newName": "Maria",
    "surname": "Marton",
    "invalidPassword": "pass123",
    "invalidName": "Maria123",
    "oldName": "Lucy"
  },
  "projectId": "e34p3x"

}

4.	Copy the test file QAScenario.js into cypress/integration/ folder
5.	To run the test, launch cypress:
     npx cypress open
6.	Click on the test case to run

7.	I have also integrated this to the Cypress dashboard. I’ve created a project which shows the test run on different browsers (chrome, firefox and edge) in headless mode. Videos are also recorded for each test. The project dashboard is viewable (public) with the link below:
https://dashboard.cypress.io/projects/e34p3x/runs/3/test-results?browsers=%5B%5D&groups=%5B%5D&isFlaky=%5B%5D&modificationDateRange=%7B%22startDate%22%3A%221970-01-01%22%2C%22endDate%22%3A%222038-01-19%22%7D&orderBy=EXECUTION_ORDER&oses=%5B%5D&specs=%5B%5D&statuses=%5B%5D
