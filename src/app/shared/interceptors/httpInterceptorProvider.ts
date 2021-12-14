import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthInterceptor } from './authInterceptor';
import { ResponseInterceptor } from './responseInterceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true }
];
