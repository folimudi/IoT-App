import { IoTAppPage } from './app.po';

describe('io-t-app App', () => {
  let page: IoTAppPage;

  beforeEach(() => {
    page = new IoTAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
