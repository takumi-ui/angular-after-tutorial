import { Component } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users$ = this.userService.users$;

  constructor(private http: HttpClient, private userService: UserService) {}

  ngOnInit() {
    this.userService.fetchUsers();
  }
}
