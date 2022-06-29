import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {countrySelect} from "../../shared/model/country.interface";

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css']
})
export class StepOneComponent implements OnInit {
  @Input()
  // @ts-ignore
  parent: FormGroup;
  @Input()
  // @ts-ignore
  listOfCountries: countrySelect[];
  constructor() { }

  ngOnInit(): void {
  }

}
