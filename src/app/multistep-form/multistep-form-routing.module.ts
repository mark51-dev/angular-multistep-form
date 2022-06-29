import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  MultistepFormContainerComponent
} from "./containers/multistep-form-container/multistep-form-container.component";

const routes: Routes = [
  {
    path: '',
    component: MultistepFormContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MultistepFormRoutingModule { }
