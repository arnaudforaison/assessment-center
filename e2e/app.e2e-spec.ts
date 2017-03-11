import { AssessmentCenterPage } from './app.po';

describe('assessment-center App', () => {
  let page: AssessmentCenterPage;

  beforeEach(() => {
    page = new AssessmentCenterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
