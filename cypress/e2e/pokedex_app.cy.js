describe('Pokedex', function () {
  it('front page can be opened', function () {
    // eslint-disable-next-line no-undef
    cy.visit('http://localhost:5000')
    // eslint-disable-next-line no-undef
    cy.contains('ivysaur')
    // eslint-disable-next-line no-undef
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('can navigate from the main page to the page of a particular Pokemon',function(){
    // eslint-disable-next-line no-undef
    cy.visit('http://localhost:5000')
    // eslint-disable-next-line no-undef
    cy.contains('ivysaur').click()
    // eslint-disable-next-line no-undef
    cy.contains('chlorophyll')
  })
})