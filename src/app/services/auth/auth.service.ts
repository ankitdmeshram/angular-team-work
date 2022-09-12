import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  app = initializeApp(environment.firebaseConfig);

  auth = getAuth();

  signUp(val: any) {
    return createUserWithEmailAndPassword(this.auth, val.email, val.password)
      .then((res) => {
        alert("user registered successfully");
        return this.http.post("http://localhost:3000/users", val).subscribe()
      })
      .catch((error) => {
        // console.log(error.code)
        if (error.code == "auth/email-already-in-use") {
          alert("Email Already Used");
        } else if (error.code == "auth/invalid-email") {
          alert("Invalid Email")
        } else {
          alert("user registered failed");
        }
      });
  }

  signIn(val: any) {
    return signInWithEmailAndPassword(this.auth, val.email, val.password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential.user);
        alert("user logged in successfully");
        // ...
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        alert("user logged in failed")
      });
  }

  forgetPassword(val:any) {
  return sendPasswordResetEmail(this.auth, val.email)
  .then(() => {
    // Password reset email sent!
    // ..
    alert("password reset mail sent")
  })
  .catch((error) => {
    console.log( error.code);
    console.log( error.message);
    alert("password reset mail sent failed")
    // ..
  });
  }

}
