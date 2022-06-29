import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.css']
})
export class StepTwoComponent implements OnInit {
  @Input()
  // @ts-ignore
  parent;
  // @ts-ignore
  constructor() { }

  ngOnInit(): void {

  }
}
