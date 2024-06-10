import { parseTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostersService } from '../services/posters.service';

@Component({
  selector: 'app-posters-detailed',
  templateUrl: './posters-detailed.component.html',
  styleUrl: './posters-detailed.component.css'
})
export class PostersDetailedComponent implements OnInit{
  constructor(private route : ActivatedRoute, private list: PostersService){}

  poster:any;
  posterID:any

  ngOnInit(): void {
    this.posterID = this.route.snapshot.paramMap.get('id');
    let mainID = parseInt(this.posterID)
    this.poster = this.list.PostersINFO.find((p)=>p.id===mainID)
  }
  
}
