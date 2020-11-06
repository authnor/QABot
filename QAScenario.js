

import cyView from "cy-view";
import { onNavigate } from "../../support/pageObject/navigatepage";

const devices = [
	{
		model: "macbook-15",
		width: 1100,
		height: 1400
	},
	{
		model: "ipad-2",
		width: 768,
		height: 1024
	},
	{
		model: "iphone-6+",
		width: 414,
		height: 736
	}
];

// Base URL
const urls = [
	"http://automationpractice.com/index.php"
];

//mapping of values - environment variables
const email = Cypress.env('loginEmail'),
      passwd = Cypress.env('password'),
      nwname = Cypress.env('newName'),
      sname  = Cypress.env('surname'),
      invalidpasswd = Cypress.env('invalidPassword'),
      invalidname = Cypress.env('invalidName'),
      oldname = Cypress.env('oldName')

// Pass cy-view an array of devices structured like the devices constant above
const ViewTest = cyView(devices);


ViewTest(urls, () => {
    describe('Update personal info', function () {
        it('Login and update personal information from website', function () {
            
             cy.get('.login').click()
             
             //verify that correct landing page is shown -> Authentication page
             cy.get('.page-heading').should('contain.text','Authentication')    
             
             //enter email address and password
             cy.get('#email').type(email)
             cy.get('#passwd').type(passwd)
             
             //click submit
             cy.get('#SubmitLogin > span').click()
    
             //verify that correct page is shown -> My Account page
             cy.get('.page-heading').should('contain.text','My account')    
    
            //click on icon to navigate to Personal Information page
             cy.get('.icon-user').click()
    
            //negative test 1 - verify first name validation by specifying an invalid value
            onNavigate.UpdateInfo(invalidname,passwd)
            cy.get('ol > li').should('contain.text','firstname is invalid')
    
            //negative test 2 - verify password validation by specifying an incorrect password
            onNavigate.UpdateInfo(nwname,invalidpasswd)
            cy.get('.alert').should('contain.text','The password you entered is incorrect')
    
             //provide the user's correct password and save changes
             onNavigate.UpdateInfo(nwname,passwd)
    
             //verify that name is successfully changed
             cy.get('.alert').should('contain.text','Your personal information has been successfully updated.')
             cy.get('.account > span').should('contain.text', nwname+' '+sname)
    
             //update again the user's first name to previous value to reset data for next test run
             cy.get('.footer_links > :nth-child(1) > .btn > span').click()
             cy.get('.icon-user').click()
             onNavigate.UpdateInfo(oldname,passwd)
             cy.get('.alert').should('contain.text','Your personal information has been successfully updated.')
             cy.get('.account > span').should('contain.text',oldname+' '+sname)
             
             //log out
             cy.get('.logout').click()
    
             //assert: verify that log out is successful
             cy.get('.page-heading').should('contain.text','Authentication') 
           
        })
    
    })
}
    )
