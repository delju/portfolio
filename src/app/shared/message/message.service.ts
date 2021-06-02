import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Message } from './message.model';
import { SERVER_LOCATION} from '../../../global';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  // On donne le lien de l'API dans une variable
private readonly SERVEUR_URL = SERVER_LOCATION + "api.php";

// On crée un nouvel HttpHeaders qui accepte le json
private httpHeaders = new HttpHeaders({
'Content-Type': 'application/json',
Accept: 'application/json'
}) ;

// On import la class HttpClient
constructor(private httpClient:HttpClient) {
}

// La méthode findAll va retourner une observable qui va récupérer tous les éléments du tableau de la class Message dans le serveur
findAll(searchParams: any): Observable<HttpResponse<Message[]>>{
  return this.httpClient.get<Message[]>(this.SERVEUR_URL, {params: searchParams, headers: this.httpHeaders, observe: 'response'})
}

// La méthode create va envoyer les informations récupérer au serveur
create(message: Message): Observable<HttpResponse<Message>> {
return this.httpClient.post<Message>(this.SERVEUR_URL, message, {observe:'response'});
 }
}


