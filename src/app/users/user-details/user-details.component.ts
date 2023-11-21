import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input() user:{ id: number, name: string }| undefined;

  // Puedes agregar una propiedad para almacenar los detalles del usuario
  userDetails: any; // Ajusta el tipo según la estructura de tus datos

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const userId = +params['userId'];
      // Aquí puedes cargar los detalles del usuario usando el userId
      // Puedes realizar una llamada a un servicio que obtenga los detalles del usuario
      // this.userDetails = userService.getUserDetails(userId);
    });
}
}