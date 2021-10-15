import { TestBed } from '@angular/core/testing';
import { UserListUseCase } from './user-list.usecase';

describe('UserService', () => {
  let service: UserListUseCase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserListUseCase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
