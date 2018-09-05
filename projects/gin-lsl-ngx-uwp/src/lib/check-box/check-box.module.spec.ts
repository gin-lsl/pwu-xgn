import { GuCheckBoxModule } from './check-box.module';

describe('GuCheckBoxModule', () => {
  let checkBoxModule: GuCheckBoxModule;

  beforeEach(() => {
    checkBoxModule = new GuCheckBoxModule();
  });

  it('should create an instance', () => {
    expect(checkBoxModule).toBeTruthy();
  });
});
