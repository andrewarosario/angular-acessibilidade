import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
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

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  public showModal(): void {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User Details'
    });
  }

}
