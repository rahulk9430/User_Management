import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'http://localhost:8082';

  constructor(private http: HttpClient) {}

  public userList() {
    return this.http.get(`${this.baseUrl}/users/`);
  }

  public deleteUser(id:number){
    return this.http.delete(`${this.baseUrl}/users/${id}`);
  }

  public updateUser(id:number,user:any){
    return this.http.put(`${this.baseUrl}/users/${id}`,user);
  }

  public addUser(user:any){
    return this.http.post(`${this.baseUrl}/users/`,user)
  }

  public getUserById(id:number){
    return this.http.get(`${this.baseUrl}/users/${id}`);
  }
}
