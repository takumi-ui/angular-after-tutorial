import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, map } from 'rxjs';
import { User } from '../user';

const apiHost = 'https://reqres.in/api';

interface ApiResponse<T> {
  data: T
}

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return firstValueFrom(
      this.http.get<ApiResponse<User[]>>(`${apiHost}/users`)
      .pipe(map(res => res.data))
    );
  }

  getUserById(id: string) {
    return firstValueFrom(
      this.http.get<ApiResponse<User>>(`${apiHost}/users/${id}`)
      .pipe(map(res => res.data))
    );
  }
}
