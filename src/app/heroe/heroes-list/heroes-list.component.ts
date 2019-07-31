import { Component, OnInit } from '@angular/core';

import { HeroesServerService } from '../heroes-server.service';
import { Heroe } from '../heroe.model';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  heroes: Array<Heroe>;

  constructor(private heroeService: HeroesServerService) { }

  ngOnInit() {
    this.heroes = this.heroeService.getHeroes();
  }

}
