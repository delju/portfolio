import { Component, OnInit } from '@angular/core';
import { Page } from '../shared/page/page.model';
import { PageService } from '../shared/page/page.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

// Par défault, page est le tableau de la class Page
  page :Page[] | null= [];

  // On importe le service PageService dans le constructor
  constructor(private pageService: PageService) { }

  // On utilise la méthode findAll du service PageService pour récupérer tous les éléments et les afficher
  ngOnInit(): void {
    this.pageService.findAll()
    .subscribe(pageResponse => this.page = pageResponse.body)
  }

}
