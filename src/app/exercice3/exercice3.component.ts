import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.component.html',
  styleUrls: ['./exercice3.component.css']
})
export class Exercice3Component implements OnInit {

  public status: boolean = true;
  //Variable de comparaison de l'etat de la variable status
  statusCompare: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }


  onClick(): void {
   /* Méthode de comparaison de la variable status,
    si status et different de statusCompare alors on initialise la variable
    status à false pour afficher p2 sinon si le resultat de la comparaison fausse alors on initialise la variable
    status à true et cela affiche p1
    */
    if (this.status !== this.statusCompare) {
      this.status = false;
    } else {
      this.status = true;
    }

    }


}
