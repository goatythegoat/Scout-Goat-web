import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin(): void {

    if (!this.username.trim() || !this.password.trim()) {
      alert('Please enter both username and password.');
      return;
    }

    // Comprobación temporal de credenciales
    if (this.username.trim() === 'admin' && this.password === '1234') {
      this.router.navigate(['/home']);
    } else {
      alert('Invalid credentials.');
    }
  }

  onCancel(): void {
    this.username = '';
    this.password = '';

    this.router.navigate(['/home']);
  }
}