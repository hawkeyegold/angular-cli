import { CoreAngularCliPage } from './app.po';

describe('core-angular-cli App', () => {
  let page: CoreAngularCliPage;

  beforeEach(() => {
    page = new CoreAngularCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
