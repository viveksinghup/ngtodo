import { NgtodoPage } from './app.po';

describe('ngtodo App', () => {
  let page: NgtodoPage;

  beforeEach(() => {
    page = new NgtodoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
