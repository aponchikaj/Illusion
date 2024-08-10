import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostersService } from '../services/posters.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  constructor(private router: Router, public posters:PostersService){}

  onSelect(poster:any){
    this.router.navigate(['/Posters',poster.id])
  }
}
