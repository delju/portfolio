import { Component, OnInit } from '@angular/core';
import { Ser } from '../shared/service/service.model';
import { SerService } from '../shared/service/service.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  // Par défault, ser est le tableau de la class Ser
  ser: Ser[] =[];

    // On importe le serve SerService dans le constructor
  constructor(private serService:SerService) { }

      // On utilise la méthode findAll du service SerService pour récupérer tous les éléments et les afficher
  ngOnInit(): void {
    this.serService.findAll()
    // Attention, condition: il faut que serResponse ne soit pas null pour être afficher
    .subscribe(serResponse => this.ser = serResponse.body !==null ? serResponse.body : []);
  }

}
