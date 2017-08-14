import { Pro2Page } from './app.po';

describe('pro2 App', () => {
  let page: Pro2Page;

  beforeEach(() => {
    page = new Pro2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
