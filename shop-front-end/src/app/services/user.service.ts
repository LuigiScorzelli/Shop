import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(data: object): Observable<Object> {
    return this.http.post(`http://127.0.0.1:8000/api/user`, data);
  }
}
