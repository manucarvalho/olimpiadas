import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../models/pais';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  url = 'http://localhost:3000/paises';

  constructor(private httpClient: HttpClient) { }  

  getPaises(): Observable<Pais[]>{
    return this.httpClient.get<Pais[]>(this.url)      
  }

  savePais(pais: Pais){
    return this.httpClient.post<Pais>(this.url, pais)      
  }

  updatePais(pais: Pais): Observable<Pais> {
    return this.httpClient.put<Pais>(this.url + '/' + pais.id, pais)     
  }

  deletePais(pais: Pais) {
    return this.httpClient.delete<Pais>(this.url + '/' + pais.id)
  }
  
}
