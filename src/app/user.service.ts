import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsersData():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }


  googleAuth():Observable<any>{
    return this.http.get('https://localhost:3443/auth/google')
  }

}
