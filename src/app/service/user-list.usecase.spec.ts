import { TestBed } from '@angular/core/testing';
import { UserListUseCase } from './user-list.usecase';

describe('UserListUseCase', () => {
  let service: UserListUseCase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserListUseCase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
