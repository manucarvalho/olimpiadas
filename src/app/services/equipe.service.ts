import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipe } from '../models/equipe';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  url = 'http://localhost:3000/equipes';

  constructor(private httpClient: HttpClient) { }

  getEquipes(): Observable<Equipe[]>{
    return this.httpClient.get<Equipe[]>(this.url)
  }

  saveEquipe(equipe: Equipe){
    return this.httpClient.post<Equipe>(this.url, equipe)      
  }

  deleteEquipe(equipe: Equipe) {
    return this.httpClient.delete<Equipe>(this.url + '/' + equipe.id)
  }

  updateEquipe(equipe: Equipe): Observable<Equipe> {
    return this.httpClient.put<Equipe>(this.url + '/' + equipe.id, equipe)     
  }
}
