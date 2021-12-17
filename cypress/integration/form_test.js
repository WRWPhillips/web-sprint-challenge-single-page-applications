describe('Pizza form', () => {
    const orderButton = () => cy.get('a[id=order-pizza]')
    beforeEach(() => {
        cy.visit('http://localhost:3000')
        orderButton().click()
      })

    const nameInput = () => cy.get('input[name=name-input]')
    const sizeDropdown = () => cy.get('select[name=size-dropdown]')
    const pepperoni = () => cy.get('input[name=pepperoni')
    const anchovies = () => cy.get('input[name=anchovies')
    const fetaCheese = () => cy.get('input[name=fetaCheese')
    const blackOlives = () => cy.get('input[name=blackOlives')
    const butt = () => cy.get('button[id=order-button]')
    const special = () => cy.get('input[name=special-text]')

    it('test that you can add text to the boxes', () => {
        nameInput()
            .should('have.value', '')
            .type('Mr Pig')
            .should('have.value', 'Mr Pig')
        special()
            .should('have.value', '')
            .type('deliver it upside down')
            .should('have.value', 'deliver it upside down')
    })

    it('test that you can select multiple toppings', () => {
        pepperoni().check()
        anchovies().check()
        fetaCheese().check()
        blackOlives().check()
        pepperoni().should('have.checked', 'true')
        anchovies().should('have.checked', 'true')
        fetaCheese().should('have.checked', 'true')
        blackOlives().should('have.checked', 'true')
    })

    it('test that you can submit the form', () => {
        nameInput().type('Mr Pig')
        sizeDropdown().select('Small')
        pepperoni().click()
        special().type('blended :)')
        butt().click()
        cy.contains("Mr Pig's Order")
    })
})