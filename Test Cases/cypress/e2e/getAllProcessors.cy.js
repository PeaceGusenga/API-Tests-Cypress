import { EndpointLocators } from "../../../Test Data/endpooints";
import { Payloads
 } from "../../../Test Data/payload";
var endpoint = new EndpointLocators()
var payload = new Payloads()

describe('Test /GetAllProcessors endpoint', () => {

    it('Call Endpoint & Verify Status 200', () => {
      cy.request('GET', endpoint.getAllProcessorsEnpoint)
        .then((response) => {
          expect(response.status).to.equal(200);
        });
    });
  
    it('Verify Correct Response Body Structure', () => {
      cy.request('GET', endpoint.getAllProcessorsEnpoint)
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
    
  
    it('Verify That Reponse Contains Specifc Entry', () => {
      cy.request('GET', endpoint.getAllProcessorsEnpoint)
        .then((response) => {
          expect(response.status).to.equal(200);
          expect(response.body).to.deep.include(payload.getValidProcessorPayload);
        });
    });
  
    it('Verify Response Body Not Empty', () => {
      cy.request('GET', endpoint.getAllProcessorsEnpoint)
        .then((response) => {
          expect(response.status).to.equal(200);
          expect(response.body).to.deep.equal([]);
        });
    });
  
    it('Check All Entries in Response', () => {
      cy.request('GET', endpoint.getAllProcessorsEnpoint)
        .then((response) => {
          expect(response.status).to.equal(200);
          
          payload.fullProcessorPayload.forEach((entry) => {
            expect(response.body).to.deep.include(entry.processorID);
          });
        });
    });
        
  });
  