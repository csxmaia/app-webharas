import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class CavaloService {

  private apiPath = "/api";

  constructor(private http: HttpClient) {}

  getAll(params?: any) {
    return this.http.get(`${environment.api}${this.apiPath}/cavalos`, {params: params});
  }

  getById(id: number) {
    return this.http.get(`${environment.api}${this.apiPath}/cavalo/${id}`);
  }

  getByUser() {
    return this.http.get(`${environment.api}${this.apiPath}/cavalosByUser`);
  }

  save(cavalo: any) {
    return this.http.post(`${environment.api}${this.apiPath}/cavalo/save`, cavalo);
  }
}
