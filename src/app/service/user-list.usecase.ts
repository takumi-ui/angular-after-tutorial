import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user'
import { StoreService } from '../state/store.service';
import { map } from 'rxjs/operators';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserListUseCase {

  get users$() {
    return this.store.select(state => state.userList).pipe(
      map(({ items, filter}) => 
      items.filter(user => 
        (user.first_name + user.last_name).includes(filter.nameFilter)
        )
      )
    );
  }

  get filter$() {
    return this.store.select(state => state.userList.filter);
  }

  constructor(private http: HttpClient, private store: StoreService) { }

  async fetchUsers() {

    const users = await firstValueFrom(
      this.http
      .get<{ data: User[] }>("https://reqres.in/api/users")
      .pipe(map(res => res.data))
    );

    this.store.update(state => ({
      ...state,
      userList: {
        ...state.userList,
        items: users
      }
    }));
  }

  setNameFilter(nameFilter: string) {
    this.store.update(state => ({
      ...state,
      userList: {
        ...state.userList,
        filter: {
          nameFilter
        }
      }
    }));
  }


}


