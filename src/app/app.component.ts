import { Component, ViewChild, ElementRef, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, AfterViewChecked {

  @ViewChild('myCanvas', { static: false }) canvasRef?: ElementRef<HTMLCanvasElement>;

ngAfterViewChecked() : void {

 console.log("ngAfterViewChecked")
 if (this.canvasRef) {
      console.log("canvasRef")
       const canvas = this.canvasRef.nativeElement;
        if (canvas) {
         console.log("canvas")
        const ctx = canvas.getContext('2d');
      if (ctx) {
      console.log("ctx")
        ctx.font = 'bold 24px Arial';
        ctx.fillText('Hello', 10, 50);

      }}}
}

ngAfterViewInit(): void {
  console.log("ngAfterViewInit")

   if (this.canvasRef) {
      console.log("canvasRef")
       const canvas = this.canvasRef.nativeElement;
        if (canvas) {
         console.log("canvas")
        const ctx = canvas.getContext('2d');
      if (ctx) {
      console.log("ctx")
        ctx.font = 'bold 24px Arial';
        ctx.fillText('Hello', 10, 50);

      }}}

}
hideCanvas() {
this.showCanvas = false
}


openCanvas() {
 if (this.canvasRef) {
      console.log("canvasRef")
       const canvas = this.canvasRef.nativeElement;
        if (canvas) {
         console.log("canvas")
        const ctx = canvas.getContext('2d');
      if (ctx) {
      console.log("ctx")
        ctx.font = 'bold 24px Arial';
        ctx.fillText('Hello', 10, 50);

      }}}

  this.showCanvas = true
console.log("openCanvas")

}

  title = 'ang-modal';
   isModalOpen: boolean = false;
    showCanvas = false;

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
