import { Component, ViewChild, Input, Output, EventEmitter,ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.scss']
})
export class ModalComponentComponent {
    @Input() isOpen: boolean = false;
    @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();
     @Input() message?: string;


  @Input() apa: () => string;

     @ViewChild('modalCanvas', { static: true }) modalCanvas?: ElementRef<HTMLCanvasElement>;

constructor() {
  this.apa = () => 'ccc';
}

 onCloseModal(): void {
    console.log("onCloseModal")
    this.isOpen = false;
    this.closeModal.emit();
  }


 close(): void {
    this.closeModal.emit();
  }


open(canvas: HTMLCanvasElement): void {
    // Use the canvas element in the modal
    if (this.modalCanvas) {
      const modalCtx = this.modalCanvas.nativeElement.getContext('2d');
      if (modalCtx) {
        modalCtx.drawImage(canvas, 0, 0);
      }
    }

  }

}
