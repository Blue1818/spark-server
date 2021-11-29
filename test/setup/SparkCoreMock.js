// @flow

class SparkCoreMock {
  onApiMessage: () => boolean = (): boolean => true;

  getVariableValue: () => any = (): any => 0;

  getDescription: () => Object = (): Object => ({
    firmware_version: '0.6.0',
    product_id: '6',
    state: {
      f: null,
      v: null,
    },
  });

  ping: () => Object = (): Object => ({
    connected: false,
    lastPing: new Date(),
  });
}

export default SparkCoreMock;
