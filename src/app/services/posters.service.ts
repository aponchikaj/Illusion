import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostersService {
  PostersINFO = [
    {
      id:1,
      name:'ანგრევ?',
      price:15,
      img:'../../assets/Posters/angrev.png'
    },
    {
      id:2,
      name:'დაანგრიე ილუზია',
      price:15,
      img:'../../assets/Posters/daangrieiluziayvavilit.png'
    },
    {
      id:3,
      name:'Destroy Illusion.',
      price:15,
      img:'../../assets/Posters/destroyIllusion1.png'
    },
    {
      id:4,
      name:'Destroy Illusion.',
      price:15,
      img:'../../assets/Posters/destroyillusionwithrainbow.png'
    },
    {
      id:5,
      name:'დაანგრიე ილუზია.',
      price:15,
      img:'../../assets/Posters/destroyilusion2.png'
    },
    {
      id:6,
      name:'დაანგრიე ილუზია.',
      price:15,
      img:'../../assets/Posters/დაანგრიე ილუზია.png'
    },
    {
      id:7,
      name:'ისევ ილუზიაში.',
      price:15,
      img:'../../assets/Posters/ისევ ილუზიაში.png'
    },
  ]
  constructor() { }
}