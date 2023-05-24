import { EndpointLocators } from "../../../Test Data/endpooints";

var endpoint = new EndpointLocators()

describe('Test /GetAllBrands endpoint', () => {
     
    it('Call Endpoint & Verify Status 200', () => {
      cy.request('GET', endpoint.getallBrandsEndpoint)
        .then((response) => {
          expect(response.status).to.equal(200);
        });
    });
  
    it('Verify Correct Response Body Structure', () => {
      cy.request('GET', endpoint.getallBrandsEndpoint)
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

    it('Check Whether Response Body Is Empty', () => {
      cy.request('GET', endpoint.getallBrandsEndpoint)
        .then((response) => {
          expect(response.status).to.equal(200);
          expect(response.body).to.deep.equal([]);
        });
    });
  });
});