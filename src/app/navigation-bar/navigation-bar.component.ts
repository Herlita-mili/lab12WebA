import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {
  isLoginPage() {
    // Lógica para determinar si está en la página de inicio de sesión
    return window.location.pathname.includes('login');
  }

}
