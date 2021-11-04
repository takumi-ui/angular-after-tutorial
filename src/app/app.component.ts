import { Component } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { UserListUseCase } from './service/user-list.usecase';
import { UserListFilter } from './state/state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app'
  users$ = this.userList.users$;
  userListFilter$ = this.userList.filter$;

  array = ['選択肢A', '選択肢B', '選択肢C'];

  constructor(private http: HttpClient, private userList: UserListUseCase) {}

  ngOnInit() {
    this.userList.fetchUsers();
  }

  setUserListFilter(value: UserListFilter) {
    this.userList.setNameFilter(value.nameFilter);
  }

  mouseover(event: any) {
    console.log(event);
  }

  mousedown(event: any) {
    console.log(event);
  }

}
