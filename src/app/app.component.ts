import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ang-modal';
   isModalOpen: boolean = false;

    openModal(): void {
      console.log("openModal")
      this.isModalOpen = true;
    }

    onModalClose(): void {
        // Handle the modal close event here
        console.log('Modal closed');
      }


       handleModalClose(): void {
          // Handle the event when the modal is closed
           this.isModalOpen = false;
           console.log('Modal closed');
        }

}
