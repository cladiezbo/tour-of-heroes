import { Injectable } from '@angular/core';

import { Heroe } from '../heroe/heroe.model';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DashboardServerService {
  dashboardHeroes: Array<Heroe>;
  dashboardChanged = new Subject<Heroe[]>();

  constructor() { }

  addHero(hero:Heroe){
    if(!this.dashboardHeroes){
      this.dashboardHeroes = new Array<Heroe>();
      this.dashboardHeroes.push(hero);
      this.saveInLocalStorage();
    }
    else{
      if (!this.dashboardHeroes.find((element)=> element.id === hero.id)){
      this.dashboardHeroes.push(hero);
      this.saveInLocalStorage();
      this.dashboardChanged.next(this.dashboardHeroes.slice()); 
      }
    } 
  }
  
  getHeroes(){
    this.getFromLocalStorage();
    return this.dashboardHeroes !== null ? this.dashboardHeroes.slice(): null;
  }
  saveInLocalStorage(){
    localStorage.setItem("last heroes", JSON.stringify(this.dashboardHeroes));
  }
  getFromLocalStorage() {
    this.dashboardHeroes = JSON.parse(localStorage.getItem("last heroes"));
  }
}
