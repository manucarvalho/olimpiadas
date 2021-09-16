import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SelectService {

  constructor(private http: HttpClient) { }

  getPaises(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/paises');
  }

  getSports(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/sports');
  }

  getAtletas(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/atletas');
  }
}
