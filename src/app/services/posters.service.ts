import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostersService {
  PostersINFO = [
    {
      id:1,
      name:"Falling Down",
      price:15,
      img:'../../assets/Posters/FallingdownA.png'
    },
    {
      id:2,
      name:'Destroy Illusion',
      price:15,
      img:'../../assets/Posters/destroyIllusion1.png'
    },
    {
      id:3,
      name:'Aphex Twin.',
      price:15,
      img:'../../assets/Posters/aphex.png'
    },
    {
      id:4,
      name:'Die Antwoord.',
      price:15,
      img:'../../assets/Posters/die antwoord.png'
    },
    {
      id:5,
      name:'MF DOOM',
      price:15,
      img:'../../assets/Posters/MFDOOM.png'
    },
    {
      id:6,
      name:"Slowdive",
      price:15,
      img:'../../assets/Posters/Slowdive.png'
    },
  ]
  constructor() { }
}
