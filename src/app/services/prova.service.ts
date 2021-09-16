import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prova } from '../models/prova';

@Injectable({
  providedIn: 'root'
})
export class ProvaService {

  url = 'http://localhost:3000/provas';

  constructor(private httpClient: HttpClient) { }

  getProvas(): Observable<Prova[]>{
    return this.httpClient.get<Prova[]>(this.url)
  }

  saveProva(prova: Prova){
    return this.httpClient.post<Prova>(this.url, prova)      
  }

  deleteProva(prova: Prova) {
    return this.httpClient.delete<Prova>(this.url + '/' + prova.id)
  }

  updateProva(prova: Prova): Observable<Prova> {
    return this.httpClient.put<Prova>(this.url + '/' + prova.id, prova)     
  }
}
