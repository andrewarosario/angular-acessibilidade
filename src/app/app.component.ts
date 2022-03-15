import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'a11y-p1';
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }
  
  ngOnInit() {
    this.form = this.formBuilder.group({
      yesNoAnswer: [null]
    })
  }

  submit(): void {
    console.log(this.form.value);
  }
}
