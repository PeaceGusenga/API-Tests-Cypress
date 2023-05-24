import { EndpointLocators } from "../../../Test Data/endpooints";
import { Payloads } from "../../../Test Data/payload";

var endpoint = new EndpointLocators()
var payload  = new Payloads()

describe('Test /AddProcessors endpoint', () => {
  
 
  it('POST payload & Verify Status 200 & Response Body', () => {
   /*
    const payload1 = {
      processorID: '1',
      processorName: 'Test Processor',
    };
*/
    cy.request({
      method: 'POST',
      url: endpoint.addProcessorEndpoint,
      body: payload.validProcessorPayload,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.equal('New process added.');
    });
  });

  it('POST invalid payload & Verify Status 400 & Verify Reponse Body', () => {
    /*
    const payload1 = {
      processorID: '8',
      processorName: 'Invalid Processor ',
    };
*/
    cy.request({
      method: 'POST',
      url: endpoint.addProcessorEndpoint,
      headers: {
        'Content-Type': 'application/json'
      },
      body: payload.invalidProcessorPayload,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.equal(400);
      expect(response.body).to.equal('Processor Information is not valid.');
    });
  });

  it('BUG - POST Payload Containing Edge Case & Verify Status 200', () => {
    /*
    const payload1 = {
      processorID: '-100',
      processorName: ' ',
    };
*/
    cy.request({
      method: 'POST',
      url: endpoint.addProcessorEndpoint,
      body: payload.bugProcessorPayload,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
});
