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
      img:'../../assets/Posters/FallingdownA.webp'
    },
    {
      id:2,
      name:'Destroy Illusion',
      price:15,
      img:'../../assets/Posters/destroyIllusion1.webp'
    },
    {
      id:3,
      name:'Aphex Twin.',
      price:15,
      img:'../../assets/Posters/aphex.webp'
    },
    {
      id:4,
      name:"Undersky",
      price:15,
      img:'../../assets/Posters/undersky.webp'
    },
    {
      id:5,
      name:"Kung Fu Junkie",
      price:15,
      img:'../../assets/Posters/kfj1.webp'
    },
    {
      id:6,
      name:"Fuck Da Police",
      price:15,
      img:'../../assets/Posters/maxi.webp'
    },
    {
      id:7,
      name:"Nikakoi - შენтыmental",
      price:15,
      img:'../../assets/Posters/NIKAKOI.webp'
    },
    {
      id:8,
      name:"ტექნომაგია",
      price:15,
      img:'../../assets/Posters/teqnomagia.webp'
    },
    {
      id:9,
      name:"Dro X Kordz",
      price:15,
      img:'../../assets/Posters/droxkordz.webp'
    },
    {
      id:10,
      name:"Old Demo Gospels",
      price:15,
      img:'../../assets/Posters/kfj2.webp'
    },
    {
      id:11,
      name:'Die Antwoord.',
      price:15,
      img:'../../assets/Posters/die antwoord.webp'
    },
    {
      id:12,
      name:'MF DOOM',
      price:15,
      img:'../../assets/Posters/MFDOOM.webp'
    },
    {
      id:13,
      name:"Slowdive",
      price:15,
      img:'../../assets/Posters/Slowdive.webp'
    },
    {
      id:14,
      name:"Travis Sccott",
      price:15,
      img:'../../assets/Posters/travis poster.webp'
    },
    {
      id:15,
      name:"Kanye West",
      price:15,
      img:'../../assets/Posters/kanye Poster.webp'
    },
    {
      id:16,
      name:"დაანგრიე ილუზია",
      price:15,
      img:'../../assets/Posters/daangrieiluziayvavilit.webp'
    },
    {
      id:17,
      name:"Kendrick Lamar",
      price:15,
      img:'../../assets/Posters/KendrickPoster.webp'
    },
  ]
  constructor() { }
}
