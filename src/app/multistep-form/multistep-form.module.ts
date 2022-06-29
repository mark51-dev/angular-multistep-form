import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MultistepFormRoutingModule } from './multistep-form-routing.module';
import { StepOneComponent } from './components/step-one/step-one.component';
import { StepTwoComponent } from './components/step-two/step-two.component';
import { StepThreeComponent } from './components/step-three/step-three.component';
import { MultistepFormContainerComponent } from './containers/multistep-form-container/multistep-form-container.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CustomSelectComponent } from './components/custom-select/custom-select.component';


@NgModule({
  declarations: [
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    MultistepFormContainerComponent,
    CustomSelectComponent,
  ],
  exports: [
    StepOneComponent,
    MultistepFormContainerComponent
  ],
  imports: [
    CommonModule,
    MultistepFormRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MultistepFormModule { }
