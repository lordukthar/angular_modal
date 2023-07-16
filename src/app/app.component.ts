import { Component, ViewChild, ElementRef, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import {ModalComponentComponent} from './modal-component/modal-component.component'
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, AfterViewChecked, OnDestroy {

  @ViewChild('myCanvas', { static: false }) canvasRef?: ElementRef<HTMLCanvasElement>;
    myMessage: string = "Hello from parent component";
    private subscription: Subscription;

    currentState: string = 'state1'; // Initial state
     currentAsyncState: BehaviorSubject<string> = new BehaviorSubject<string>('state11'); // Initial state


    ngOnDestroy() : void {
     this.subscription.unsubscribe();
    }


    // Define state change methods
      setState11(): void {
        this.currentAsyncState.next('state11');
      }

      setState12(): void {
        this.currentAsyncState.next('state12');
      }

      setState13(): void {
        this.currentAsyncState.next('state13');
      }

setState1(): void {
    this.currentState = 'state1';
  }

  setState2(): void {
    this.currentState = 'state2';
  }

  setState3(): void {
    this.currentState = 'state3';
  }


  constructor(private modalComponent: ModalComponentComponent) {
        this.subscription = this.currentAsyncState.subscribe((state) => {
        console.log('Foo current async', state)
        });
  }


    doSomeStuff(): string {
      // Perform some logic
      console.log("doing stuff")
      return 'Hello from doSomeStuff()';
    }

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

affenRonk = "affen"

waitForPromise(): void{

this.delayedMethod().then((result) => {
  this.affenRonk = result;
  console.log('Resolved value:', this.affenRonk);
});

}


get waitForResolve(): string {



    return "get waitForResolve";
}




delayedMethod(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Resolve the promise with the string value after 3 seconds
      resolve('Resolved string value');
    }, 3000);
  });
}


waitForCanvasPromise(): void{

this.delayedCanvas().then((result) => {
 // this.affenRonkCanvas = result;
  console.log('Resolved value:', result);
  this.showCanvas = true
});
}

 doubleCanvasSize(): void {
  if (this.canvasRef) {
    const canvas = this.canvasRef.nativeElement;
    canvas.width *= 2;
    canvas.height *= 2;
  }}


delayedCanvas(): Promise<ElementRef<HTMLCanvasElement>| undefined> {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Resolve the promise with the string value after 3 seconds
      resolve(this.canvasRef);
    }, 3000);
  });
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
                this.modalComponent.open(canvas);
            }}}

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
