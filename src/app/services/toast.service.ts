import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }

  toastEvents = new Subject<{ message: string, cssClass: string }>();

  success(message: string) {
    this.toastEvents.next({ message, cssClass: 'bg-success text-light' });
  }

  error(message: string) {
    this.toastEvents.next({ message, cssClass: 'bg-danger text-light' });
  }

  warning(message: string) {
    this.toastEvents.next({ message, cssClass: 'bg-warning text-dark' });
  }

}
