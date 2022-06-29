import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.css']
})
export class StepThreeComponent implements OnInit {
  @Input()
  // @ts-ignore
  parent;
  // @ts-ignore
  value: string;

  @Output() newItem: EventEmitter<string> = new EventEmitter();
  constructor() { }

  get listOfLanguages() {
    return this.parent.get('stepThree.listOfLanguages').value;
  }

  ngOnInit(): void {
  }

  textInput(): void {
    this.newItem.emit(this.value);
    this.value = '';
  }
}
