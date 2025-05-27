import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { catchError, map, Observable } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { type ApiType } from '../models/api.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userToken = environment.fakeToken;
  private tokenKey = 'token';
  private apiUrl = environment.userApi;

  constructor(private http: HttpClient) {}

  getUserData(): Observable<ApiType[]> {
    return this.http.get<ApiType[]>(this.apiUrl);
  }

  logIn(email: string, password: string): Observable<ApiType> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.get<ApiType[]>(this.apiUrl, { headers }).pipe(
      map((users) => {
        const user = users.find(
          (u) => u.email === email && u.password === password
        );
        if (!user) {
          throw new Error('Invalid email or password');
        }
        localStorage.setItem(this.tokenKey, user.fakeToken);
        return user;
      }),
      catchError((error: HttpErrorResponse) => {
        throw new Error(error.message);
      })
    );
  }

  signUp(name: string, email: string, password: string): Observable<ApiType> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http
      .post<ApiType>(
        this.apiUrl,
        {
          name,
          email,
          password,
          fakeToken: this.userToken,
        },
        { headers }
      )
      .pipe(
        map((response) => {
          return response;
        }),
        catchError((error: HttpErrorResponse) => {
          throw new Error(error.message);
        })
      );
  }

  removeUser(id: string): Observable<string> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<string>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        throw new Error(error.message);
      })
    );
  }

  getToken(): any {
    return localStorage.getItem(this.tokenKey);
  }

  removeToken() {
    return localStorage.removeItem(this.tokenKey);
  }

  isValidUserToken(token: string): Observable<boolean> {
    return this.http
      .get<any[]>(this.apiUrl)
      .pipe(map((users) => users.find((user) => user.fakeToken === token)));
  }

  isLoggedInUser() {
    const token = this.getToken();
    return token !== null && this.isValidUserToken(token);
  }
}
