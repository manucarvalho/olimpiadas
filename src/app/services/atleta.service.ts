import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Atleta } from '../models/atleta';

@Injectable({
  providedIn: 'root'
})
export class AtletaService {

  url = 'http://localhost:3000/atletas';

  constructor(private httpClient: HttpClient) { }

  getAtletas(): Observable<Atleta[]>{
    return this.httpClient.get<Atleta[]>(this.url)
  }

  saveAtleta(atleta: Atleta){
    return this.httpClient.post<Atleta>(this.url, atleta)      
  }

  deleteAtleta(atleta: Atleta) {
    return this.httpClient.delete<Atleta>(this.url + '/' + atleta.id)
  }

  updateAtleta(atleta: Atleta): Observable<Atleta> {
    return this.httpClient.put<Atleta>(this.url + '/' + atleta.id, atleta)     
  }
}
