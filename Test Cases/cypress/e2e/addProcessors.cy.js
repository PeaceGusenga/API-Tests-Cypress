describe('Test /AddProcessors endpoint', () => {
  
 
  it('Add a new processor', () => {
    const payload1 = {
      processorID: '1',
      processorName: 'Test Processor',
    };

    cy.request({
      method: 'POST',
      url: 'https://localhost:5002/AddProcessor',
      body: payload1,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it('Handle invalid processor', () => {
    const payload1 = {
      processorID: '8',
      processorName: 'Invalid Processor ',
    };

    cy.request({
      method: 'POST',
      url: 'https://localhost:5002/AddProcessor',
      headers: {
        'Content-Type': 'application/json'
      },
      body: payload1,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.equal(400);
      expect(response.body).to.equal('Processor Information is not valid.');
    });
  });

  it('API Bug Found!', () => {
    const payload1 = {
      processorID: '-100',
      processorName: ' ',
    };

    cy.request({
      method: 'POST',
      url: 'https://localhost:5002/AddProcessor',
      body: payload1,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
});
