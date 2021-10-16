import { TestBed } from '@angular/core/testing';

import { UserDetailUseCaseService } from './user-detail-use-case.service';

describe('UserDetailUseCaseService', () => {
  let service: UserDetailUseCaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDetailUseCaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
