import { Component, OnInit, DoCheck} from '@angular/core';

import { HeroService } from './hero-service';
import { Hero } from './hero';

@Component({
  moduleId: module.id,
  selector: 'app-heroes',
  templateUrl: 'heroes.component.html',
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
    a{
      text-decoration:none
    }
    button {
      margin-top: 20px;
      font-family: Arial;
      background-color: #eee;
      border: none;
      padding: 5px 10px;
      border-radius: 4px;
      cursor: pointer; cursor: hand;
    }
    button:hover {
      background-color: #cfd8dc;
    }
    button:disabled {
      background-color: #eee;
      color: #ccc; 
      cursor: auto;
    }
  `]
})
export class HeroesComponent implements OnInit, DoCheck{
  title: string = 'My Heroes';
  heroes : Hero[];
  selectedHero: Hero = {id: 4, name: 'ted'};

  constructor(private heroService: HeroService) { }

  ngOnInit() {
   this.getHeroes();
  }

  ngDoCheck(){
    //console.log("do check "+ this.selectedHero.name);
  }

  onSelect(hero: Hero){
    this.selectedHero = hero;
  }

  getHeroes():void{
     this.heroService.getHeroes().then(heroes => this.heroes = heroes)
  }

  add(name: string): void{
    name = name.trim();
    if(!name){
      return;}
    this.heroService.create(name)
                    .then(hero => { 
                      this.heroes.push(hero); 
                    }); 
  }

}
