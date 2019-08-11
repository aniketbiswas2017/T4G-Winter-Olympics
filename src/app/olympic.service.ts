import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpResponse } from '@angular/common/http';
import { Olympics } from './model/olympic.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OlympicService {

  private olympicsUrl = "https://gist.githubusercontent.com/jonscottclark/28435d08a1a3cb09b6244daefe6a12a1/raw/be545452376a08c0e2b38cee9f3a444bb4ba555a/sochi2014.json";
  dataFav: any;

  constructor(private http: HttpClient) { }

  getTable(): Observable<Olympics[]> {
    return this.http.get<Olympics[]>(this.olympicsUrl);
  }
}
