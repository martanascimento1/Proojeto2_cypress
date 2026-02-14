const API_URL = Cypress.env('API_BASE_URL')
const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`

it('retrieves my user information', () => {
  cy.request({
    method: 'GET',
    url: `${API_URL}me`,
    headers: {authorization}
  }).should (({status, body}) => {
    const { alias, email, language } = body

    expect(status).to.eq(200)
    expect(alias).to.eq('Marta')
    expect(email).to.eq('cypress@example.com') 
    expect(language).to.eq('en')
  })
})