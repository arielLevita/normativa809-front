import { Component, OnInit, Input } from '@angular/core';

import { Pregre } from 'src/app/pregres';

@Component({
  selector: 'app-detalle-pregunta',
  templateUrl: './detalle-pregunta.component.html',
  styleUrls: ['./detalle-pregunta.component.css']
})
export class DetallePreguntaComponent implements OnInit {
  @Input() pregre!: Pregre;

  constructor() { }

  ngOnInit(): void {
  }

}
