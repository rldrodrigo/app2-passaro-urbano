import { App2PassaroUrbanoPage } from './app.po';

describe('app2-passaro-urbano App', () => {
  let page: App2PassaroUrbanoPage;

  beforeEach(() => {
    page = new App2PassaroUrbanoPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to xyz!!'))
      .then(done, done.fail);
  });
});
