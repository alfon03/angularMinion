import { Routes } from '@angular/router';
import { MinionCardComponent } from './minions/minions.component';
import { WelcomeComponent } from './welcome/welcome.component'; 
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MinionsInfoComponent } from './minions-info/minions-info.component';


export const routes: Routes = [
    {path: 'minions', component: MinionCardComponent},
    {path: 'welcome', component: WelcomeComponent},
    { path: 'minionsInfo/:id', component: MinionsInfoComponent },
    { path: 'minions/:search', component: MinionsInfoComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];
