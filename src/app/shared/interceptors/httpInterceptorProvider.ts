import { HTTP_INTERCEPTORS } from '@angular/common/http';

import {AuthInterceptor} from "./authInterceptor";

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  // { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true }
];
