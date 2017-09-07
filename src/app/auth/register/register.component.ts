import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private AuthService: AuthService) { }

  register(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.AuthService
      .register(email, password)
      .catch((error: any) => {
        // TODO: display errors
      });
  }
}
