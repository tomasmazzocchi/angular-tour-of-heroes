import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './messages.service';

@Injectable()
export class HeroService {

    constructor(private messageService: MessageService) { }

    getHero(id: number): Observable<Hero> {
      this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
    }

    getHeroes(): Observable<Hero[]> {
      this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
    }

}
