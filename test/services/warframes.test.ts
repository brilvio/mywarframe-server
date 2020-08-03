import app from '../../src/app';

describe('\'warframes\' service', () => {
  it('registered the service', () => {
    const service = app.service('warframes');
    expect(service).toBeTruthy();
  });
});
