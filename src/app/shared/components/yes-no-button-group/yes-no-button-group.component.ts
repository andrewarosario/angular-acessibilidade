import { Component, Input, OnInit } from '@angular/core';

enum YesNoButtonGroupOptions {
  Yes = 'yes',
  No = 'no'
}

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss']
})
export class YesNoButtonGroupComponent implements OnInit {

  @Input() public value: YesNoButtonGroupOptions = null;
  @Input() public label = '';
  public options = YesNoButtonGroupOptions;

  constructor() { }

  ngOnInit(): void {
  }

  public activate(value: YesNoButtonGroupOptions) {
    this.value = value;
  }

}
