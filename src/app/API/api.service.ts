import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  OrderAPI:string = 'https://illusion-backend-mu.vercel.app/api/order'

  constructor(private http:HttpClient) { }

  sendOrder(Data:any):Observable<any>{
    return this.http.post(this.OrderAPI,Data)
  }
}
