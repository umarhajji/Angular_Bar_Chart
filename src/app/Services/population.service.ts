import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Population } from '../Population'

@Injectable({
  providedIn: 'root'
})
export class PopulationService {

  private apiUrl = 'http://localhost:3000/populations/'
    httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    }

  constructor(private http: HttpClient) {}

    getAllData(): Observable<Population[]>{
      return this.http.get<Population[]>(this.apiUrl)
    }

    getall(){
      return this.http.get(this.apiUrl, this.httpOptions).toPromise().then((data)=>
      {
        return data
      })
    }
   
}
