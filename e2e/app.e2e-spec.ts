import { TestRepositoryPage } from './app.po';

describe('test-repository App', () => {
  let page: TestRepositoryPage;

  beforeEach(() => {
    page = new TestRepositoryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
