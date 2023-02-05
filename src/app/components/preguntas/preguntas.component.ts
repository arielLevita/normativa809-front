import { Component, OnInit } from '@angular/core';
import { Pregre } from 'src/app/pregres';
import { PregreService } from 'src/app/services/pregre.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {

  selectedPregre!: Pregre;
  pregres: Pregre[] = [];

  constructor(private pregreService: PregreService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getPregres();
  }

  onSelect(pregre: Pregre): void {
    this.selectedPregre = pregre;
    this.messageService.add(`PreguntasComponent: Selected pregre id=${pregre.id}`);
  }

  getPregres(): void {
    this.pregreService.getPregres()
        .subscribe((pregres:any) => this.pregres = pregres);
  }
}
