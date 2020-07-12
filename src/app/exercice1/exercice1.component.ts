import { Component, OnInit } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  toto: string = 'Toto';
  tati: string = 'Tati';
  parDefaut = this.toto;
  bonjour:string = '';
  foo: string = '';
  //
  public clickMoi(message: string): string {
    this.bonjour = message;
    return this.bonjour;
  }

  constructor() {
// Fonction qui changera la couleur de fond et le texte par défaut au bout de 3 secondes de l' input
    setTimeout(() => {
      this.foo = `background-color: #E9BDBD`;
      this.parDefaut = this.tati;
    }, 3000);

  }
  ngOnInit(): void {

  }

}
