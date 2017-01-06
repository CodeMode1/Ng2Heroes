import { Routes, RouterConfig, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';

const routes: RouterConfig = 
    [
        { path: 'dashboard', component: DashboardComponent},
        { path: 'heroes', component: HeroesComponent},
        { path: 'heroes/:id', component: HeroDetailComponent},
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    /*
    { path: 'heroes', component: HeroesComponent, children:[
        { path: ':id', component: HeroDetailComponent}
    ]
    }
    */
    ];

export const routing = RouterModule.forRoot(routes);