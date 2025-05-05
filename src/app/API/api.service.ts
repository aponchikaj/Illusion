import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  localhostStr:string = 'https://illusionbackend-production.up.railway.app/'
  OrderAPI:string = `${this.localhostStr}api/order`
  ContactAPI:string = `${this.localhostStr}api/contact`

  constructor(private http:HttpClient) { }

  sendOrder(Data:any):Observable<any>{
    return this.http.post(this.OrderAPI,Data)
  }

  SendMessage(Data:any){
    return this.http.post(this.ContactAPI,Data)
  }
}
