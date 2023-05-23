describe('Test /GetAllProcessors endpoint', () => {

    it('Verify Response Status Code', () => {
      cy.request('GET', '/GetAllProcessors')
        .then((response) => {
          expect(response.status).to.equal(200);
        });
    });
  
    it('Verify Response Body', () => {
      cy.request('GET', '/GetAllProcessors')
        .then((response) => {
          expect(response.status).to.equal(200);
          expect(response.body).to.satisfy((body) => {
            return body.some((record) => {
              return (
                typeof record.processorID === 'number' &&
                typeof record.processorName === 'string'
              );
            });
          });
        });
    });
    
  
    it('Verify an Expected Response', () => {
      cy.request('GET', '/GetAllProcessors')
        .then((response) => {
          expect(response.status).to.equal(200);
          expect(response.body).to.deep.include({
            processorID: 2,
            processorName: 'Snapdragon 795',
          });
        });
    });
  
    it('Verify Response Body Not Empty', () => {
      cy.request('GET', '/GetAllProcessors')
        .then((response) => {
          expect(response.status).to.equal(200);
          expect(response.body).to.deep.equal([]);
        });
    });
  
    it('Check All Entries in Response', () => {
      cy.request('GET', '/GetAllProcessors')
        .then((response) => {
          expect(response.status).to.equal(200);
          expect(response.body).to.deep.include({ processorID: 1, processorName: 'Snapdragon 710' });
          expect(response.body).to.deep.include({ processorID: 2, processorName: 'Snapdragon 795' });
          expect(response.body).to.deep.include({ processorID: 3, processorName: 'Snapdragon 8520' });
          expect(response.body).to.deep.include({ processorID: 4, processorName: 'MediaTek Q1400' });
          expect(response.body).to.deep.include({ processorID: 5, processorName: 'MediaTek S1575' });
        });
    });    
  });
  