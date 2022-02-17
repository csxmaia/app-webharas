import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private apiPath = "/api";
  private token_name = "WH_Token";

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post(`${environment.api}${this.apiPath}/user/login`, {username: username, password: password});
  }

  signUp(user: any) {
    return this.http.post(`${environment.api}${this.apiPath}/user/save`, user);
  }

  setToken(jwtToken: string) {
    localStorage.setItem(this.token_name, jwtToken);
  }

  logout() {
    localStorage.removeItem(this.token_name);
  }

  getToken() {
    return localStorage.getItem(this.token_name);
  }

  checkIsAuthenticated() {
    return this.getToken() !== null
  }

}
