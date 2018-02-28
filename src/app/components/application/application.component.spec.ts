import {ApplicationComponent} from './application.component';

describe('AppComponent', () => {
  it('is succesfully instanciate', () => {
    const app = new ApplicationComponent();
    expect(app instanceof ApplicationComponent).toEqual(true);
  });
});
