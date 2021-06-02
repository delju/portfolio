import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ProductionComponent } from './production/production.component';
import { ServiceComponent } from './service/service.component';


// Chaque route associe un chemin et le component que l'on veut afficher
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'presentation',
    component: PresentationComponent
  },
  {
    path: 'service',
    component: ServiceComponent
  },
  {
    path: 'production',
    component: ProductionComponent
  },
  {

    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule],
   declarations: [
  ]
})
export class AppRoutingModule { }
