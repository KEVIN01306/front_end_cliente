import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo',
  templateUrl: '../ejemplo/ejemplo.component.html',
  styleUrls: ['../ejemplo/ejemplo.component.scss'],
  standalone: true, 
})
export class EjemploComponent{
  tituloPila = 'Información ejemplo';
  contenidoPila = 'Aquí puedes encontrar detalles de ejemplos.';

}
