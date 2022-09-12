import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../auth.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  signUpForm = new FormGroup({
    name: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })

  signUp(val:any) {
    this.auth.signUp(val)
  }


}
