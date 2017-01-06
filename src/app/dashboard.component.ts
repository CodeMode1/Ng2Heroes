import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero-service';

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  template: `
    <h3>Top Heroes</h3>
    <div class="grid grid-pad">
      <div *ngFor="let hero of heroes" (click)="gotoDetail(hero)" class="col-1-4">
        <div class="module hero">
          <h4>{{hero.name}}</h4>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private router: Router) { }

  ngOnInit() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1,5));
  }

  gotoDetail(hero: Hero){
    this.router.navigate(['/heroes', hero.id]);
  }

}
