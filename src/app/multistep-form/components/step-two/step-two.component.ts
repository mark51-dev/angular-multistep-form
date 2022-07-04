import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepTwoComponent implements OnInit {
  @Input() parent: FormGroup;
  @Input() languages: string[];

  constructor() {
  }

  ngOnInit(): void {
  }
}
