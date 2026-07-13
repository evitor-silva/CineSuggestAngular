import {Component, OnInit} from '@angular/core';
import {api} from "../../utils/api";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  singupForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    api().post("/user/login", this.singupForm.value).then((data) => {
      console.log(data)
    }).catch((error) => {

    })

  }

}
