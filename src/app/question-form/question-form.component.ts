import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }
  
  ngOnInit() {
    this.form = this.formBuilder.group({
      yesNoAnswer: [{
        value: null
      }]
    })
  }

  submit(): void {
    console.log(this.form.value);
  }

}
