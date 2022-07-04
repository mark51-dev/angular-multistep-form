import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepThreeComponent implements OnInit {
  @Input() parent: FormGroup;
  value: string;

  @Output() newItem: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  get listOfLanguages(): FormArray[] {
    return this.parent.get('stepThree.listOfLanguages')?.value;
  }

  ngOnInit(): void {
  }

  textInput(): void {
    this.newItem.emit(this.value);
    this.value = '';
  }
}
