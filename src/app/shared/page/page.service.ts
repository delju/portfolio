import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Page } from './page.model';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  // Ce service sera utilisé sur la page d'accueil et dans le navigateur

  constructor() {}

  // La méthode findAll est un observable qui va stocker dans une constante page un tableau avec les nouveaux instances de la class Page
  findAll(): Observable<HttpResponse<Page[]>>{
    const page= [
      new Page (1, "Qui suis-je?", "/presentation", "link1", "textLink1"),
      new Page (2, "Services", "/service", "link2", "textLink2"),
      new Page (3, "Réalisations", "/production", "link3", "textLink3"),
      new Page (4, "Contact", "/contact", "link4", "textLink4")
    ];
    // On retourne un  nouvel observable
    return of(new HttpResponse({body:page}));
  };


}
