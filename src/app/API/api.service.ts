import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  OrderAPI:string = 'illusionbackend-production.up.railway.app/Order'

  constructor(private http:HttpClient) { }

  sendOrder(Data:any):Observable<any>{
    return this.http.post(this.OrderAPI,Data)
  }
}
