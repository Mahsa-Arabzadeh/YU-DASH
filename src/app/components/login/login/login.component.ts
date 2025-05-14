import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { adminEmail, adminPassword } from '../../../../const/constants';
import { AuthService } from '../../../services/auth.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  profileForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.profileForm = this.formBuilder.group({
      email: [adminEmail, Validators.required],
      password: [adminPassword, Validators.required],
    });
  }

  handleOnSubmit() {
    const { email, password } = this.profileForm.value;

    if (this.profileForm.valid) {
      this.authService.logIn(email, password).subscribe({
        next: (user) => {
          this.authService.saveToken(environment.fakeToken);
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          alert(error.message);
        },
      });
    }
  }
}
