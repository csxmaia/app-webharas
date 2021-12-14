import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Injectable} from "@angular/core";
import snackBarConfig from "../../../util/snackBarConfig";
import {TranslateService} from "@ngx-translate/core";

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  constructor(private _snackBar: MatSnackBar, private translateService: TranslateService){ }

  snackBarOpen(message: string, status: string) {
    let messageToTranslateSplit = message.split(';param:');
    if(messageToTranslateSplit[1] !== undefined) {
      let messageToTranslate = messageToTranslateSplit[0];
      let paramToMessage = messageToTranslateSplit[1];
      this.translateService.get(messageToTranslate, {param: paramToMessage}).subscribe((translatedOrNot: string) => {
        return this._snackBar.open(translatedOrNot, "✖️", snackBarConfig(status));
      });
    } else {
      this.translateService.get(message).subscribe((translatedOrNot: string) => {
        return this._snackBar.open(translatedOrNot, "✖️", snackBarConfig(status));
      });
    }
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let newReq = req;

    return next.handle(newReq).pipe(
      tap(response => {
        if (response instanceof HttpResponse) {
          if(response.body && response.body.success && response.body.message) {
            this.snackBarOpen(response.body.message, "mat-success");
          }
        }
      }),
      catchError(err => {
        if (err instanceof HttpErrorResponse) {
          try {
            if(err.error.message && err.error.success !== undefined) {
              this.snackBarOpen(err.error.message, "mat-error");
            } else {
              this.snackBarOpen("Erro não identificado", "mat-error");
            }
          } catch(e) {
            this.snackBarOpen("Erro inesperado", "mat-error")
          }
        }
        return of(err);
      }));
  }
}
