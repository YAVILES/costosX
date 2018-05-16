import { ConceptosModule } from './conceptos.module';

describe('ConceptosModule', () => {
  let conceptosModule: ConceptosModule;

  beforeEach(() => {
    conceptosModule = new ConceptosModule();
  });

  it('should create an instance', () => {
    expect(conceptosModule).toBeTruthy();
  });
});
