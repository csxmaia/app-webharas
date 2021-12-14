import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
//import {AuthService} from "../../services/auth.service";
import jwtDecode from "jwt-decode";
import {MatSnackBar} from "@angular/material/snack-bar";
// import snackBarConfig from "../../../util/snackBarConfig";

@Injectable()
export class AuthGuard implements CanActivate {
  public constructor(
    // private authService: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // if (this.authService.checkIsAuthenticated()) {
      // this.authService.actualRoute = route;

      // const token = this.authService.getToken();

      // const decoded: any = jwtDecode(token!);
      const decoded: any = true;

      if((decoded.exp < new Date().getTime()/1000)) {
        // this._snackBar.open("Sessão expirada, faça o login novamente", undefined, snackBarConfig("mat-error"));
        // this.authService.logout();
        this.router.navigate(['/login']);
        return false;
      }

      return true;
    // } else {
    //     this.router.navigate(['/login']);
    //     return false;
    // }
  }

}
