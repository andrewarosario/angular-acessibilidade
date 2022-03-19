import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ModalRef, ModalService } from '../shared/components/modal/services/modal.service';

@Component({
  selector: 'app-accessible-modal',
  templateUrl: './accessible-modal.component.html',
  styleUrls: ['./accessible-modal.component.scss']
})
export class AccessibleModalComponent implements OnInit {
  @ViewChild('modal') public modalTemplateRef: TemplateRef<any>;
  firstName = 'Andrew';
  public modalRef: ModalRef;

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  public showModal(): void {
    this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User Details'
    });
  }

}
