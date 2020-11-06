
describe('Add wishlist', function () {
    it('Login to account and add wishlist', function ()  {
    

        cy.request({
            method: 'POST',
            url: 'http://automationpractice.com/index.php?controller=authentication',
            Headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
            form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
            body: {
              email: 'robomail@yopmail.com',
              passwd: '123pass',
              back: 'my-account',
              SubmitLogin: ''
            }
          })
          .its('body').then(body => {
            const token = body.token

            cy.request({
              url: 'http://automationpractice.com/index.php?fc=module&module=blockwishlist&controller=mywishlist',
              Headers: { 'Authorization': token, 'Content-Type':'application/x-www-form-urlencoded'},
              method: 'POST',
              body: {
                name: 'wishlisttestnow',
                submitWishlist: ''
              }

            })


       })
       
    })

})
