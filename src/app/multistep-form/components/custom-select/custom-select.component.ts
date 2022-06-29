import {Component, forwardRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

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
  @Input()
  // @ts-ignore
  parent;
  value: any;
  listIsOpen: boolean = false;
  // @ts-ignore
  listOfItems: string[];
  @ViewChild('selectInput', {static: true})
  // @ts-ignore
  selectInput: ElementRef;
  placeholder: string = 'Select program language';

  constructor(private renderer: Renderer2) { }

  // @ts-ignore
  onChange: Function;
  // @ts-ignore
  onTouched: Function;

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
    const {defaultLanguage, listOfLanguages} = obj;
    this.value = defaultLanguage;
    this.listOfItems = listOfLanguages;
  }

  toggleList(): void {
    this.listIsOpen = !this.listIsOpen;
  }

  selectItem(idx: number) {
    let selectedItem = this.listOfItems[idx];
    this.value = selectedItem;
    this.onChange();
    this.onTouched();
  }
}
