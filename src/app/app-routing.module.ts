import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarteComponent } from './carte/carte.component';
import { HomeComponent } from './home/home.component';
import { LocalisationComponent } from './localisation/localisation.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'carte', component: CarteComponent },
  { path: 'localisation', component: LocalisationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
