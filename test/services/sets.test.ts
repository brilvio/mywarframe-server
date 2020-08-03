import app from '../../src/app';

describe('\'sets\' service', () => {
  it('registered the service', () => {
    const service = app.service('sets');
    expect(service).toBeTruthy();
  });
});
