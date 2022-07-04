import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {countrySelect} from "../../shared/model/country.interface";

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepOneComponent implements OnInit {
  @Input() parent: FormGroup;
  @Input() listOfCountries: countrySelect[];

  constructor() {
  }

  ngOnInit(): void {
  }

  checkPassword(): boolean | undefined {
    console.log((
      this.parent.get(`stepOne.password`)?.touched &&
      this.parent.get(`stepOne.password`)?.hasError('pattern')
    ));
    return (
      this.parent.get(`stepOne.password`)?.hasError('pattern')
    );
  }

  required(name: string): boolean | undefined {
    return (
      this.parent.get(`stepOne.${name}`)?.hasError('required') &&
      this.parent.get(`stepOne.${name}`)?.touched
    );
  }

}
