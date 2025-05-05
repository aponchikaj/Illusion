import { Component } from '@angular/core';
import { APIService } from '../API/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor(private api:APIService){}

  Email:string=''
  Message:string = ''

  ServerMessage:string = ''

  SendData(){
    const data ={
      email:this.Email,
      message:this.Message
    }
    this.api.SendMessage(data).subscribe((r:any)=>{
      this.ServerMessage = r.Message
    })
  }
}
