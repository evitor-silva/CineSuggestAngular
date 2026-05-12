import {Component, OnInit, ViewChild} from '@angular/core';
import {api} from "../../utils/api";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  data: any;

  constructor() {}

  ngOnInit(): void {
    // api().get("dfd").then((data) => {
    //
    // })
    this.data = {
      'duration': 2.4,
      'title': 'Breaking Bad',
      'description': 'Breaking Bad é uma série aclamada que narra a ' +
        'transformação de Walter White, um professor de química que, após ser diagnosticado com câncer,' +
        ' decide fabricar metanfetamina para garantir o futuro financeiro de sua família.',
      'episodes': 62,
      'type': 'SERIE',
      'seasons': 5,
      'rating': 9
    }
  }

}
