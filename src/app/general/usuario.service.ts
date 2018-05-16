import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from "./GLOBAL";
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  public url: string = GLOBAL.url_api_slim + '/usuarios/index.php';
  private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');

  constructor(public http: HttpClient) { }

  get isLoggedIn() {
    return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString());
  }

  setLoggedIn(valor: boolean) {
    this.loggedInStatus = valor;
    localStorage.setItem('loggedIn', valor.toString());
  }

  public autentificar(api: string, login: string, clave: string): Observable<any> {
    let json = JSON.stringify({ api: api, usuario: login, clave: clave });
    return this.http.post(this.url + "/autentificar", json)
      .pipe(retry(2), catchError(err => GLOBAL.handleError(err)));
  }

  public actualizar(api: string, usuario: any): Observable<any> {
    let json = JSON.stringify({ api: api, usuario: usuario });
    return this.http.post(this.url + "/actualizar", json)
      .pipe(retry(2), catchError(err => GLOBAL.handleError(err)));
  }


}
