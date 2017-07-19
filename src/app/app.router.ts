import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ExploreComponent } from './explore/explore.component';
import { GenresComponent } from './genres/genres.component';
import { PoetryComponent } from './poetry/poetry.component';
import { BlogComponent } from './blog/blog.component';
import { TopPicksComponent } from './top-picks/top-picks.component';
import { ClassicsComponent } from './classics/classics.component';
import { MagazinesComponent } from './magazines/magazines.component';


export const router: Routes = [
	{ path: '', redirectTo: 'explore', pathMatch: 'full' },
	{ path: 'explore', component: ExploreComponent },
	{ path: 'explore/genres', component: GenresComponent },
	{ path: 'explore/poetry', component: PoetryComponent },
	{ path: 'explore/blog', component: BlogComponent },
	{ path: 'explore/top-picks', component: TopPicksComponent },
	{ path: 'explore/classics', component: ClassicsComponent },
	{ path: 'explore/magazines', component: MagazinesComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);