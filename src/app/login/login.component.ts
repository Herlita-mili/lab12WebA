import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(event: Event): void {
    event.preventDefault(); // Evita el comportamiento predeterminado del formulario
    if (this.authService.login(this.username, this.password)) {
      // Redirige a la página de inicio después del inicio de sesión exitoso
      this.router.navigate(['/home']);
      console.log('Login exitoso');
    } else {
      console.log('Credenciales incorrectas');
    }
  }
}