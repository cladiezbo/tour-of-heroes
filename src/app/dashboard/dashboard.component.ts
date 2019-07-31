import { Component, OnInit } from '@angular/core';
import { Heroe } from '../heroe/heroe.model';
import { Subscription } from 'rxjs';
import { DashboardServerService } from './dashboard-server.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Array<Heroe> = [];
  private subscription: Subscription;

  constructor(private dashboardService: DashboardServerService) { }

  ngOnInit() {
    this.heroes = this.dashboardService.getHeroes();
    this.subscription = this.dashboardService.dashboardChanged
      .subscribe(
        (heroes: Heroe[]) => {
          this.heroes = heroes;
        }
      );
  }

  heroesIsEmpty(){
    return this.heroes === null ? true : false;
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

}
