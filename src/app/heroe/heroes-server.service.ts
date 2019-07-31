import { Injectable } from '@angular/core';

import { Heroe } from './heroe.model';

@Injectable({
  providedIn: 'root'
})
export class HeroesServerService {
  
  heroes: Array<Heroe> = [
    new Heroe (5, "Batman"),
    new Heroe (1, "Superman")
  ];
 
  constructor() {}

  addHero(hero:Heroe){
    this.heroes.push(hero);
  }

  getHeroes(): Array<Heroe> {
    return this.heroes.slice();
  }

  getHero(id: number): Heroe {
    return this.heroes.find((hero) => hero.id === id);
  }
}
