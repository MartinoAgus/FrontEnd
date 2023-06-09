import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { texto } from '../model/texto.model';

@Injectable({
  providedIn: 'root'
})
export class TextoService {
  URL = 'https://agustina-portfolio.onrender.com/texto/';

  constructor(private httpClient: HttpClient) { }
    public getTexto(): Observable<texto>{
    return this.httpClient.get<texto>(this.URL+'traer/texto');
   }
   
}
