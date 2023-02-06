import { Component, OnInit } from '@angular/core';
import { Pregre } from 'src/app/pregres';
import { PregreService } from 'src/app/services/pregre.service';

@Component({
  selector: 'app-seccion-ingreso',
  templateUrl: './seccion-ingreso.component.html',
  styleUrls: ['./seccion-ingreso.component.css']
})
export class SeccionIngresoComponent implements OnInit {
  pregres: Pregre[] = [];

  constructor(private pregreservice: PregreService) { }

  
  ngOnInit(): void {
    this.getPregres();
  }

  getPregres(): void {
    this.pregreservice.getPregres()
    .subscribe(pregres => this.pregres = pregres.filter(x => x.seccion === "ingreso"));
  }

}
