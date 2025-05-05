
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostersService } from '../services/posters.service';
import { APIService } from '../API/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posters-detailed',
  templateUrl: './posters-detailed.component.html',
  styleUrl: './posters-detailed.component.css'
})
export class PostersDetailedComponent implements OnInit{

  constructor(private route : ActivatedRoute, private list: PostersService,private api:APIService,private router:Router){}

  poster:any;
  posterID:any

  price:number = 15;

  sabachka:string = '@'
  AddingMoney:number = 0

  Phone:string = ''
  Instagram:string = ''
  DeliveryMethod = ''
  PaymentMethod = ''

  Mdebareoba:string = ''

  Message:string = ''

  ngOnInit(): void {
    this.posterID = this.route.snapshot.paramMap.get('id');
    let mainID = parseInt(this.posterID)
    this.poster = this.list.PostersINFO.find((p)=>p.id===mainID)
  }

  ChangeDelivery(){
    if(this.DeliveryMethod == 'Metro'){
      this.price = 20
    }else if(this.DeliveryMethod == 'Home'){
      this.price = 25
    }
  }

  Order(){
    const Data={
      phone:this.Phone,
      instagram:this.Instagram,
      delivery:this.DeliveryMethod,
      payment:this.PaymentMethod,
      address:this.Mdebareoba,
      price:this.price
    }

    this.api.sendOrder(Data).subscribe((R)=>{
      this.Message = R.Message
      if(R.Success == true){
        this.router.navigateByUrl('/Success')
      }
    })
  }
  
}
