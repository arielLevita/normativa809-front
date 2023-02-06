import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Pregre } from 'src/app/pregres';
import { PregreService } from 'src/app/services/pregre.service';

@Component({
  selector: 'app-detalle-pregunta',
  templateUrl: './detalle-pregunta.component.html',
  styleUrls: ['./detalle-pregunta.component.css']
})
export class DetallePreguntaComponent implements OnInit {
  @Input() pregre!: Pregre;

  constructor(
    private route: ActivatedRoute,
    private pregreService: PregreService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getPregre();
  }

  getPregre(): void {
    const id:any = +this.route.snapshot.paramMap.get('id')!;
    this.pregreService.getPregre(id)
    .subscribe(pregre => this.pregre = pregre);
  }
  
  goBack(): void {
    this.location.back();
  }

}
