import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {countrySelect} from "../../shared/model/country.interface";

@Component({
  selector: 'app-multistep-form-container',
  templateUrl: './multistep-form-container.component.html',
  styleUrls: ['./multistep-form-container.component.css']
})
export class MultistepFormContainerComponent implements OnInit {
  // @ts-ignore
  form: FormGroup;
  currentStep: number = 1;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      stepOne: this.fb.group({
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.required]],
        gender: ['male'],
        isMarried: [false],
        country: this.fb.group({
          selectedCountry: ['']
        })
      }),
      stepTwo: this.fb.group({
        programmingLanguages: [{
          defaultLanguage: 'JS',
          listOfLanguages: ['C++', 'JS', 'Assembler']
        }]
      }),
      stepThree: this.fb.group({
        listOfLanguages: this.fb.array([
          this.fb.group(this.fb.control('JS')),
          this.fb.group(this.fb.control('C++')),
          this.fb.group(this.fb.control('Assembler'))
        ])
      })
    })

    console.log(this.allStepsCount);
  }

  get allStepsCount(): number {
    return Object.keys(this.form.controls).length;
  }

  get listOfCountries(): countrySelect[] {
    return [
      {
        value: 'usa',
        name: 'USA'
      },
      {
        value: 'ukraine',
        name: 'Ukraine'
      },
      {
        value: 'france',
        name: 'France'
      }
    ];
  }

  get languagesList(): FormArray {
    return this.form.get('stepThree.listOfLanguages') as FormArray;
  }

  addNewItem(text: string) {
    console.log(text);
    this.languagesList.insert(this.languagesList.length, this.fb.group(this.fb.control(text)));
  }

  increment() {
    this.currentStep++;
  }

  decrement() {
    this.currentStep--;
  }
}
