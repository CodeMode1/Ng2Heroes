import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { HeroService } from './hero-service';
import { Hero } from './hero';

@Component({
  moduleId: module.id,
  selector: 'app-hero-detail',
  template: `
     <div *ngIf="hero">
        <h2>{{hero.name}} details!</h2>
        <div>
          <label>id: </label>{{hero.id}}
        </div>
        <div>
          <label>name: </label>
          <input [(ngModel)]="hero.name" placeholder="name"/>
        </div>
     </div>
     <button (click)="goBack()">Back</button>
  `,
  styleUrls: ['hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(private activatedRoute: ActivatedRoute, private heroService: HeroService, private router: Router) {
   }

  ngOnInit(): void {
    this.activatedRoute.params.forEach((params: Params) => {
      let id = +params['id'];
      console.log('Id: ' + id);
      this.heroService.getHero(id)
          .then(hero => this.hero = hero);
    });
  }

  goBack(){
    this.router.navigate(['']);

  }

}
