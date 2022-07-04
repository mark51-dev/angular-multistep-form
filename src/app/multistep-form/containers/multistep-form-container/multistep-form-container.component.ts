import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {countrySelect} from "../../shared/model/country.interface";

@Component({
  selector: 'app-multistep-form-container',
  templateUrl: './multistep-form-container.component.html',
  styleUrls: ['./multistep-form-container.component.css']
})
export class MultistepFormContainerComponent implements OnInit {
  form: FormGroup;
  currentStep: number = 1;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      stepOne: this.fb.group({
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required, Validators.minLength(5)]],
        password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)]],
        email: ['', [Validators.required]],
        gender: ['male'],
        isMarried: [false],
        country: this.fb.group({
          selectedCountry: ['']
        })
      }),
      stepTwo: this.fb.group({
        selectedLanguage: ''
      }),
      stepThree: this.fb.group({
        listOfLanguages: this.fb.array([
          this.fb.group(this.fb.control('JS')),
          this.fb.group(this.fb.control('C++')),
          this.fb.group(this.fb.control('Assembler'))
        ])
      })
    })
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

  get languages(): string[] {
    return ['C++', 'JS', 'Assembler'];
  }

  get languagesList(): FormArray {
    return this.form.get('stepThree.listOfLanguages') as FormArray;
  }

  addNewItem(text: string): void {
    this.languagesList.insert(this.languagesList.length, this.fb.group(this.fb.control(text)));
  }

  increment(): void {
    this.currentStep++;
  }

  decrement(): void {
    this.currentStep--;
  }
}
