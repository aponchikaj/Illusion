import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostersService } from '../services/posters.service';

@Component({
  selector: 'app-posters',
  templateUrl: './posters.component.html',
  styleUrl: './posters.component.css'
})
export class PostersComponent {
  

  constructor(private router: Router,public posters: PostersService){}

  onSelect(poster:any){
    this.router.navigate(['/Posters',poster.id])
  }
}
