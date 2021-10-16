import { Injectable } from '@angular/core';
import { StoreService } from '../state/store.service';
import { UserApiService } from './user-api.service';

@Injectable({
  providedIn: 'root'
})
export class UserDetailUseCaseService {

  get user$() {
    return this.store.select(state => state.userDetail.user);
  }

  constructor(private store: StoreService, private userApi: UserApiService) { }

  async fetchUser(userId: string) {
    this.store.update(state => ({
      ...state,
      userDetail: {
        ...state.userDetail,
        user: null
      }
    }));

    const user = await this.userApi.getUserById(userId);

    this.store.update(state => ({
      ...state,
      userDetail: {
        ...state.userDetail,
        user
      }
    }))
  }
}
