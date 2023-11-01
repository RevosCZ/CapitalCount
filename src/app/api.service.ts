import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http : HttpClient) { }

  getInfo(country: String) {
    return this.http.get("https://restcountries.com/v3.1/name/"+country);
  }
}
