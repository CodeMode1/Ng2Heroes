import { Injectable } from '@angular/core';
import 'rxjs/RX';
import { Http, Headers } from '@angular/http';

import { HEROES } from './shared';
import { Hero } from './hero';

@Injectable()
export class HeroService {
    heroes = HEROES;

    constructor(private http: Http){}

    getHeroes(): Promise<Hero[]>{
        return Promise.resolve(this.heroes);
    }

    getHero(id: number): Promise<Hero>{
        return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
    }

    handleError(error: any){
        console.log(error.json().error);
    }

    create(name: string): Promise<Hero>{
        let id: number = this.heroes.length + 1;
        return Promise.resolve({id: id, name: name });
    }

}
