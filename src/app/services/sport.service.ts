import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sport } from '../models/sport';

@Injectable({
  providedIn: 'root'
})
export class SportService {

  url = 'http://localhost:3000/sports';

  constructor(private httpClient: HttpClient) { }

  saveSport(sport: Sport){
    return this.httpClient.post<Sport>(this.url, sport)      
  }

  getSports(): Observable<Sport[]>{
    return this.httpClient.get<Sport[]>(this.url)
  }

  updateSport(sport: Sport): Observable<Sport> {
    return this.httpClient.put<Sport>(this.url + '/' + sport.id, sport)     
  }

  deleteSport(sport: Sport) {
    return this.httpClient.delete<Sport>(this.url + '/' + sport.id)
  }
}
