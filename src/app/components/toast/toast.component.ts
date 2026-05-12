import {Component, ElementRef, ViewChild} from '@angular/core';
import {ToastService} from "../../services/toast.service";

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent {
  toasts: { message: string, cssClass: string }[] = [];

  constructor(private toastService: ToastService) {
    this.toastService.toastEvents.subscribe(event => this.toasts.push(event));
  }
}
