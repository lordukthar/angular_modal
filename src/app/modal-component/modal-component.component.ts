import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.scss']
})
export class ModalComponentComponent {
    @Input() isOpen: boolean = false;
    @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();


 onCloseModal(): void {
    console.log("onCloseModal")
    this.isOpen = false;
    this.closeModal.emit();
  }


 close(): void {
    this.closeModal.emit();
  }

}
