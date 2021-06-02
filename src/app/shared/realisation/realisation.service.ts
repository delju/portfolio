import { Injectable } from '@angular/core';
import { observable, Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Realisation } from './realisation.model';

@Injectable({
  providedIn: 'root'
})

export class RealisationService {
  // Ce service sera utilisé sur la page réalisation

  constructor() {}

  // La méthode findAll est un observable qui va stocker dans une constante realisation un tableau avec les nouveaux instances de la class Realisation
  findAll(): Observable<HttpResponse<Realisation[]>>{

  const realisation =[
  new Realisation (1, "Colonnes", "Réalisation de colonnes en plusieurs modules: div classique, Grid et Flexbox", "/assets/liens/Colonnes.pdf"),
  new Realisation (2, "Health Food", "Réalisation d'un site statique sur le thème de la cuisine avec des animations sur liens", "/assets/liens/health-food.pdf"),
  new Realisation (3, "WebDesign", "Réalisation d'un site statique sur les div", "/assets/liens/exerciceWebdesign.pdf"),
  new Realisation (4, "Commentaires", "Réalisation d'un site statique personnel, en s'exerçant sur la rédaction de commentaires","/assets/liens/exercicecommentaire.pdf"),
  new Realisation (5, "Exercice Portfolio", "Réalisation de site statique sur le thème du Portfolio", "/assets/liens/exerciceportfolio.pdf")

];
// Retourne un nouvel observable du tableau realisation dans body
return of(new HttpResponse({body:realisation}));
}
}
