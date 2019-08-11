import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryListComponent } from './country-list/country-list.component';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';


const routes: Routes = [
  {path: 'countries', component: CountryListComponent},
  {path: 'favorites', component: FavoriteListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// Creating an array of all ROuting components and export it for AppModule (to avoid duplication and redundancy)
export const routingComponents = [CountryListComponent, FavoriteListComponent];
