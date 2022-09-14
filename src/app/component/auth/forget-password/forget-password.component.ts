import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['../auth.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.allUsers()
  }

  users: any;

  allUsers() {
    this.auth.allUser().subscribe(res => {
      // console.log(res)
      this.users = res;
    })
  }

  deleteUser(id:number) {
    this.auth.deleteUser(id)
  }


  forgetPasswordForm = new FormGroup({
    email: new FormControl('')
  })

  forgetPassword(val: any) {
    this.auth.forgetPassword(val);
  }

}
