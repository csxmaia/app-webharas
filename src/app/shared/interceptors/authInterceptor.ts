import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {AuthService} from "../../services/auth-service";
import jwt_decode from "jwt-decode";
import {Router} from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let newReq = req;

    const jwtToken = this.authService.getToken();
    if(typeof jwtToken === "string") {
      var decoded: any = jwt_decode(jwtToken);
      if (decoded) {
        const { exp } = decoded;
        const now = new Date();
        const isExpired = now.getTime() > exp * 1000
        if(isExpired) {
          this.authService.logout();
          this.router.navigate(['/login'])
        }
      }
    }

    if (jwtToken) {
      newReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${jwtToken}`
        }
      });
    }

    return next.handle(newReq)
  }


}

// const header = {};
// header['Authorization'] = jwtToken;
// const variablesHeaders = ['Content-Type', 'Accept'];
// for (let i = 0; i < variablesHeaders.length; i++) {
//   const value = req.headers.get(variablesHeaders[i]);
//   if (value) {
//     header[variablesHeaders[i]] = value;
//   }
