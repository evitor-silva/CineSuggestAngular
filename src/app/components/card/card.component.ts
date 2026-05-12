import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() title: string = 'Default Title'
  @Input() body: string = 'This is some text within a card body.';
  @Input() px: string = "p-4";
  constructor() { }

  ngOnInit(): void {
  }

}
