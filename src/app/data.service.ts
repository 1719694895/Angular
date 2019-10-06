import { Injectable } from '@angular/core';
import {Http} from  '@angular/http';
import { from } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: Http) { }


  getData(){
    return this.http.get("../public/person.json")
   .map((res)=>res.json());
    
  }
}
