import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesListComponent } from './heroe/heroes-list/heroes-list.component';
import { HeroesEditComponent } from './heroe/heroes-edit/heroes-edit.component';
import { HeroeComponent } from './heroe/heroe.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    HeroesListComponent,
    HeroesEditComponent,
    HeroeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
