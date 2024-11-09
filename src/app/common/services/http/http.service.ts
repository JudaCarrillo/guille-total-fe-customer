import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, finalize, Observable } from "rxjs";
import { environment } from "../../../../environments/environment";
import { config } from './http.config';
import { IHttpResponse } from "../../interfaces/http.interface";
import { SessionService } from "../session/session.service";


@Injectable({
  providedIn: 'root',
})
export default class HttpService {
  private headers = new HttpHeaders();
  private defaultAPI = environment.GUILLE_TOTAL_BASE_URL;
  private URL = '';

  constructor(
    private httpClient: HttpClient,
    private sessionService: SessionService,
  ) {}

  get<T>(
    path: string,
    params = {},
    additionalHeaders = [],
    nameAPI: string = '',
    isSecured = true
  ): Observable<IHttpResponse<T>> {
    this.addDefaultHeaders(isSecured);
    this.addHeaders(additionalHeaders);
    this.selectedAPI(nameAPI);

    return this.httpClient
      .get<IHttpResponse<T>>(this.URL + path, { params, headers: this.headers })
      .pipe(
        catchError((err) => {
          return config.handleError(err);
        }),
        finalize(() => {
          this.deleteHeaders(additionalHeaders);
        })
      );
  }

  post<T>(
    path: string,
    body = {},
    additionalHeaders = [],
    nameAPI: string = '',
    isSecured = true,
  ): Observable<IHttpResponse<T>> {
    this.addDefaultHeaders(isSecured);
    this.addHeaders(additionalHeaders);
    this.selectedAPI(nameAPI);

    return this.httpClient
      .post<IHttpResponse<T>>(this.URL + path, JSON.stringify(body), {
        headers: this.headers,
      })
      .pipe(
        catchError((err) => {
          return config.handleError(err);
        }),
        finalize(() => {
          this.deleteHeaders(additionalHeaders);
        })
      );
  }

  private addDefaultHeaders(isSecured: boolean): void {
    this.headers = this.headers.set('Content-type', 'application/json');
    this.URL = this.defaultAPI;
    if (isSecured) {
      this.headers = this.headers.set('Authorization', this.getToken());
    }
  }

  private addHeaders(headers: any): void {
    if (headers) {
      headers.forEach((element: any) => {
        this.headers = this.headers.set(element.key, element.value);
      });
    }
  }

  private selectedAPI(nameAPI: string): void {
    if (nameAPI !== '') {
      this.URL = (environment as any)[nameAPI];
    }
  }

  private deleteHeaders(headers: any): void {
    if (headers) {
      headers.forEach((element: any) => {
        this.headers = this.headers.delete(element.key, element.value);
      });
    }
  }

  private getToken() {
    const session: any  = this.sessionService.getSession();
    const token = session ? session.token.accessToken : '';
    return `Bearer ${token}`;
  }

}
