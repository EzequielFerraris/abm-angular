import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private url = 'https://api.github.com/users/EzequielFerraris';

  constructor(private http : HttpClient) 
  { }

  obtener_perfil()
  {
    return this.http.get<any[]>(this.url);
  }
}
