import {Component, Input, OnInit} from '@angular/core';
import {NgbRating} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "../../services/toast.service";

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
  @Input() rating: number = 6;
  @Input() choose: boolean = false;

  constructor(private toastService: ToastService) {
  }

  ngOnInit(): void {
  }

  onRateChange(newRate: number) {
    console.log('New rating:', newRate);
    this.toastService.success("Sua Avaliação foi salva")
  }

}
