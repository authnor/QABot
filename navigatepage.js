

export class Navigate{

    UpdateInfo(name,password){

        cy.get('#firstname').clear().type(name)
        cy.get('#old_passwd').type(password)
        cy.get(':nth-child(11) > .btn > span').click()

    }

}

export const onNavigate = new Navigate()