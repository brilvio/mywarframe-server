import app from '../../src/app';

describe('\'parts\' service', () => {
  it('registered the service', () => {
    const service = app.service('parts');
    expect(service).toBeTruthy();
  });
});
