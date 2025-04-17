import { Component } from '@angular/core';
import { IonChip} from '@ionic/angular/standalone';

@Component({
  selector: 'app-pilas-colas',
  templateUrl: '../pilas-colas/pilas-colas.component.html',
  styleUrls: ['../pilas-colas/pilas-colas.component.scss'],
  standalone: true, 
  imports: [IonChip],
})
export class PilasColasComponent{
  tituloPila = 'Información sobre Pilas';
  contenidoPila = 'Aquí puedes encontrar detalles y ejemplos sobre la estructura de datos de Pilas (Stacks).';

}
