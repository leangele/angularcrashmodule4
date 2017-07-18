import { Section7Page } from './app.po';

describe('section7 App', () => {
  let page: Section7Page;

  beforeEach(() => {
    page = new Section7Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
