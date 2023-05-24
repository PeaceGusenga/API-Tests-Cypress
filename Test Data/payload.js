export class Payloads {
    
    validProcessorPayload = {
        processorID: 1,
        processorName: 'Test Processor',
      };

      getValidProcessorPayload = {
        processorID: 2,
        processorName: 'Snapdragon 795',
      };

      invalidProcessorPayload = {
        processorID: '8',
        processorName: 'Invalid Processor',
      };

       fullProcessorPayload = [
        { processorID: 1, processorName: 'Snapdragon 710' },
        { processorID: 2, processorName: 'Snapdragon 795' },
        { processorID: 3, processorName: 'Snapdragon 8520' },
        { processorID: 4, processorName: 'MediaTek Q1400' },
        { processorID: 5, processorName: 'MediaTek S1575' }
      ];

      bugProcessorPayload = {
        processorID: 8,
        processorName: 'Invalid Processor',
      };

      randomSmartphone = {
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
      }

      validProcessKeys = [
              'modelID',
              'modelName',
              'specID',
              'brandID',
              'price',
              'brandName',
              'brandNetWorth',
              'storageSpace',
              'memory',
              'batterySize',
              'processorID',
              'numberOfCameras',
              'hasWirelessCharging',
              'processorName'
      ]
      


    
}