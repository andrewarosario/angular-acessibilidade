import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as uuid from 'uuid';

enum YesNoButtonGroupOptions {
  Yes = 'yes',
  No = 'no'
}

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => YesNoButtonGroupComponent)
    }
  ]
})
export class YesNoButtonGroupComponent implements ControlValueAccessor {

  @Input() public value: YesNoButtonGroupOptions = null;
  @Input() public label = '';
  @Output() public valueChange = new EventEmitter<YesNoButtonGroupOptions>();
  public id: string;
  public options = YesNoButtonGroupOptions;
  public onChange = (value: YesNoButtonGroupOptions) => { };
  public onTouched = () => {};

  constructor() {
    this.id = `yes-no-button-group-${uuid.v1()}`;
  }

  public writeValue(value: YesNoButtonGroupOptions): void {
    this.value = value;
    this.onChange(this.value);
    this.valueChange.emit(this.value);
  }

  public registerOnChange(fn: (value: YesNoButtonGroupOptions) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  public activate(value: YesNoButtonGroupOptions) {
    this.writeValue(value);
  }

}
