import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ser} from './service.model';

@Injectable({
  providedIn: 'root'
})
export class SerService {

  // Ce service est utilisé pour la page service
constructor( ) { }

  // La méthode findAll est un observable qui va stocker dans une constante ser un tableau avec les nouveaux instances de la class Ser

findAll(): Observable<HttpResponse<Ser[]>>{
const ser = [
new Ser (1, "HTML et CSS", "Création de site web statique: Langage HTML 5 et langage CSS3 ", "assets/img/site%20web.png"),
new Ser (2, "SQL", "Création et manipulation d'une base de données grâce au langage MySQL", "assets/img/database.png"),
new Ser (3, "Javascript", "Langage Javascript: manipulation du DOM", "assets/img/javascript.png"),
new Ser (4, "PHP", "Langage PHP: Création d'un CRUD et de formulaire", "assets/img/php.png")
];
// On retourne un nouvel observable de la constante ser dans le body
return of(new HttpResponse({body:ser}));
}
}
