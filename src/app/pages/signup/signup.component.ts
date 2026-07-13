import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {api} from "../../utils/api";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  singupForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    api().post("/user", this.singupForm.value).then((data) => {
      console.log(data)
    }).catch((error) => {

    })

  }

}
