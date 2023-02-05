import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Pregre } from '../pregres';
import { PREGRES } from '../mock-pregres';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PregreService {

  constructor(private messageService: MessageService) { }

  getPregres(): Observable<Pregre[]> {
    // TODO: send the message _after_ fetching the pregres
    this.messageService.add('PregreService: fetched pregres');
    return of(PREGRES);
  }
}
