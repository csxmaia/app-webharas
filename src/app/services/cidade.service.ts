import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class CidadeService {

  private apiPath = "/api";

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(`${environment.api}${this.apiPath}/cidades`);
  }

}
