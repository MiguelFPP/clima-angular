import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClimaService {
  key = '8712435184233902d038acf1416eba67';
  url = `https://api.openweathermap.org/data/2.5/weather?&appid=`;

  constructor(private http: HttpClient) {}

  /* peticion http */
  getClima(city: string): Observable<any> {
    const url = `${this.url}${this.key}&q=${city}`;
    return this.http.get(url);
  }
}
