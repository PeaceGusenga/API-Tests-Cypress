import { EndpointLocators } from "../../../Test Data/endpooints";
import { Payloads } from "../../../Test Data/payload";

var endpoint = new EndpointLocators()
var payload = new Payloads()

describe('Test /GetAllSmartphones endpoint', () => {
  
    it('Call Endpoint & Verify Status 200', () => {
      cy.request('GET', endpoint.getAllSmartphonesEndpoint)
        .then((response) => {
          expect(response.status).to.equal(200);
        });
    });

    it('Verify Object Structure for Multiple Results', () => {
      cy.request('GET', endpoint.getAllProcessorsEndpoint)
        .then((response) => {
          expect(response.status).to.equal(200);
          
          response.body.forEach((result) => {
            expect(result).to.have.all.keys(payload.validProcessKeys);
          });
        });
    });
    
    it('Verify That Reponse Contains Specifc Entry', () => {
      cy.request('GET', endpoint.getAllSmartphonesEndpoint)
        .then((response) => {
          expect(response.status).to.equal(200);
          expect(response.body).to.deep.include.members([
          payload.randomSmartphone,
          ]);
        });
    });
  });
  