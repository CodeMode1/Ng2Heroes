import { Ng2HeroesPage } from './app.po';

describe('ng2-heroes App', function() {
  let page: Ng2HeroesPage;

  beforeEach(() => {
    page = new Ng2HeroesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
