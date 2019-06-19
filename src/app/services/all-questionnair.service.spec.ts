import { TestBed, inject } from '@angular/core/testing';

import { AllQuestionnairService } from './all-questionnair.service';

describe('AllQuestionnairService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllQuestionnairService]
    });
  });

  it('should be created', inject([AllQuestionnairService], (service: AllQuestionnairService) => {
    expect(service).toBeTruthy();
  }));
});
