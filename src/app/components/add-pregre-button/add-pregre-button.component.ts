import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-pregre-button',
  templateUrl: './add-pregre-button.component.html',
  styleUrls: ['./add-pregre-button.component.css']
})
export class AddPregreButtonComponent implements OnInit {
  @Input() text: string = "";
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.btnClick.emit();
  }
}
