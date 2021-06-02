import { Component, OnInit } from '@angular/core';
import { Realisation } from '../shared/realisation/realisation.model';
import { RealisationService } from '../shared/realisation/realisation.service';
import { FooterComponent} from '../footer/footer.component'

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.css']
})
export class ProductionComponent implements OnInit {

  // Par défault, realisation est le tableau de la class Realisation
  realisation: Realisation[] | null = [];

  // On importe le service RealisationService dans le constructor
  constructor(private realisationService:RealisationService) { }

    // On utilise la méthode findAll du service RealisationService pour récupérer tous les éléments et les afficher
    ngOnInit(): void {
    this.realisationService.findAll()
    .subscribe(reaResponse=> this.realisation = reaResponse.body);
  }

}
