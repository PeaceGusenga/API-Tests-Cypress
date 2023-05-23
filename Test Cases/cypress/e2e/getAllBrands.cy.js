describe('Test /GetAllBrands endpoint', () => {
     
    it('Verify the Status Code', () => {
      cy.request('GET', 'https://localhost:5002/GetAllBrands')
        .then((response) => {
          expect(response.status).to.equal(200);
        });
    });
  
    it('Verify The Response Body', () => {
      cy.request('GET', 'https://localhost:5002/GetAllBrands')
      .then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.satisfy((body) => {
          return body.some((record) => {
            return (
              typeof record.BrandID === 'number' &&
              typeof record.BrandName === 'string' &&
              typeof record.BrandNetWorth === 'string'
            );
        });
    });
  });    

    it('Empty response body', () => {
      cy.request('GET', 'https://localhost:5002/GetAllBrands')
        .then((response) => {
          expect(response.status).to.equal(200);
          expect(response.body).to.deep.equal([]);
        });
    });
  });
});