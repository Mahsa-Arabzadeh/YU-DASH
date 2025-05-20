import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { catchError, map, Observable } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userToken = environment.fakeToken;
  private tokenKey = 'token';
  private apiUrl = environment.userApi;

  constructor(private http: HttpClient) {}

  getUserData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  logIn(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.get<any[]>(this.apiUrl, { headers }).pipe(
      map((users) => {
        const user = users.find(
          (u) => u.email === email && u.password === password
        );
        if (!user) {
          throw new Error('Invalid email or password');
        }
        this.saveToken(user.fakeToken);
        return user;
      }),
      catchError((error: HttpErrorResponse) => {
        throw new Error(error.message);
      })
    );
  }

  signUp(name: string, email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http
      .post<any>(
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

  saveToken(token: string) {
    return localStorage.setItem(this.tokenKey, token);
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
