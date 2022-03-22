import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fade } from '../shared/animations/fade';
import { ModalRef } from '../shared/components/modal/models/modal-ref';
import { ModalService } from '../shared/components/modal/services/modal.service';

@Component({
  selector: 'app-accessible-modal',
  templateUrl: './accessible-modal.component.html',
  styleUrls: ['./accessible-modal.component.scss'],
  animations: [fade]
})
export class AccessibleModalComponent implements OnInit {
  @ViewChild('modal') public modalTemplateRef: TemplateRef<any>;
  firstName = 'Andrew';
  public modalRef: ModalRef;
  public info = false;
  public form: FormGroup;

  constructor(
    private modalService: ModalService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['Andrew', Validators.required],
      surname: ['', Validators.required],
      age: ['', Validators.required],
      info: [false],
    })
  }

  public showModal(): void {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User Details'
    });
  }

  public submit(): void {
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);
    this.modalRef.close();
  }

}
