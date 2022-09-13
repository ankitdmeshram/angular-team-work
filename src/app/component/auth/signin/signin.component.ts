import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['../auth.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  signInForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  signIn(val:any) {
    this.auth.signIn(val);
  }

  testing() {
    this.auth.testing();
  }

}
