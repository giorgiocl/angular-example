import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../module-user/user';
import { Observable } from 'rxjs/Observable';
import { environment } from 'src/environments/environment';

@Injectable()
export class UserService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = environment.URL_SERVICE;
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl+"users");
  }

 public getHello(){
    return this.http.get(this.usersUrl+"hello-world");
  }

  public save(user: User) {
    return this.http.post<User>(this.usersUrl+"save/user", user);
  }
  
}