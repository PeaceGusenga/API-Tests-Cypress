describe('Test /GetAllSmartphones endpoint', () => {
  
    it('should verify the response status code', () => {
      cy.request('GET', '/GetAllSmartphones')
        .then((response) => {
          expect(response.status).to.equal(200);
        });
    });
  
    it('should verify a specific response', () => {
      cy.request('GET', '/GetAllSmartphones')
        .then((response) => {
          expect(response.status).to.equal(200);
          expect(response.body).to.deep.include.members([
            {
              modelID: 'OPP_FIND_V46',
              modelName: 'OPP_FIND_V46',
              specID: '1',
              brandID: '3',
              price: '$215',
              brandName: 'Oppo',
              brandNetWorth: '$140000000',
              storageSpace: '128 GB',
              memory: '4 GB',
              batterySize: '4500 mAh',
              processorID: '1',
              numberOfCameras: '1',
              hasWirelessCharging: 'No',
              processorName: 'Snapdragon 710',
            },
          ]);
        });
    });
  });
  