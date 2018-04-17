import { FlowxoBirthdaysPage } from './app.po';

describe('flowxo-birthdays App', () => {
  let page: FlowxoBirthdaysPage;

  beforeEach(() => {
    page = new FlowxoBirthdaysPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
