import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../user';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersSubject = new BehaviorSubject<User[]>([]);

  get users$() {
    return this.usersSubject.asObservable();
  }

  constructor(private http: HttpClient) { }

  fetchUsers(): void {
    this.http
    .get<{ data: User[] }>("https://reqres.in/api/users")
    .pipe(map(res => res.data))
    .subscribe(users => this.usersSubject.next(users));
  }


}
