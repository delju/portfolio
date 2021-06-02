import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message } from '../shared/message/message.model';
import { MessageService } from '../shared/message/message.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // le formulaire messageForm est un FormGroup (class pour les REACTIVE forms )
  messageForm: FormGroup;
  // message est de la class Message
  message: Message;
  // Par défault, le successMessage est faux (pour qu'il ne s'affiche pas)
  successMessage: boolean = false;

// On importe le service MessageService et le FormBuilder dans le consctructor
  constructor(private formBuilder:FormBuilder, private messageService:MessageService) { }


  ngOnInit(): void {
this.initForm();
  }


  initForm(): void{
    this.messageForm = this.formBuilder.group({
      // Le nom est vide par défault, mais il est requis pour la validation du formulaire
      name:['', Validators.required],
      // Le prénom est vide par défault, il n'y a pas de validation nécessaire
      firstname:[''],
      // Le mail est vide par défault, mais il est requis pour une validation et il doit être un e-mail
      mail:['', [Validators.email, Validators.required]],
      // Le mobile Idem que le prénom.
      mobile:[''],
      // Le message est vide par défault, mais il est obligatoire et doit être d'une longueur de minimum 10 caractères
      message:['', [Validators.required, Validators.minLength(10)]]
    });
  }

  // Fonction de la creation des messages
  createMessage(): void{
    // Si le formulaire (messageForm) est valide, alors ont crée un nouveau message dans une constante
if (this.messageForm.valid){
  const message = new Message(
    undefined,
    this.messageForm.value.name,
    this.messageForm.value.firstname,
    this.messageForm.value.mail,
    this.messageForm.value.mobile,
    this.messageForm.value.message,
    new Date()
  );

  // On envoie la constante message au serveur grâce à la fonction create du service messageService
  this.messageService.create(message)
  // A cet instant, on affiche un message d'envoie (successMessage) et on réinitialise le formulaire (messageForm.reset())
    .subscribe(
      ()=>{
        this.successMessage= true;
        this.messageForm.reset();
      }
    );

    // Permet de voir dans la console le message envoyé.
  console.log('nouveau message', message);
  };

  }
}
