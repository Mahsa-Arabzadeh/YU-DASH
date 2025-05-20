import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { adminEmail, adminPassword } from '../../../../const/constants';
import { AuthService } from '../../../services/auth.service';
import { environment } from '../../../../environments/environment';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule,
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
          this.authService.saveToken(user.fakeToken);
          this.router.navigate(['/dashboard']);
        },
        error: () => {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Invalid email or password!',
            showConfirmButton: false,
            timer: 1500,
          });
        },
      });
    }
  }
}
