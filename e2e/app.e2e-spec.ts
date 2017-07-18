import { PratilipiUIPage } from './app.po';

describe('pratilipi-ui App', () => {
  let page: PratilipiUIPage;

  beforeEach(() => {
    page = new PratilipiUIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
