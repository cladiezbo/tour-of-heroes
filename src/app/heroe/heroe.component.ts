import { Component, OnInit, Input } from '@angular/core';
import { Heroe } from './heroe.model';
import { DashboardServerService } from '../dashboard/dashboard-server.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  
  @Input() heroe: Heroe;

  constructor(private dashboardService: DashboardServerService) { }

  ngOnInit() {
  }
  notifyDashboard(){
    this.dashboardService.addHero(this.heroe);
  }

}
