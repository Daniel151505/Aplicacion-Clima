import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  url = "api.openweathermap.org/data/2.5/weather?&appid="
  key="523bd798dd5a7ae5aaa0b7f1ad7399b6"

  constructor( private http: HttpClient) { }
}
