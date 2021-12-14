import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
// import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
// import User from "../models/user";
import jwt_decode from "jwt-decode";

public interface User {

}
const environment: any = 123;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private path = "/v1/auth";
  private token_name = "PC_Token";

  constructor(private http: HttpClient) { }

  login(user: User): Observable<any> {
    return this.http.post(`${environment.api}${this.path}/login`, user);
  }

  signUp(user: User): Observable<any> {
    return this.http.post(`${environment.api}${this.path}/signUp`, user);
  }

  setToken(jwtToken: string) {
    localStorage.setItem(this.token_name, jwtToken);
  }

  getToken() {
    return localStorage.getItem(this.token_name);
  }

  logout() {
    localStorage.removeItem(this.token_name);
    window.location.href = "/login";
  }

  checkIsAuthenticated() {
    return this.getToken() !== null
  }

  getUserByToken() {
    let token = this.getToken();
    var decoded: any;
    if (token != null) {
      decoded = jwt_decode(token);
      const user: User = new User();
      user.id = decoded.id;
      user.username = decoded.username;
      user.email = decoded.email;
      user.name = decoded.name;
      return user;
    }
    return null
  }

}
