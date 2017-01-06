import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { routing } from './app.routes';
//import { InMemoryDataService }  from './in-memory-data.service';


import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';

import { HeroService } from './hero-service';

@NgModule({
declarations: [AppComponent, HeroesComponent, HeroDetailComponent, DashboardComponent],
imports: [BrowserModule, FormsModule, routing, HttpModule],
bootstrap: [AppComponent],
providers: [HeroService]
})
export class AppModule {}
