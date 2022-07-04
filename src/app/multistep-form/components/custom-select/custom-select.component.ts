import {Component, ElementRef, forwardRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR} from "@angular/forms";

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CustomSelectComponent),
  multi: true
};

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.css'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class CustomSelectComponent implements OnInit, ControlValueAccessor {
  @Input() parent: FormGroup;
  @Input() languages: string[];
  value: any;
  listIsOpen: boolean = false;
  @ViewChild('selectInput', {static: true}) selectInput: ElementRef;
  placeholder: string = 'Select program language';
  defaultLanguage: string = 'C++';

  onChange: Function;
  onTouched: Function;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (e.target !== this.selectInput.nativeElement) {
        this.listIsOpen = false;
      }
    });
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any): void {
    this.value = this.defaultLanguage;
  }

  toggleList(): void {
    this.listIsOpen = !this.listIsOpen;
  }

  selectItem(idx: number): void {
    let selectedItem = this.languages[idx];
    this.value = selectedItem;
    this.onChange(this.value);
    this.onTouched();
  }
}
