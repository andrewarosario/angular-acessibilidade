import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

enum YesNoButtonGroupOptions {
  Yes = 'yes',
  No = 'no'
}

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss']
})
export class YesNoButtonGroupComponent implements ControlValueAccessor {

  @Input() public value: YesNoButtonGroupOptions = null;
  @Input() public label = '';
  @Output() public valueChange = new EventEmitter<YesNoButtonGroupOptions>();
  public options = YesNoButtonGroupOptions;
  public onChange = (value: YesNoButtonGroupOptions) => { };
  public onTouched = () => {};

  public writeValue(value: YesNoButtonGroupOptions): void {
    this.value = value;
    this.onChange(this.value);
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
    this.value = value;
    this.valueChange.emit(value);
  }

}
