import { isPlatformBrowser } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { AuthUtils } from "../utility/auth-utils";
import { AlertService } from "./alert-service";


@Injectable()
export class HttpService {
    private baseURl = 'http://localhost:5000/api';

    constructor(private httpClient: HttpClient,
            private alertService: AlertService,
            @Inject(PLATFORM_ID) private platformId: any, 
            private router: Router) {}

    get(url: string, paramData?: any): Observable<any> {
        const data = {params: paramData, headers: this.getAuthHeaders()};
        return this.httpClient.get(this.baseURl + url, data).pipe(catchError(this.errorHandler.bind(this)));
    }

    post(url: string, body: any, isArrayBuffer = false): Observable<any> {
        const options: any = isArrayBuffer ? {
          headers: this.getAuthHeaders(), responseType: 'arraybuffer',
        } : {headers: this.getAuthHeaders()};
        return this.httpClient.post(this.baseURl + url, body, options).pipe(catchError(this.errorHandler.bind(this)));
      }
    
      patch(url: string, body: any): Observable<any> {
        return this.httpClient.patch(this.baseURl + url, body, {headers: this.getAuthHeaders()}).pipe(catchError(this.errorHandler.bind(this)));
      }
    
      delete(url: string, body?: any): Observable<any> {
        return this.httpClient.request('delete', this.baseURl + url,
          {body, headers: this.getAuthHeaders()});
      }
    
    
      private getAuthHeaders() {
        if (isPlatformBrowser(this.platformId)) {
          return {
            Authorization: `Bearer ${AuthUtils.getAuthToken()}`
          };
        }
      }
    
      private errorHandler(response: any) {
        const error = response.error;
        const keys = Object.keys(error);
        const key = keys[0];
        const message = error.message;
        const status = response.status;
        if (status === 401) {
          this.router.navigate(['logout']);
          this.alertService.message('Session Expired');
        }
        if (key === 'isTrusted') {
          this.alertService.error('Please connect to internet Connection');
        } else {
          this.alertService.error(message);
        }
        return throwError({message, error});
      }
}