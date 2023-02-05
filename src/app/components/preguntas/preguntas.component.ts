import { Component, OnInit } from '@angular/core';
import { Pregre } from 'src/app/pregres';
import { PREGRES } from 'src/app/mock-pregres';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {

  pregres = PREGRES;
  selectedPregre!: Pregre;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(pregre: Pregre): void {
    this.selectedPregre = pregre;
  }
}
