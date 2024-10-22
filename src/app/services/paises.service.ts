import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private url = 'https://restcountries.com/v3.1/all?fields=translations,flags,continents';

  constructor(private http : HttpClient) 
  { }

  obtener_paises()
  {
    return this.http.get<any[]>(this.url).pipe(
      map(paises => paises.sort((a,b) => {
      if (a.translations.spa.official < b.translations.spa.official) {
        return -1;
      } else if (a.translations.spa.official > b.translations.spa.official) {
        return 1;
      } else {
        return 0;
      }
    })));;
  }
}
