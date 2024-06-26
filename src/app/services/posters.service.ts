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
    {
      id:8,
      name:'Aphex Twin.',
      price:15,
      img:'../../assets/Posters/aphex.png'
    },
    {
      id:9,
      name:'Die Antwoord.',
      price:15,
      img:'../../assets/Posters/die antwoord.png'
    },
    {
      id:10,
      name:'MF DOOM',
      price:15,
      img:'../../assets/Posters/MFDOOM.png'
    },
    {
      id:11,
      name:'MISFITS',
      price:12,
      img:'../../assets/Posters/Misfits Poster.png'
    },
    {
      id:12,
      name:'Sex Pistols',
      price:15,
      img:'../../assets/Posters/sEQsis pistoleti Poster.png'
    },
    {
      id:13,
      name:'Die Antwoord',
      price:15,
      img:'../../assets/Posters/antwoord2.png'
    },
    {
      id:14,
      name:'Lifelover',
      price:15,
      img:'../../assets/Posters/lifelover.png'
    },
    {
      id:15,
      name:'Grausamkeit',
      price:15,
      img:'../../assets/Posters/grausamkeit.png'
    },
    {
      id:16,
      name:'Psychonaut 4',
      price:15,
      img:'../../assets/Posters/p4.png'
    },
  ]
  constructor() { }
}
